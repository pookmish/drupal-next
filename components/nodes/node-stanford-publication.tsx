import Image from "next/image"
import Link from "next/link"

import {formatDate} from "@/lib/format-date"

export const NodeStanfordPublication = ({node, ...props}) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
    </article>
  )
}

export const NodeStanfordPublicationListItem = ({node, ...props}) => {
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

export const NodeStanfordPublicationCard = ({node, ...props}) => {
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