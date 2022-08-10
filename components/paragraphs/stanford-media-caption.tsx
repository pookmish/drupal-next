import {DrupalImage} from "@/components/simple/image";
import {Oembed} from "@/components/simple/oembed";
import {DrupalLink, DrupalLinkButton} from "@/components/simple/link";
import formatHtml from "@/lib/format-html";
import {MediaCaptionParagraph} from "../../types/drupal";

interface StanfordMediaCaptionProps {
  paragraph: MediaCaptionParagraph
  siblingCount?: number
}

export const StanfordMediaCaption = ({paragraph,siblingCount, ...props}:StanfordMediaCaptionProps) => {

  const mediaName = paragraph?.su_media_caption_media?.name;
  const videoUrl = paragraph?.su_media_caption_media?.field_media_oembed_video;
  const imageUrl = paragraph?.su_media_caption_media?.field_media_image?.uri?.url;

  return (
    <figure {...props}>
      {imageUrl &&
          <div>
              <DrupalImage
                  className="su-object-cover"
                  src={imageUrl}
                  alt={paragraph?.su_media_caption_media.field_media_image.resourceIdObjMeta.alt}
                  height={paragraph?.su_media_caption_media.field_media_image.resourceIdObjMeta.height}
                  width={paragraph?.su_media_caption_media.field_media_image.resourceIdObjMeta.width}
              />
          </div>
      }

      {videoUrl && <Oembed className="su-object-cover" src={videoUrl} title={mediaName}/>}

      {paragraph?.su_media_caption_link &&
          <DrupalLinkButton href={paragraph?.su_media_caption_link.url} className="su-block su-mx-auto">
            {paragraph?.su_media_caption_link.title}
          </DrupalLinkButton>}
      {paragraph?.su_media_caption_caption &&
          <figcaption className="">
            {formatHtml(paragraph?.su_media_caption_caption?.processed)}
          </figcaption>}
    </figure>
  )
}