import Link from "next/link"

export const NodeStanfordEvent = ({node, ...props}) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
    </article>
  )
}

export const NodeStanfordEventListItem = ({node, ...props}) => {
  const startTime = new Date(node.su_event_date_time.value);
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
      <div>{startTime.toLocaleString()}</div>
    </article>
  )
}


export const NodeStanfordEventCard = ({node, ...props}) => {
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
