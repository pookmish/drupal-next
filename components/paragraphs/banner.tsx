import {DrupalImage} from "@/components/simple/image";
import {Card} from "@/components/paragraphs/card";

export const Banner = ({su_banner_body, su_banner_button, su_banner_header, su_banner_image, su_banner_sup_header, behavior_settings}) => {
  const imageUrl = su_banner_image?.field_media_image?.image_style_uri?.breakpoint_2xl_2x;
  const hasCardText = su_banner_button || su_banner_header || su_banner_sup_header || su_banner_body;
  return (
    <div className="hero su-basefont-23 su-relative su-h-full su-max-h-500">

      <div className="su-h-full su-w-full su-overflow-hidden su-relative su-max-h-500">
        {imageUrl &&
            <DrupalImage
                src={imageUrl}
                alt={su_banner_image.field_media_image.resourceIdObjMeta.alt}
                height={su_banner_image.field_media_image.resourceIdObjMeta.height}
                width={su_banner_image.field_media_image.resourceIdObjMeta.width}
            />
        }
      </div>

      {hasCardText &&
          <div
              className={"card su-block su-max-w-600 su-basefont-23 su-leading-display su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow su-relative su-max-w-full md:su-max-w-600 md:su-absolute md:su-top-auto md:su-bottom-36 " + (behavior_settings?.hero_pattern?.overlay_position === 'right' ? 'md:su-right-36' : 'md:su-left-36')}>
              <Card
                  su_card_body={su_banner_body}
                  su_card_header={su_banner_header}
                  su_card_link={su_banner_button}
                  su_card_super_header={su_banner_sup_header}
              />
          </div>
      }
    </div>
  )
}