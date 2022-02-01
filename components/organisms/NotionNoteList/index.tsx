import {useCallback, useEffect, useMemo} from "react";
import {useQuery} from "react-query";
import {NoteCategoryId, NoteNotionPage} from "../NotionNote/types";
import {Box, Card, Divider, Flex, Icon, Link, Text} from "components/atoms";
import {NotionNoteListItem} from "components/molecules/NotionNoteListItem";
import {queryNotionDatabase} from "utils/notion";


export type NotionNoteListProps = {
  category: null | NoteCategoryId
}

export const NotionNoteList: React.FunctionComponent<NotionNoteListProps> = ({
  category
}) => {
  const queryNotionDatabaseByCategory = useCallback(()=>{
    const filter = {
      and: [
        // {
        //   property: "Published",
        //   checkbox: {
        //     equals: true
        //   }
        // },
        {
          property: "Category",
          select: category === NoteCategoryId.STUDY 
            ? {equals: "Study"} : category === NoteCategoryId.DIARY 
              ? {equals: "Diary"} 
              : {is_not_empty: true} 
        }
      ]
    } as any; // types in package seems wrong

    return queryNotionDatabase({
      database_id: "897ff39a0fb84c6fb0466c167b4cd958",
      filter,
    })
  },[category])

  // https://react-query.tanstack.com/guides/paginated-queries
  const databaseResult = useQuery(["queryNotionDatabase", category], queryNotionDatabaseByCategory)
  
  const pages: NoteNotionPage[] = useMemo(()=>{
    const dataNotionObject = databaseResult.data?.data.object;

    if (dataNotionObject === "list" ){
      return databaseResult.data?.data.results.filter(item => item.object === "page") as NoteNotionPage[]
    }
    else {
      return []
    }
  }, [databaseResult.data?.data.object, databaseResult.data?.data.results])

  useEffect(()=>{
    console.log("pages: ", pages); // TODO: remove 
  },[pages])
  
  return (
    <Flex>
      <Flex>

      </Flex>
      <Flex>
        {databaseResult.isLoading && (
          <Flex className="justify-center h-40">
            <Card className="justify-center w-20 h-20">
              <Icon name="Sync"/>
            </Card>
          </Flex>
        )}
        {!databaseResult.isLoading && (
          <Card className="w-full rounded-lg">
            {pages.map((item, index) => (
              <Flex key={`item-${item.id}`} className="mt-2 first:mt-0">
                <NotionNoteListItem data={item}/>
                {pages.length - 1 > index && (<Divider/>) }
              </Flex>
            ))}
          </Card>
        )}
      </Flex>
    </Flex>
  )
}