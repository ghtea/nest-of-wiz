import {useEffect, useMemo} from "react";
import {useQuery} from "react-query";
import {NoteNotionPage} from "../NotionNote/types";
import {Card, Flex, Link} from "components/atoms";
import {queryNotionDatabase} from "utils/notion";
import {NotionPage} from "utils/notion/types";


export type NoteCollectionProps = {
  category: undefined
}

export const NoteCollection: React.FunctionComponent = () => {

  const databaseResult = useQuery("queryNotionDatabase", async () => queryNotionDatabase({
    database_id: "897ff39a0fb84c6fb0466c167b4cd958"
  }))
  
  const pages: NoteNotionPage[] = useMemo(()=>{
    const dataNotionObject = databaseResult.data?.data.object;

    if (dataNotionObject === "list" ){
      return databaseResult.data?.data.results.filter(item => item.object === "page") as MyNotionNotePage[]
    }
    else {
      return []
    }
  }, [databaseResult.data?.data.object, databaseResult.data?.data.results])

  useEffect(()=>{
    console.log("pages: ", pages); // TODO: remove 
  },[pages])
  
  return (
    <Card>
      <Flex>

      </Flex>
      <Flex>
        { (pages|| []).map(item => (
          <Link key={`${item.id}`} href={`/note/${item.id}`}>
            <Flex className="flex-row">
              {item.properties["Name"].title[0]["plain_text"]} {/* TODO: add types */}
            </Flex>
          </Link>
        ))}
      </Flex>
    </Card>
  )
}