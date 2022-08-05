import {DrupalImage} from "@/components/simple/image";
import {Oembed} from "@/components/simple/oembed";
import {DrupalLink} from "@/components/simple/link";
import formatHtml from "@/lib/format-html";

export const MediaCaption = ({
                               su_media_caption_media = null,
                               su_media_caption_caption = null,
                               su_media_caption_link = null,
                               ...props
                             }) => {

  const mediaName = su_media_caption_media?.name;
  const videoUrl = su_media_caption_media?.field_media_oembed_video;
  const imageUrl = su_media_caption_media?.field_media_image?.uri?.url;

  return (
    <figure>
      {imageUrl &&
          <div>
              <DrupalImage
                  className="su-object-cover"
                  src={imageUrl}
                  alt={su_media_caption_media.field_media_image.resourceIdObjMeta.alt}
                  height={su_media_caption_media.field_media_image.resourceIdObjMeta.height}
                  width={su_media_caption_media.field_media_image.resourceIdObjMeta.width}
              />
          </div>
      }

      {videoUrl && <Oembed className="su-object-cover" src={videoUrl} title={mediaName}/>}

      {su_media_caption_link &&
          <DrupalLink
              href={su_media_caption_link.url}
              className=""
          >
            {su_media_caption_link.title}
          </DrupalLink>}
      {su_media_caption_caption &&
          <figcaption className="">
            {formatHtml(su_media_caption_caption.processed)}
          </figcaption>}
    </figure>
  )
}