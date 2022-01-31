import {useMemo} from "react";
import {Box, Flex, Link, Text} from "components/atoms";
import {NoteNotionPage} from "components/organisms/NotionNote/types";
import {useDayJsContext} from "utils/dayjs";

export type NotionNoteListItemProps = {
  data: NoteNotionPage
}

export const NotionNoteListItem: React.FunctionComponent<NotionNoteListItemProps> = ({
  data
}) => {
  const dayJs = useDayJsContext()

  const title = useMemo(()=>data.properties["Title"].title[0] ? data.properties["Title"].title[0]["plain_text"] : "", [data.properties]) 
  const updatedText = useMemo(()=>{
    console.log("data.properties.Updated.last_edited_time: ", data.properties.Updated.last_edited_time); // TODO: remove
    return dayJs(data.properties.Updated.last_edited_time).format("LLL")
  }, [data.properties.Updated.last_edited_time, dayJs])
  const tags = useMemo(()=>{
    return [
      ...(data.properties["Study Tags"].multi_select || []), 
      ...(data.properties["Diary Tags"].multi_select || [])
    ]
  },[data.properties])

  return (
    <Link href={`/note/${data.id}`}>
      <Flex className="items-start py-2 cursor-pointer">
        <Text className="text-xl font-medium">{title}</Text>
        <Flex className="flex-row mt-2">
          {tags.map(item=>(
            <Box key={`tag-${item.id}`} className="px-2 mx-1 last:mr-0 first:ml-0 bg-zinc-100 dark:bg-zinc-900 rounded-full">
              <Text>{item.name}</Text>
            </Box>
          ))}
        </Flex>
        <Box className="mt-2">
          <Text appearance="hint" className="text-sm">{updatedText}</Text>
        </Box>
      </Flex>
    </Link>
  )
}