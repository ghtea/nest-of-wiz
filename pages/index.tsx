import type {NextPage} from "next"
import {useEffect, useMemo} from "react"
import {useQuery} from "react-query"
import {Flex, Link} from "components/atoms"
import {TemplateBasic} from "components/templates/TemplateBasic"
import {queryNotionDatabase} from "utils/notion/databases/queryNotionDatabase"
import {NotionPage} from "utils/notion/types"

const Home: NextPage= () => {
  const databaseResult = useQuery("queryNotionDatabase", async () => queryNotionDatabase({
    database_id: "897ff39a0fb84c6fb0466c167b4cd958"
  }))
  useEffect(()=>{
    console.log("databaseResult: ", databaseResult); // TODO: remove 
  },[databaseResult]) 

  const pages: NotionPage[] = useMemo(()=>{
    const dataNotionObject = databaseResult.data?.data.object;

    if (dataNotionObject === "list" ){
      return databaseResult.data?.data.results.filter(item => item.object === "page") as NotionPage[]
    }
    else {
      return []
    }
  }, [databaseResult.data?.data.object, databaseResult.data?.data.results])

  return (
    <TemplateBasic>
      <Flex>
        { (pages|| []).map(item => (
          <Link key={`${item.id}`} href={`/post/${item.id}`}>
            <Flex className="flex-row">
              {item.properties["Name"]["title"][0]["plain_text"]} {/* TODO: add types */}
            </Flex>
          </Link>
        ))}
      </Flex>
    </TemplateBasic>
  )
}

export default Home
