import type {NextPage} from "next"
import {useContext, useEffect, useMemo} from "react"
import {Flex, Link, Image, Box, Text, Card} from "components/atoms"
import {NoteCollection} from "components/organisms/NotionNoteCollection"
import {TemplateBasic} from "components/templates/TemplateBasic"
const Home: NextPage= () => {

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
                <Link href={"https://github.com/ghtea"}>github</Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex className="flex-row justify-center px-8">
          <Box className="flex-1 h-[1px] bg-neutral-200"/>
        </Flex>
        <Box className="mt-8">
          <Flex className="flex-row justify-center">
            <Box className="mx-4"><Text className="text-xl font-bold text-indigo-600 dark:text-indigo-600">All</Text></Box>
            <Box className="mx-4"><Text className="text-xl font-medium">Study</Text></Box>
            <Box className="mx-4"><Text className="text-xl font-medium">Diary</Text></Box>
          </Flex>
        </Box>
        <Box className="mt-8">
          <Flex className="flex-row justify-center">
            <Box className="mx-4"><Text>all</Text></Box>
            <Box className="mx-4"><Text>recipe</Text></Box>
            <Box className="mx-4"><Text>diary</Text></Box>
          </Flex>
        </Box>
        <Box className="mt-4">
          <NoteCollection/>
        </Box>
      </Flex>
    </TemplateBasic>
  )
}

export default Home
