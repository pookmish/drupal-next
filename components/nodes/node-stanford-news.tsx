import Link from "next/link"
import {News} from "../../types/drupal";
import {DrupalImage} from "@/components/simple/image";
import {Paragraphs} from "@/components/paragraphs";

interface NewsNodeProps {
  node: News
}

export const NodeStanfordNews = ({node, ...props}: NewsNodeProps) => {

  return (
    <article {...props}>
      {node.su_news_topics && node.su_news_topics.map(topic =>
        <div key={topic.id}>
          {topic.name}
        </div>
      )}
      <h1>{node.title}</h1>
      {node.su_news_dek}
      {node.su_news_publishing_date}
      {node.su_news_byline}
      {node.su_news_banner && <DrupalImage
          src={node.su_news_banner.field_media_image.uri.url}
          alt={node.su_news_banner.field_media_image.resourceIdObjMeta.alt}
          height={node.su_news_banner.field_media_image.resourceIdObjMeta.height}
          width={node.su_news_banner.field_media_image.resourceIdObjMeta.width}
      />}
      {node.su_news_banner_media_caption}
      <Paragraphs components={node.su_news_components}/>
    </article>
  )
}

export const NodeStanfordNewsListItem = ({node, ...props}: NewsNodeProps) => {
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

export const NodeStanfordNewsCard = ({node, ...props}: NewsNodeProps) => {
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