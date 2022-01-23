import {NextApiRequest, NextApiResponse} from "next";
import {notion} from "utils/notion";
import * as notionTypes from "notion-types"
// import {NotionAPI} from "notion-client"

// const api = new NotionAPI()
// api.getCollectionData({})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await notion.pages.update(req.body)
    res.status(200).json(response)
  }
  catch(error) {
    console.log(error);
    res.status(400)
  }
}

type dd =notionTypes.