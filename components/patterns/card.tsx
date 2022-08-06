import {DrupalImage} from "@/components/simple/image";
import {Oembed} from "@/components/simple/oembed";
import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";

interface CardProps {
  video?: {
    src: string
    title: string
  }
  image?: {
    src: string
    alt: string
    height: number
    width: number
  };
  superHeader?: string
  header?: string
  body?: string
  link?: {
    url: string
    title: string
  }
}

export const Card = ({video, image, superHeader, header, body, link, ...props}: CardProps) => {

  return (
    <div
      className="card su-block su-w-full su-basefont-23 su-leading-display su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow" {...props}>

      {image &&
          <div aria-hidden="true">
              <DrupalImage
                  className="su-object-cover"
                  src={image.src}
                  alt={image.alt}
                  height={image.height}
                  width={image.width}
              />
          </div>
      }

      {video && <Oembed className="su-object-cover" src={video.src} title={video.title}/>}

      <div className="su-flex su-flex-col card-body su-items-start su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
        {superHeader &&
            <span
                className="su-type-0 su-mb-0 su-leading-display su-font-bold">{superHeader}</span>}
        {header &&
            <h3 className="su-leading-display su-font-sans su-font-bold su-type-2 su-mb-03em">{header}</h3>}
        {body && <div>{formatHtml(body)}</div>}
        {link &&
            <DrupalLink href={link.url}
                        className="su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20 su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-rs-mt-neg1">
              {link.title}
            </DrupalLink>
        }
      </div>
    </div>
  )

}