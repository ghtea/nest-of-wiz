import {ExtendedRecordMap} from "notion-types"
import {useEffect, useMemo} from "react"
import {Code, CollectionRow, NotionRenderer} from "react-notion-x"
import {NoteNotionPage} from "./types"
import {Card, NotionImage, Flex, Text, Box, Chip} from "components/atoms"
import {useDayJsContext} from "utils/dayjs"


export type NotionNoteProps = {
  recordMap?: ExtendedRecordMap
  page?: NoteNotionPage
}

export const NotionNote: React.FunctionComponent<NotionNoteProps> = ({
  recordMap,
  page
}) => {
  const dayJs = useDayJsContext()

  const title = useMemo(()=>page?.properties["Title"].title[0] ? page.properties["Title"].title[0]["plain_text"] : "", [page?.properties]) 
  const updatedText = useMemo(()=>{
    return dayJs(page?.properties.Updated.last_edited_time).format("LLL")
  }, [page?.properties.Updated.last_edited_time, dayJs])
  const tags = useMemo(()=>{
    return [
      ...(page?.properties["Study Tags"].multi_select || []), 
      ...(page?.properties["Diary Tags"].multi_select || [])
    ]
  },[page?.properties])
  
  return (
    <Card className={"my-4 w-full"}>
      {page && (
        <Flex className="items-start px-6 mt-6">
          <Text className="text-3xl font-bold">{title}</Text>
          <Flex className="flex-row mt-4">
            {tags.map(item =>(
              <Box key={`tag-${item.id}`} className="mx-1 last:mr-0 first:ml-0">
                <Chip>{item.name}</Chip>
              </Box>
            ))}
          </Flex>
          <Flex className="items-end mt-4">
            <Text className="text-sm" appearance="hint">{`${updatedText} 수정`}</Text>
          </Flex>
        </Flex>
      )}
      {recordMap && (
        <NotionRenderer 
          recordMap={recordMap}
          customImages={true}
          components={{
            code: Code,
            // image: NotionImage,
            collectionRow: ()=>null,
          }}
        />
      )}
    </Card>
  )
}