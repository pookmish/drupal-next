import Link from "next/link"

import {StanfordBanner} from "@/components/paragraphs/stanford-banner";
import {Row} from "@/components/paragraphs/row";
import {BasicPage} from "../../types/drupal";

interface BasicPageNodeProps {
  node: BasicPage
  homepage?: boolean
}

export const NodeStanfordPage = ({node, homepage = false, ...props}: BasicPageNodeProps) => {

  return (
    <article {...props}>
      {!homepage && <h1 className="su-cc su-max-w-screen-2xl">{node.title}</h1>}
      {node.su_page_banner && <StanfordBanner paragraph={node.su_page_banner}/>}
      {node.su_page_components && <Row rows={node.su_page_components}/>}
    </article>
  )
}

export const NodeStanfordPageListItem = ({node, ...props}: BasicPageNodeProps) => {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
    </article>
  )
}

export const NodeStanfordPageCard = ({node, ...props}: BasicPageNodeProps) => {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
    </article>
  )
}