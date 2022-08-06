import {ImageGalleryParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";
import {DrupalImage} from "@/components/simple/image";

interface StanfordImageGalleryProps {
  paragraph: ImageGalleryParagraph
}

export const StanfordImageGallery = ({paragraph, ...props}: StanfordImageGalleryProps) => {

  return (
    <div {...props}>
      {paragraph.su_gallery_headline && <h2>{paragraph.su_gallery_headline}</h2>}
      {paragraph.su_gallery_description && <div>{formatHtml(paragraph.su_gallery_description.processed)}</div>}
      <div className="su-grid su-grid-cols-3 su-gap-xl">
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
          </figure>)}
      </div>

      {paragraph.su_gallery_button &&
          <DrupalLink href={paragraph.su_gallery_button.url}>{paragraph.su_gallery_button.title}</DrupalLink>}
    </div>
  )
}