import Link from "next/link"

import {Banner} from "@/components/paragraphs/banner";
import {Row} from "@/components/paragraphs/row";

export const NodeStanfordPage = ({node, homepage, ...props}) => {

  return (
    <article {...props}>
      {!homepage && <h1>{node.title}</h1>}
      {node.su_page_banner && <Banner {...node.su_page_banner}/>}
      {node.su_page_components && <Row rows={node.su_page_components}/>}
    </article>
  )
}

export const NodeStanfordPageListItem = ({node, ...props}) => {
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

export const NodeStanfordPageCard = ({node, ...props}) => {
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