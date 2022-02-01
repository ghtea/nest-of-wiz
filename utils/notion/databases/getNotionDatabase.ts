import {GetDatabaseParameters, GetDatabaseResponse} from "@notionhq/client/build/src/api-endpoints"
import axios, {AxiosResponse} from "axios"

type GetNotionDatabase = (args: GetDatabaseParameters) => Promise<AxiosResponse<GetDatabaseResponse, any>>

export const getNotionDatabase: GetNotionDatabase = (args) => {
  return axios.post("/api/notion/databases/get", args)
}