import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cachedDb: Db = null;

async function connectDb(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substring(1);
  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (req: NowRequest, res: NowResponse) => {
  const { email } = req.body;

  const db = await connectDb(process.env.MONGODB_URI);
  const collection = db.collection('teste')
  await collection.insertOne({
    email,
    subscribeAt: new Date(),
  })

  return res.status(201).json({ ok: true })
}