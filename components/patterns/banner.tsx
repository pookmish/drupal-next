import {DrupalImage} from "@/components/simple/image";
import {Card} from "@/components/patterns/card";

interface BannerProps {
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
  overlayPosition?: string
  className?: string
}

export const Banner = ({image, header, superHeader, body, link, overlayPosition, ...props}: BannerProps) => {

  const hasCardText = header || superHeader || body || link;

  return (
    <div
      {...props}
      className={`hero su-basefont-23 su-relative su-h-full su-mx-auto lg:su-max-h-500 ${props.className ?? ''}`}>

      <div className="su-h-full su-w-full su-overflow-hidden su-relative su-max-h-500">
        {image &&
            <DrupalImage
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
            />
        }
      </div>

      {hasCardText &&
          <div
              className={"card su-block su-basefont-23 su-leading-display su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow su-relative su-max-w-full lg:su-absolute md:su-top-auto md:su-bottom-36 " + (overlayPosition === 'right' ? 'md:su-right-36' : 'md:su-left-36')}>
              <Card
                  header={header}
                  superHeader={superHeader}
                  body={body}
                  link={link}
              />
          </div>
      }
    </div>
  )
}