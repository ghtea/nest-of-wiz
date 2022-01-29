import React from "react"
import {Flex, Text,Link} from "components/atoms"

export type TemplateBasicProps = {}

export const TemplateBasic: React.FunctionComponent = ({
  children
}) => {

  return (
    <Flex className="w-screen h-screen bg-slate-50">
      <Flex className="fixed flex-row justify-between items-center py-2 px-4 w-screen h-12 bg-white border-b border-gray-200 border-solid">
        <Link href={"/"}><Text className="cursor-pointer">Home</Text></Link>
        <div>zz</div>
      </Flex>
      <Flex className="pt-12">
        <Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}