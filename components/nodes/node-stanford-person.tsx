import Link from "next/link"
import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";
import {DrupalImage} from "@/components/simple/image";
import {Paragraph} from "@/components/paragraphs";
import {Person} from "../../types/drupal";

interface PersonNodeProps {
  node: Person
}

export const NodeStanfordPerson = ({node, ...props}: PersonNodeProps) => {

  return (
    <article {...props}>

      <div className="su-flex">
        <div>
          {node?.su_person_photo?.field_media_image && <DrupalImage
              src={node.su_person_photo.field_media_image.uri.url}
              alt={node.su_person_photo.field_media_image.resourceIdObjMeta.alt}
              height={node.su_person_photo.field_media_image.resourceIdObjMeta.height}
              width={node.su_person_photo.field_media_image.resourceIdObjMeta.width}
          />}
        </div>
        <div>
          {node.su_person_short_title}
          <h1>{node.title}</h1>
        </div>
      </div>
      <div className="su-flex">
        <div>
          {node.su_person_components && node.su_person_components.map(paragraph =>
            <Paragraph key={paragraph.id} paragraph={paragraph}/>
          )}


          {node.su_person_affiliations && node.su_person_affiliations.map((affiliation, index) =>
            <DrupalLink key={index} href={affiliation.url}>{affiliation.title}</DrupalLink>
          )}
        </div>
        <div>
          {node.su_person_email}
          {node.su_person_location_name}
          {node?.su_person_address?.processed && formatHtml(node.su_person_address.processed)}
          {node.su_person_mail_code}

          {node?.su_person_map_url?.url &&
              <DrupalLink href={node.su_person_map_url.url}>{node.su_person_map_url.title}</DrupalLink>}

        </div>
      </div>
    </article>
  )
}

export const NodeStanfordPersonListItem = ({node, ...props}: PersonNodeProps) => {
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

export const NodeStanfordPersonCard = ({node, ...props}: PersonNodeProps) => {
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