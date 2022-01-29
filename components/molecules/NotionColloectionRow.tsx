import {PageBlock} from "notion-types";
import React, {forwardRef, memo, useEffect, useMemo} from "react"
import {Flex} from "components/atoms";

export type NotionCollectionRowProps = {
  block: PageBlock
}

export const NotionCollectionRow: React.FunctionComponent<NotionCollectionRowProps> =({
  block
}) => {
  useEffect(()=>{
    console.log("block: ", block); // TODO: remove 
  },[block])
  
  return (
    <Flex>collection-row</Flex>
  )
}