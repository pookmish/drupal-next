import Link from "next/link"

export const NodeStanfordPerson = ({node, ...props}) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
    </article>
  )
}

export const NodeStanfordPersonListItem = ({node, ...props}) => {
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

export const NodeStanfordPersonCard = ({node, ...props}) => {
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