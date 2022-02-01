import {memo, Ref, useCallback, useEffect, useRef} from "react"
import {Box, Flex} from "components/atoms"
import {ThemeName, useThemeContext} from "styles/theme"

export type UtterancesCommentListProps = {
}

export const UtterancesCommentList: React.FunctionComponent<UtterancesCommentListProps> = memo(({
  
}) => {
  const theme = useThemeContext()

  const handleRef = useCallback((element: HTMLDivElement) => {
    if (!element) return // I don't understand but it's needed

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("repo", "ghtea/nest-of-wiz-comments");
    script.setAttribute("theme", theme.name === ThemeName.LIGHT ? "github-light" : "github-dark");
    script.crossOrigin = "anonymous";
    script.async = true;

    while (element?.firstChild) {
      element.firstChild?.remove()
    }
    element?.appendChild(script);
  }, [theme.name]);
  
  return (
    <>
      <style global jsx>{`
        .utterances {
          max-width: unset;
        }
      `}</style>
      <Flex ref={handleRef} style={{marginLeft: 0, marginRight: 0}}></Flex>
    </>
  )
})

UtterancesCommentList.displayName = "UtterancesCommentList"