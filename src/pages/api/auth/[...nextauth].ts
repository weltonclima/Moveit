import NextAuth from 'next-auth';
import { Login, query as q } from 'faunadb';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';

type Profile = {
  id: number;
  name: string;
  login: string;
  email: string;
  avatar_url: string;
}

type Data = {
  ref: {
    id: string;
  },
  data: {
    id: number;
    name: string;
    login: string;
    email: string;
    avatar_url: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

export default NextAuth({

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    /*Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })*/
  ],
  callbacks: {
    async signIn(user, account, profile: Profile) {
      const { id, avatar_url, name, email, login } = profile;
      
      try {

        await fauna.query<Data>(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_id'),
                  q.Casefold(profile.id)
                )
              )
            ),
            q.Map(
              [
                [id,
                  {
                    "id": id,
                    "name": name,
                    "login": login,
                    "email": email,
                    "avatar_url": avatar_url,
                    "level": 1,
                    "currentExperience": 0,
                    "challengesCompleted": 0
                  }
                ]
              ],
              q.Lambda(
                ["dID", "data"],
                q.Create(q.Ref(q.Collection("users"), q.Var("dID")), { data: q.Var("data") })
              )
            ),
            q.Get(
              q.Match(
                q.Index('user_by_id'),
                q.Casefold(profile.id)
              )
            )
          )
        )
        
        return true;
      } catch {
        return false;
      }
    }
  }
})