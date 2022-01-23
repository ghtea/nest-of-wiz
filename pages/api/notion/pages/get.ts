import {NextApiRequest, NextApiResponse} from "next";
import {notion} from "utils/notion";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("yo"); // TODO: remove
    const response = await notion.pages.retrieve(req.body)
    res.status(200).json(response)
  }
  catch(error) {
    console.log(error);
    res.status(400)
  }
}