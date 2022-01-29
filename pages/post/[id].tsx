import type {NextPage, GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import {ExtendedRecordMap} from "notion-types"
import {getPageTitle, getAllPagesInSpace} from "notion-utils"

import {useMemo} from "react"
import {Code, CollectionRow, NotionRenderer} from "react-notion-x"
import {Box, Flex, NotionImage} from "components/atoms"
import {NotionCollectionRow} from "components/molecules/NotionColloectionRow"
import {TemplateBasic} from "components/templates/TemplateBasic"
import {isDev} from "utils/environment"
import {notionXClient} from "utils/notion-x"

type PostPageProps = {
  recordMap?: ExtendedRecordMap
}

const PostPage: NextPage<PostPageProps> = ({
  recordMap
}) => {
  const pageTitle = useMemo(()=>{
    return recordMap ? getPageTitle(recordMap) : "Not Found"
  },[recordMap])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <TemplateBasic>
        <Flex>
          <Box className={"my-4 w-full max-w-4xl bg-white rounded-md border border-gray-100 border-solid md:w-10/12"}>
            {recordMap && (
              <NotionRenderer 
                fullPage={true}
                recordMap={recordMap}
                customImages={true}
                components={{
                  code: Code,
                  image: NotionImage,
                  // collectionRow: NotionCollectionRow
                  collectionRow: CollectionRow
                }}
              />
            )}
          </Box>
        </Flex>
      </TemplateBasic>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id
    if (typeof id !== "string") throw Error("type of id is not string")

    const recordMap = await notionXClient.getPage(id)
  
    return {
      props: {
        recordMap
      },
      revalidate: 10
    }
  }
  catch (error){
    console.log(error)

    return {
      props: {
        recordMap: undefined
      },
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const rootNotionPageId = "067dd719a912471ea9a3ac10710e7fdf"
  const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3"

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notionXClient.getPage.bind(notionXClient),
    {
      traverseCollections: false
    }
  )

  console.log(`getStaticPaths pages: ${pages}`)

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`)

  return {
    paths,
    fallback: true
  }
}

export default PostPage
