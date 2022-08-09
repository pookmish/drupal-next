import Link from "next/link"
import {News} from "../../types/drupal";
import {DrupalImage} from "@/components/simple/image";
import {Paragraph} from "@/components/paragraphs";
import {Oembed} from "@/components/simple/oembed";

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
      {node?.su_news_banner?.field_media_image &&
          <DrupalImage
              src={node.su_news_banner.field_media_image.uri.url}
              alt={node.su_news_banner.field_media_image.resourceIdObjMeta.alt}
              height={node.su_news_banner.field_media_image.resourceIdObjMeta.height}
              width={node.su_news_banner.field_media_image.resourceIdObjMeta.width}
          />
      }

      {node?.su_news_banner?.field_media_oembed_video &&
          <Oembed
              src={node.su_news_banner.field_media_oembed_video}
              title={node.su_news_banner.name}
          />
      }

      {node.su_news_banner_media_caption}
      {node.su_news_components && node.su_news_components.map(paragraph =>
        <Paragraph key={paragraph.id} paragraph={paragraph}/>
      )}

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