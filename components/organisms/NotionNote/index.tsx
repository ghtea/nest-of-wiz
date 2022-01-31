import {ExtendedRecordMap} from "notion-types"
import {Code, CollectionRow, NotionRenderer} from "react-notion-x"
import {Card, NotionImage} from "components/atoms"


export type NotionNoteProps = {
  recordMap?: ExtendedRecordMap
}

export const NotionNote: React.FunctionComponent<NotionNoteProps> = ({
  recordMap
}) => {
  return (
    <Card className={"my-4 w-full"}>
      {recordMap && (
        <NotionRenderer 
          fullPage={true}
          recordMap={recordMap}
          customImages={true}
          components={{
            code: Code,
            image: NotionImage,
            // collectionRow: NotionCollectionRow
            collectionRow: CollectionRow,
                  
          }}
        />
      )}
    </Card>
  )
}