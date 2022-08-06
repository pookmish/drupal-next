import Link from "next/link"

import {Publication} from "../../types/drupal";

interface PublicationNodeProps {
  node: Publication
}

export const NodeStanfordPublication = ({node, ...props}: PublicationNodeProps) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
    </article>
  )
}

export const NodeStanfordPublicationListItem = ({node, ...props}: PublicationNodeProps) => {
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

export const NodeStanfordPublicationCard = ({node, ...props}: PublicationNodeProps) => {
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