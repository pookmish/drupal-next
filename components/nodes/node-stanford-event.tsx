import {DrupalLink} from "@/components/simple/link";
import {Paragraph} from "@/components/paragraphs";
import {Event} from "../../types/drupal";
import {formatDate} from "@/lib/format-date";
import {CalendarIcon} from "@heroicons/react/outline";
import {MapIcon} from "@heroicons/react/solid";
import formatHtml from "@/lib/format-html";

interface EventNodeProps {
  node: Event;
}

export const NodeStanfordEvent = ({node, ...props}: EventNodeProps) => {

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

      {node.su_event_components && node.su_event_components.map(paragraph =>
        <Paragraph key={paragraph.id} paragraph={paragraph}/>
      )}
    </article>
  )
}

export const NodeStanfordEventListItem = ({node, ...props}: EventNodeProps) => {
  const startTime = new Date(node.su_event_date_time.value);
  return (
    <article {...props}>
      <DrupalLink href={node.path.alias}>
        <h2 className="su-text-cardinal-red">{node.title}</h2>
      </DrupalLink>
      <div>{startTime.toLocaleString()}</div>
    </article>
  )
}


export const NodeStanfordEventCard = ({node, ...props}: EventNodeProps) => {

  const date = new Date(node.su_event_date_time.value)
  const shortMonth = date.toLocaleDateString("en-US", {
    month: "short",
  })
  const day = date.toLocaleDateString("en-US", {
    day: "numeric",
  })

  return (
    <article className="su-shadow-md" {...props}>
      {node.su_event_date_time &&
          <div className="su-font-bold" aria-hidden={true}>
              <div className="su-text-[20px]">{shortMonth}</div>
              <div className="su-text-[40px]">{day}</div>
          </div>
      }

      <DrupalLink href={node.path.alias}
                  className="su-no-underline su-text-cardinal-red hover:su-underline hover:su-text-black">
        <h2 className="su-text-cardinal-red">{node.title}</h2>
      </DrupalLink>


      <div className="su-m-10">
        <CalendarIcon className="su-float-left su-mr-10" width={21}/>
        {formatDate(node.su_event_date_time.value)}
      </div>
      {node.su_event_alt_loc &&
          <div className="su-m-10">
              <MapIcon className="su-float-left su-mr-10" width={21}/>
            {formatHtml(node.su_event_alt_loc)}
          </div>
      }
    </article>
  )
}
