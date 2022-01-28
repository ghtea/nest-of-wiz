import type {AppProps} from "next/app"
import "styles/index.scss"

// prismsjs resources
import "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
import "prism-themes/themes/prism-dracula.css" // https://www.npmjs.com/package/prism-themes
import {QueryProvider} from "utils/react-query"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  )
}

export default MyApp
