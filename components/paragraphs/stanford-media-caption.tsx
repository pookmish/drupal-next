import {DrupalImage} from "@/components/simple/image";
import {Oembed} from "@/components/simple/oembed";
import {DrupalLink} from "@/components/simple/link";
import formatHtml from "@/lib/format-html";
import {MediaCaptionParagraph} from "../../types/drupal";

interface StanfordMediaCaptionProps {
  paragraph: MediaCaptionParagraph
}

export const StanfordMediaCaption = ({paragraph, ...props}:StanfordMediaCaptionProps) => {

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
          <DrupalLink
              href={paragraph?.su_media_caption_link.url}
              className=""
          >
            {paragraph?.su_media_caption_link.title}
          </DrupalLink>}
      {paragraph?.su_media_caption_caption &&
          <figcaption className="">
            {formatHtml(paragraph?.su_media_caption_caption?.processed)}
          </figcaption>}
    </figure>
  )
}