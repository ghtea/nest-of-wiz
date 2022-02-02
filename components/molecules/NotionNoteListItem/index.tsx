import {useRouter} from "next/router";
import {useCallback, useMemo} from "react";
import {Box, Chip, Flex, Link, Text} from "components/atoms";
import {NoteNotionPage} from "components/organisms/NotionNote/types";
import {useDayJsContext} from "utils/dayjs";

export type NotionNoteListItemProps = {
  data: NoteNotionPage
}

export const NotionNoteListItem: React.FunctionComponent<NotionNoteListItemProps> = ({
  data
}) => {
  const router = useRouter()
  const dayJs = useDayJsContext()

  const title = useMemo(()=>data.properties["Title"].title[0] ? data.properties["Title"].title[0]["plain_text"] : "", [data.properties]) 
  const updatedText = useMemo(()=>{
    return dayJs(data.properties.Updated.last_edited_time).format("LLL")
  }, [data.properties.Updated.last_edited_time, dayJs])
  const tags = useMemo(()=>{
    return [...(data.properties["Tags"].multi_select || [])]
  },[data.properties])

  const onClick = useCallback(()=>{
    router.push(`/note/${data.id}`)
  },[data.id, router])

  return (
    <Flex className="items-start py-2 cursor-pointer" onClick={onClick}>
      <Text className="text-xl font-medium">{title}</Text>
      <Flex className="flex-row mt-2">
        {tags.map(item=>(
          <Box key={`tag-${item.id}`} className="mx-1 last:mr-0 first:ml-0">
            <Chip>{item.name}</Chip>
          </Box>
        ))}
      </Flex>
      <Box className="mt-2">
        <Text appearance="hint" className="text-sm">{updatedText}</Text>
      </Box>
    </Flex>
  )
}