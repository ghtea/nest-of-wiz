import type {NextPage, GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import {useRouter} from "next/router"
import {ExtendedRecordMap} from "notion-types"
import {getPageTitle, getAllPagesInSpace} from "notion-utils"

import {useMemo} from "react"
import {Flex} from "components/atoms"
import {NotionNote} from "components/organisms/NotionNote"
import {NoteNotionPage} from "components/organisms/NotionNote/types"
import {UtterancesCommentList} from "components/organisms/UtterancesCommentList"
import {TemplateBasic} from "components/templates/TemplateBasic"
import {isDev} from "utils/environment"
import {notion} from "utils/notion"
import {notionXClient} from "utils/notion-x"
import {NotionPage} from "utils/notion/types"

type NotePageProps = {
  recordMap?: ExtendedRecordMap
  page?: NotionPage
}

const NotePage: NextPage<NotePageProps> = ({
  recordMap,
  page,
}) => {
  // const router = useRouter()

  // const pageId = useMemo(()=>{
  //   const rawPageId = router.query.id
  //   return typeof rawPageId === "string" ? rawPageId : ""
  // }, [router.query.id])

  const pageTitle = useMemo(()=>{
    return recordMap ? getPageTitle(recordMap) : "Note"
  },[recordMap])

  return (
    <>
      <Head>
        <title>{pageTitle}</title> 
      </Head>
      <TemplateBasic>
        <Flex className="w-full max-w-4xl md:w-10/12">
          <NotionNote recordMap={recordMap} page={page as NoteNotionPage}/>
          <Flex className="px-4 min-h-[400px]">
            {recordMap && (
              <UtterancesCommentList/>
            )}
          </Flex>
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
    const pageData = await notion.pages.retrieve({page_id: id})
  
    return {
      props: {
        recordMap,
        page: pageData as NotionPage
      },
      revalidate: 10
    }
  }
  catch (error){
    console.log(error)

    return {
      props: {
        recordMap: undefined,
        page: undefined
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

  // dont use it yet
  const rootNotionPageId = "897ff39a0fb84c6fb0466c167b4cd958" // TODO: change later

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  // const pages = await getAllPagesInSpace(
  //   rootNotionPageId,
  //   undefined,
  //   notionXClient.getPage.bind(notionXClient),
  //   {
  //     traverseCollections: false
  //   }
  // )

  const pages: string[] = [];

  const paths = Object.keys(pages).map((pageId) => `/note/${pageId}`)

  return {
    paths,
    fallback: true
  }
}

export default NotePage
