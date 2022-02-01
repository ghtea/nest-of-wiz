import clsx from "clsx"
import type {NextPage} from "next"
import {useState} from "react"
import {Flex, Link, Image, Box, Text, Divider, Icon} from "components/atoms"
import {NoteCategoryId} from "components/organisms/NotionNote/types"
import {NotionNoteList} from "components/organisms/NotionNoteList"
import {TemplateBasic} from "components/templates/TemplateBasic"

const Home: NextPage = () => {
  const [categoryId, setCategoryId] = useState<NoteCategoryId | null>(null)

  return (
    <TemplateBasic>
      <Flex>
        <Box className="mt-4">
          <Flex className="flex-row py-4 px-8">
            <Box>
              <Image 
                className="overflow-hidden rounded-full"
                alt={"profile of author"} 
                src={"/images/profile.png"}
                layout="fixed"
                width={"100px"}
                height={"100px"}
                priority={true}
              />
            </Box>
            <Box className="ml-4">
              <Flex className="items-start"> 
                <Flex className="flex-row items-end">
                  <Text className="text-2xl font-medium">{"박재현"}</Text>
                  <Text className="ml-2 text-xl font-light" appearance={"hint"}>{"wiz"}</Text>
                </Flex>
                <Flex>
                  <Text className="font-light" appearance={"hint"}>{"frontend software engineer"}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="ml-8">
              <Flex className="flex-row">
                <Link href={"https://github.com/ghtea"}>
                  <Icon name={"Github"} size={24} className="cursor-pointer"/>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Divider className="px-8"/>
        <Box className="mt-8">
          <Flex className="flex-row justify-center">
            <Box className="mx-4">
              <Text 
                onClick={()=>setCategoryId(null)} 
                className={clsx("text-xl font-medium cursor-pointer", categoryId === null && "text-indigo-600 dark:text-indigo-600")} >
                All
              </Text>
            </Box>
            <Box className="mx-4">
              <Text 
                onClick={()=>setCategoryId(NoteCategoryId.STUDY)} 
                className={clsx("text-xl font-medium cursor-pointer", categoryId === NoteCategoryId.STUDY && "text-indigo-600 dark:text-indigo-600")} >
                Study
              </Text>
            </Box>
            <Box className="mx-4">
              <Text 
                onClick={()=>setCategoryId(NoteCategoryId.DIARY)} 
                className={clsx("text-xl font-medium cursor-pointer", categoryId === NoteCategoryId.DIARY && "text-indigo-600 dark:text-indigo-600")} >
                Diary
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex className="px-4 my-4">
          <NotionNoteList
            category={categoryId}
          />
        </Flex>
      </Flex>
    </TemplateBasic>
  )
}

export default Home
