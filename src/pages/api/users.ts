import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { fauna } from "../../services/fauna";
import { query as q } from 'faunadb'

type User = {
  ref: {
    id: string;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = getSession({ req });

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold((await session).user.email)
        )
      )
    );

    return res.status(200).json({ data: user });

  } else if (req.method === 'PUT') {
    const session = getSession({ req });

    const getUser = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold((await session).user.email)
        )
      )
    );

    const updateUser = await fauna.query(
      q.Update(
        q.Ref(q.Collection('users'), getUser.ref.id),
        {
          data: {
            level: req.body.level,
            score: req.body.score
          }
        }
      )
    );
    return res.status(200).json({ data: updateUser })

  } else {

    res.setHeader('Allow', 'GET and PUT');
    res.status(405).end('Method not allowed');
  }
}