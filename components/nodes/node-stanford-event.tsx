import Link from "next/link"
import {DrupalLink} from "@/components/simple/link";
import {Paragraphs} from "@/components/paragraphs";

export const NodeStanfordEvent = ({node, ...props}) => {

  return (
    <article {...props}>
      {node.su_event_type && node.su_event_type.map((type, index) =>
        <div key={index}>
          {type.name}
        </div>
      )}
      <h1>{node.title}</h1>
      {node.su_event_subheadline}
      {node.su_event_dek}
      {node.su_event_sponsor && node.su_event_sponsor.map((sponsor, index) =>
        <div key={index}>
          {sponsor}
        </div>
      )}

      {node.su_event_date_time &&
          <div>
            {node.su_event_date_time.value} - {node.su_event_date_time.end_value}
          </div>
      }

      {node.su_event_location &&
          <div>
            {node.su_event_location.organization}
            {node.su_event_location.address_line1}
            {node.su_event_location.address_line2}
            {node.su_event_location.locality}
            {node.su_event_location.administrative_area}
            {node.su_event_location.postal_code}
          </div>
      }

      {node.su_event_alt_loc}
      {node.su_event_telephone}
      {node.su_event_email}
      {node.su_event_audience && node.su_event_audience.map((audience, index) =>
        <div key={index}>
          {audience.name}
        </div>
      )}

      {node.su_event_source &&
          <DrupalLink href={node.su_event_source.url}>{node.su_event_source.title}</DrupalLink>
      }

      {node.su_event_components &&
          <Paragraphs components={node.su_event_components}/>
      }
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
