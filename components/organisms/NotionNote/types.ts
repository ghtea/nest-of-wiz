

import {CheckboxProperty, CreatedTimeProperty, DateProperty, LastEditedTimeProperty, MultiSelectProperty, NotionPage, RelationProperty, SelectProperty, TitleProperty} from "utils/notion/types";


export type NoteNotionPage = NotionPage & {
  properties: {
    Title: TitleProperty
    Published: CheckboxProperty
    Category: SelectProperty<NoteCategoryId>
    Series: RelationProperty
    "Study Tags": MultiSelectProperty
    "Diary Tags": MultiSelectProperty
    Date: DateProperty
    Updated: LastEditedTimeProperty
    Created: CreatedTimeProperty
  }
}

export enum NoteCategoryId {
  STUDY = "7a906eb7-02fa-4d9f-86b1-ae084abb5fea",
  DIARY = "64672a59-35fd-456c-9c6c-b200f94a9d23"
}