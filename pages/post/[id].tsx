// http://localhost:3000/post/096240e2a83d42c0b7d95914d17bee75

import type {GetServerSideProps, NextPage} from "next"
import {NotionAPI} from "notion-client"
import {NotionRenderer} from "react-notion-x"
import {notion} from "utils/notion"
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for collection views (optional)
import "rc-dropdown/assets/index.css"

// used for rendering equations (optional)
import "katex/dist/katex.min.css"

type PostProps = {
  recordMap: any
}

const Post: NextPage<PostProps> = ({
  recordMap
}) => {
  return (
    <div>
      <NotionRenderer recordMap={recordMap} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageId = context.params?.id
  if (typeof pageId !== "string") {
    return ({props: {

    }})
  }

  // const response = await notion.pages.retrieve({
  //   page_id: pageId
  // })

  // const response = await notion.blocks.children.list({
  //   block_id: pageId,
  //   page_size: 50,
  // });

  const notionClient = new NotionAPI()
  
  try {
    const response = await notionClient.getPage(pageId)
    console.log("response: ", response); // TODO: remove
    return ({
      props: {
        recordMap: response
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
