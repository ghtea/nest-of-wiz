import {QueryDatabaseParameters, QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints"
import axios, {AxiosResponse} from "axios"

type QueryNotionDatabase = (args: QueryDatabaseParameters) => Promise<AxiosResponse<QueryDatabaseResponse>>

export const queryNotionDatabase: QueryNotionDatabase  = (args) => {
  return axios.post("/api/notion/databases/query", args)
}