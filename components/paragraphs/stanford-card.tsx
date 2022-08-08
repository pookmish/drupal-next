import {CardParagraph} from "../../types/drupal";
import {Card} from "@/components/patterns/card";

interface CardProps {
  paragraph: CardParagraph
}

export const StanfordCard = ({paragraph, ...props}: CardProps) => {

  const mediaName = paragraph?.su_card_media?.name;
  const videoUrl = paragraph?.su_card_media?.field_media_oembed_video;
  const imageUrl = paragraph?.su_card_media?.field_media_image?.uri?.url;
  let video = null
  let image = null
  if (videoUrl) {
    video = {
      src: videoUrl,
      title: mediaName
    }
  } else if (imageUrl) {
    image = {
      src: imageUrl,
      alt: paragraph.su_card_media.field_media_image.resourceIdObjMeta.alt,
      height: paragraph.su_card_media.field_media_image.resourceIdObjMeta.height,
      width: paragraph.su_card_media.field_media_image.resourceIdObjMeta.width
    }
  }

  return (
    <Card
      video={video}
      image={image}
      header={paragraph.su_card_header}
      superHeader={paragraph.su_card_super_header}
      body={paragraph?.su_card_body?.processed}
      link={paragraph?.su_card_link}
      {...props}
    />
  )

}