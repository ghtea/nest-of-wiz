import {NotionAPI} from "notion-client"

export const notionXClient = new NotionAPI()
// axios.get(`/api/notionX/pages/${id}`) makes trouble

export * from "./getNotionPageContent"