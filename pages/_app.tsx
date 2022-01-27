import type {AppProps} from "next/app"
import "styles/index.scss"

import "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
import "prism-themes/themes/prism-dracula.css" // https://www.npmjs.com/package/prism-themes

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
