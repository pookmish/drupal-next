import {ImageGalleryParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLinkButton} from "@/components/simple/link";
import {DrupalImage} from "@/components/simple/image";

interface StanfordImageGalleryProps {
  paragraph: ImageGalleryParagraph
  siblingCount?: number
}

export const StanfordImageGallery = ({paragraph,siblingCount, ...props}: StanfordImageGalleryProps) => {

  return (
    <div {...props}>
      {paragraph.su_gallery_headline && <h2 className={`su-text-center`}>{paragraph.su_gallery_headline}</h2>}
      {paragraph.su_gallery_description && <div>{formatHtml(paragraph.su_gallery_description.processed)}</div>}
      <div className="lg:su-grid su-grid-cols-3 su-gap-xl">
        {paragraph.su_gallery_images.map((image, index) =>
          <figure key={index}>
            <DrupalImage
              key={index}
              src={image.su_gallery_image.uri.url}
              alt={image.su_gallery_image.resourceIdObjMeta.alt}
              height={image.su_gallery_image.resourceIdObjMeta.height}
              width={image.su_gallery_image.resourceIdObjMeta.width}
            />
            {image.su_gallery_caption && <figcaption>{formatHtml(image.su_gallery_caption)}</figcaption>}
          </figure>
        )}
      </div>

      {paragraph.su_gallery_button &&
          <DrupalLinkButton href={paragraph.su_gallery_button.url} className="su-block su-mx-auto">
            {paragraph.su_gallery_button.title}
          </DrupalLinkButton>
      }
    </div>
  )
}