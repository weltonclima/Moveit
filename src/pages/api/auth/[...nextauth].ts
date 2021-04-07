import NextAuth from 'next-auth';
import { query as q } from 'faunadb';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';

type Profile = {
  id: number;
  avatar_url: string;
  name: string;
}

type Data = {
  ref: {
    id: string;
  },
  data: {
    id: number;
    name: string;
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
  ],
  callbacks: {
    async signIn(user, account, profile: Profile) {
      const { id, avatar_url, name } = profile;

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
            q.Create(
              q.Collection('users'),
              {
                data: {
                  id, 
                  name, 
                  avatar_url,
                  level: 1,
                  currentExperience: 0,
                  challengesCompleted: 0
                }
              }
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