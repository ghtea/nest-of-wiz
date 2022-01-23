import {GetDatabaseParameters, GetDatabaseResponse} from "@notionhq/client/build/src/api-endpoints"
import axios from "axios"

type GetNotionDatabase = (args: GetDatabaseParameters) => Promise<GetDatabaseResponse>

export const getNotionDatabase: GetNotionDatabase = (args) => {
  return axios.post("/api/notion/databases/get", args)
}