import Link from "next/link"

import {DrupalPublicationCitation, Publication} from "../../types/drupal";
import {DrupalLink} from "@/components/simple/link";
import {Row} from "@/components/paragraphs/row";

interface PublicationNodeProps {
  node: Publication
}

export const NodeStanfordPublication = ({node, ...props}: PublicationNodeProps) => {
  return (
    <article {...props}>
      {node.su_publication_topics && node.su_publication_topics.map((topic, index) =>
        <div key={index}>{topic.name}</div>
      )}
      <h1>{node.title}</h1>

      {node.su_publication_components && <Row rows={node.su_publication_components} rowField="su_pubs_components" />}

      {node.su_publication_citation && <Citation citation={node.su_publication_citation} />}
      {node.su_publication_cta && <DrupalLink href={node.su_publication_cta.url}>{node.su_publication_cta.title}</DrupalLink>}
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

interface CitationProps {
  citation: DrupalPublicationCitation
}

const Citation = ({citation}: CitationProps) => {
  return (
    <>
      {citation.su_author && citation.su_author.map((author, index) =>
      <div key={index}>
        {author.given} {author.family}
      </div>
      )}

      {citation.su_publisher}
      {citation.su_page}

    </>
  )
}
