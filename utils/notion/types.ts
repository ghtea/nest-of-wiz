// https://developers.notion.com/reference/page
export type NotionPage = {
  object: "page"
  id: string
  created_time: string;
  last_edited_time: string
  archived: boolean
  icon: any
  cover: any
  properties: Record<string, Property>
  parent: NotionPageParentDatabase | NotionPageParentPage | NotionPageParentWorkspace
  url: string
}

type NotionPageParentDatabase = {
  type: "database_id"
  database_id: string
}

type NotionPageParentPage = {
  type: "page_id"
  page_id: string
}

type NotionPageParentWorkspace = {
  type: "workpace"
  workpace: true
}

type Property = {
  id: string
  type: PropertyType
}

enum PropertyType {
  RICH_TEXT = "rich_text",
  NUMBER = "number", 
  SELECT = "select", 
  MULTI_SELECT = "multi_select", 
  DATE = "date", 
  FORMULA = "formula", 
  RELATION = "relation", 
  ROLLUP = "rollup", 
  TITLE = "title", 
  PEOPLE = "people", 
  FILES = "files", 
  CHECKBOX = "checkbox", 
  URL = "url", 
  EMAIL = "email", 
  PHONE_NUMBER = "phone_number", 
  CREATED_TIME = "created_time", 
  CREATED_BY = "created_by", 
  LAST_EDITED_TIME = "last_edited_time",
  LAST_EDITED_BY = "last_edited_by"
}

