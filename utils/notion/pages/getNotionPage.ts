import {GetPageParameters, GetPageResponse} from "@notionhq/client/build/src/api-endpoints"
import axios from "axios"

type GetNotionPage = (args: GetPageParameters) => Promise<GetPageResponse>

export const getNotionPage: GetNotionPage = (args) => {
  return axios.post("/api/notion/pages/get", args)
}