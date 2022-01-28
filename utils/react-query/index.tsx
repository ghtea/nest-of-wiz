import React from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query"

const queryClient = new QueryClient()
 
export const QueryProvider: React.FunctionComponent = ({
  children
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}