// http://localhost:3000/post/096240e2a83d42c0b7d95914d17bee75

import type {GetServerSideProps, NextPage} from "next"
import {NotionAPI} from "notion-client"
import {ExtendedRecordMap} from "notion-types"
import {useEffect} from "react"
import {Code, NotionRenderer} from "react-notion-x"
import {Box} from "components/atoms/Box"
import {Flex} from "components/atoms/Flex"
import {TemplateBasic} from "components/templates/TemplateBasic"

type PostProps = {
  recordMap: ExtendedRecordMap
}

const notion = new NotionAPI()

const Post: NextPage<PostProps> = ({
  recordMap,
}) => {
  useEffect(()=>{
    console.log("recordMap: ", recordMap); // TODO: remove 
  },[recordMap])
  
  return (
    <TemplateBasic>
      <Flex>
        <Box className={"my-4 w-full max-w-4xl bg-white rounded-md border border-gray-100 border-solid md:w-10/12"}>
          <NotionRenderer 
            pageHeader
            fullPage={true}
            recordMap={recordMap}
            components={{
              code: Code,
            }}
          />
        </Box>
      </Flex>
      
    </TemplateBasic>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageId = context.params?.id
  if (typeof pageId !== "string") {
    return ({props: {

    }})
  }

  try {

    const recordMap = await notion.getPage(pageId)

    return ({
      props: {
        recordMap: recordMap
      }
    })
  }
  catch(error){
    console.log("error: ", error); // TODO: remove
    return ({props: {

    }})
  }
  
}

export default Post
