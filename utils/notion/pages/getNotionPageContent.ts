import axios, {AxiosResponse} from "axios"
import {NotionAPI} from "notion-client"

type GetNotionPageContent = (...args: Parameters<NotionAPI["getPage"]>) => Promise<AxiosResponse<Awaited<ReturnType<NotionAPI["getPage"]>>>>

export const getNotionPageContent: GetNotionPageContent = (id) => {
  return axios.get(`/api/notionX/pages/${id}`)
}