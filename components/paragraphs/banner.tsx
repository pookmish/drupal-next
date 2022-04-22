export const Banner = ({su_banner_body, su_banner_button, su_banner_header, su_banner_image, su_banner_sup_header}) => {
  console.log(su_banner_image);
  return (
    <div className="hero su-basefont-23 su-relative su-h-full su-max-h-500">
      <div className="su-h-full su-w-full su-overflow-hidden su-relative su-max-h-500">
        <img
          className="su-h-full su-w-full su-object-cover su-object-center" src="https://placekitten.com/1000/750"
          alt=""/>
      </div>
      <div
        className=" card su-block su-max-w-600 su-basefont-23 su-leading-display su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow su-relative su-max-w-full md:su-max-w-600 md:su-absolute md:su-top-auto md:su-left-36 md:su-bottom-36 ">
        <div className=" su-flex su-flex-col card-body su-items-start su-rs-px-2 su-rs-pt-2 su-rs-pb-4 ">
        <span className="su-type-0 su-mb-0 su-leading-display su-font-bold">
        {su_banner_sup_header}
        </span>
          {su_banner_header &&
              <h3 className=" su-leading-display su-font-sans su-font-bold su-type-2 su-mb-03em ">
                {su_banner_header}
              </h3>
          }
          {su_banner_body && <div dangerouslySetInnerHTML={{__html: su_banner_body.processed}}/>}
          {su_banner_button &&
              <a
                  className=" su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20 su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-rs-mt-neg1 "
                  href={su_banner_button.uri}>
                {su_banner_button.title}
              </a>
          }
        </div>
      </div>
    </div>
  )
}