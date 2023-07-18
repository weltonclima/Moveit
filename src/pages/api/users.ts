import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { User } from '../../interfaces/User';
import { fauna } from "../../services/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (req.method === 'GET') {

    if (!session) {
      return res.status(401).end('Unauthorized');
    }

    try {
      const getUser = await fauna.query<User>(
        q.Map(
          q.Paginate(q.Match(q.Index("sort_by_desc"))),
          q.Lambda(
            [
              "level",
              "currentExperience",
              "Ref"
            ], q.Get(q.Var("Ref")))
        )
      );
            
      if (!getUser) {
        return res.status(404).end('NotFound');
      }

      return res.status(200).json(getUser.data);

    } catch (err) {
      res.setHeader('Unprocessable', err);
      res.status(402).end('Unprocessable');
      return
    }

  } else {

    res.setHeader('Allow', 'GET');
    res.status(405).end('Method not allowed');
    return

  }
}