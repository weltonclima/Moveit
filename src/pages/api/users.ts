import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { fauna } from "../../services/fauna";
import { Get, Lambda, query as q } from 'faunadb'

type User = {
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).end('Unauthorized');
  }

  try {
    const getUser = await fauna.query<User>(
      q.Map(
        q.Paginate(q.Match(q.Index("order_by"))),
        Lambda(
          [
            "level", 
            "currentExperience", 
            "Ref"
          ], Get(q.Var("Ref")))
      )
    );
    
    if (!getUser) {
      return res.status(404).end('NotFound');
    }

    if (req.method === 'GET') {
      
      return res.status(200).json(getUser.data);

    } else {

      res.setHeader('Allow', 'GET');
      res.status(405).end('Method not allowed');
      return

    }
  } catch (err) {
    res.setHeader('Unprocessable', err);
    res.status(402).end('Unprocessable');
    return
  }
}