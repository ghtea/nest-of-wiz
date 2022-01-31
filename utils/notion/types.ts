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

export type Property = {
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


// add only needed types for now
export type TitleProperty = Property & {
  type: PropertyType.TITLE
  title: {
    type: "text"
    plain_text: string
    text: {
      content: string
    }
  }[]
}

export type CheckboxProperty = Property & {
  type: PropertyType.CHECKBOX
  checkbox: boolean
}

export type DateProperty = Property & {
  type: PropertyType.DATE
  date: null | {
    end: null | string
    start: null | string
    time_zone: null | string
  }
}

export type CreatedTimeProperty = Property & {
  type: PropertyType.CREATED_TIME
  created_time: string // "2022-01-24T23:09:00.000Z"
}

export type LastEditedTimeProperty = Property & {
  type: PropertyType.LAST_EDITED_TIME
  last_edited_time: string // "2022-01-24T23:09:00.000Z"
}

export type MultiSelectProperty<Id = string> = Property & {
  type: PropertyType.MULTI_SELECT
  multi_select: null | {
    id: Id
    name: string
    color: NotionColor
  }[]
}

export type SelectProperty<Id = string> = Property & {
  type: PropertyType.SELECT
  select: null | {
    id: Id
    name: string
    color: NotionColor
  }[]
}

export type RelationProperty = Property & {
  type: PropertyType.RELATION
  relation: {id: string}[]
}

// 
export enum NotionColor {
  DEFAULT = "default",
  GRAY = "gray",
  BROWN = "brown",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
  RED = "red",
}