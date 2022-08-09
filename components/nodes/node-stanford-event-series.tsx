import Link from "next/link"
import {EventSeries} from "../../types/drupal";
import {Paragraph} from "@/components/paragraphs";

interface EventSeriesNodeProps {
  node: EventSeries
}

export const NodeStanfordEventSeries = ({node, ...props}: EventSeriesNodeProps) => {
  return (
    <article {...props}>
      <h1>{node.title}</h1>
      {node.su_event_series_subheadline}
      {node.su_event_series_dek}
      {node.su_event_series_components && node.su_event_series_components.map(paragraph =>
        <Paragraph key={paragraph.id} paragraph={paragraph}/>
      )}
    </article>
  )
}

export const NodeStanfordEventSeriesListItem = ({node, ...props}: EventSeriesNodeProps) => {
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

export const NodeStanfordEventSeriesCard = ({node, ...props}: EventSeriesNodeProps) => {
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