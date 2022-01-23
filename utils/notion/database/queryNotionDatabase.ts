import {QueryDatabaseParameters, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints"
import axios from "axios"

type QueryNotionDatabase = (args: QueryDatabaseParameters) => Promise<QueryDatabaseResponse>

export const queryNotionDatabase: QueryNotionDatabase = (args) => {
  return axios.post("/api/notion/databases/query", args)
}