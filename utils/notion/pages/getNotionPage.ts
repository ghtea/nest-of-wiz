import {GetPageParameters, GetPageResponse} from "@notionhq/client/build/src/api-endpoints"
import axios from "axios"

type GetNotionPage = (args: GetPageParameters) => Promise<GetPageResponse>

export const getNotionPage: GetNotionPage = (args) => {
  console.log("yo11"); // TODO: remove
  return axios.post("/api/notion/pages/get", args)
}

// export const getNotionPage = async (args: GetPageParameters) => {
//   try {
//     const response = axios.post("/api/notion/pages/get", args)
//     return response
//   }
//   catch(error){
//     console.log("error: ", error); // TODO: remove
//     return null
//   }
// }

// mxt-qrji-wyh