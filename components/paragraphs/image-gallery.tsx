import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";
import {DrupalImage} from "@/components/simple/image";

export const ImageGallery = ({
                               su_gallery_images,
                               su_gallery_headline = null,
                               su_gallery_description = null,
                               su_gallery_button = null
                             }) => {
  return (
    <div>
      {su_gallery_headline && <h2>{su_gallery_headline}</h2>}
      {su_gallery_description && <div>{formatHtml(su_gallery_description.processed)}</div>}
      <div className="su-grid su-grid-cols-3 su-gap-xl">
        {su_gallery_images.map((image, index) =>
          <figure>
            <DrupalImage
              key={index}
              src={image.su_gallery_image.uri.url}
              alt={image.su_gallery_image.resourceIdObjMeta.alt}
              height={image.su_gallery_image.resourceIdObjMeta.height}
              width={image.su_gallery_image.resourceIdObjMeta.width}
            />
            {image.su_gallery_caption && <figcaption>{formatHtml(image.su_gallery_caption)}</figcaption>}
          </figure>)}
      </div>

      {su_gallery_button && <DrupalLink href={su_gallery_button.url}>{su_gallery_button.title}</DrupalLink>}
    </div>
  )
}