import {Client} from "@notionhq/client"
import {NotionAPI} from "notion-client"

export const notion = new Client({auth: process.env.NEXT_PUBLIC_NOTION_KEY});

export const notionX = new NotionAPI()
// axios.get(`/api/notionX/pages/${id}`) makes trouble

export * from "./databases"
export * from "./pages"