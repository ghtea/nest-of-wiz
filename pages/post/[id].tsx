// http://localhost:3000/post/096240e2a83d42c0b7d95914d17bee75

import type {NextPage} from "next"
import {useRouter} from "next/router"
import {useEffect, useMemo} from "react"
import {Code, NotionRenderer} from "react-notion-x"
import {useQuery} from "react-query"
import {Box} from "components/atoms/Box"
import {Flex} from "components/atoms/Flex"
import {TemplateBasic} from "components/templates/TemplateBasic"
import {getNotionPageContent} from "utils/notion/pages/getNotionPageContent"
//  import {getNotionPageContent} from "utils/notion/pages" // it works too
// import {getNotionPageContent} from "utils/notion" // TODO: figure out why it does not work

const Post: NextPage = () => {
  const router = useRouter()

  const pageId = useMemo(()=> {
    const pageIdQuery = router.query.id;
    if (typeof pageIdQuery === "string"){
      return pageIdQuery
    } else {
      return ""
    }
  } ,[router.query.id])

  const queryResult = useQuery(["getNotionXPage", pageId], () => getNotionPageContent(pageId))
  
  return (
    <TemplateBasic>
      <Flex>
        <Box className={"my-4 w-full max-w-4xl bg-white rounded-md border border-gray-100 border-solid md:w-10/12"}>
          {queryResult.data?.data && (
            <NotionRenderer 
              pageHeader
              fullPage={true}
              recordMap={queryResult.data.data}
              components={{
                code: Code,
              }}
            />
          )}
        </Box>
      </Flex>
    </TemplateBasic>
  )
}

export default Post
