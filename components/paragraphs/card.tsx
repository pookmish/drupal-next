import {DrupalLink} from "@/components/simple/link";

import formatHtml from "@/lib/format-html";

export const Card = ({
                       su_card_body,
                       su_card_header,
                       su_card_link,
                       su_card_link_display,
                       su_card_media,
                       su_card_super_header
                     }) => {
  return (
    <div
      className="card su-block su-max-w-600 su-basefont-23 su-leading-display su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow">
      <div className="su-flex su-flex-col card-body su-items-start su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
        {su_card_super_header &&
            <span className="su-type-0 su-mb-0 su-leading-display su-font-bold">{su_card_super_header}</span>}
        {su_card_header &&
            <h3 className="su-leading-display su-font-sans su-font-bold su-type-2 su-mb-03em">{su_card_header}</h3>}
        {su_card_body && <div>{formatHtml(su_card_body.processed)}</div>}
        {su_card_link &&
            <DrupalLink href={su_card_link.uri}
                  className="su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20 su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-rs-mt-neg1">
              {su_card_link.title}
            </DrupalLink>
        }
      </div>
    </div>
  )
}