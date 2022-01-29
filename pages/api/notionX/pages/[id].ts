import {NextApiRequest, NextApiResponse} from "next";
import {notionXClient} from "utils/notion-x";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {id} = req.query
    if (typeof id !== "string") throw Error("id should be string")
    
    const response = await notionXClient.getPage(id)
    res.status(200).json(response)
  }
  catch(error) {
    console.log(error);
    res.status(400)
  }
}