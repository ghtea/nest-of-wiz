import type {AppProps} from "next/app"
import "styles/index.scss"

import {XStateProvider} from "store/provider"
import {ThemeProvider} from "styles/theme"
import {DayJsProvider} from "utils/dayjs"
import {QueryProvider} from "utils/react-query"
// prismsjs resources
import "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
// https://www.npmjs.com/package/prism-themes
import "styles/prism-dracula.customized.scss";
// import "prism-themes/themes/prism-dracula.css" 

function MyApp({Component, pageProps}: AppProps) {
  return (
    <XStateProvider>
      <QueryProvider>
        <ThemeProvider>
          <DayJsProvider>
            <Component {...pageProps} />
          </DayJsProvider>
        </ThemeProvider>
      </QueryProvider>
    </XStateProvider>
  )
}

export default MyApp
