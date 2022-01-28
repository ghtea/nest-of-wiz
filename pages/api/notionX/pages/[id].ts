import {NextApiRequest, NextApiResponse} from "next";
import {notionX} from "utils/notion";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {id} = req.query
    if (typeof id !== "string") throw Error("id should be string")
    
    const response = await notionX.getPage(id)
    res.status(200).json(response)
  }
  catch(error) {
    console.log(error);
    res.status(400)
  }
}