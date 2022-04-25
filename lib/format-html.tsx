import {HTMLReactParserOptions, domToReact} from "html-react-parser"
import parse from "html-react-parser"
import {Element} from "domhandler/lib/node"
import Image from "next/image"

import {DrupalLink} from "@/components/simple/link";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {

    if (domNode instanceof Element && domNode.name === "img") {
      const {src, alt, width, height} = domNode.attribs
      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
          width={`${width}px`}
          height={`${height}px`}
          alt={alt}
        />
      )
    }

    if (domNode.name === 'div') {
      let {class: className} = domNode.attribs
      className = className.replace('align-center', 'su-center');
      return <div className={className}>{domToReact(domNode.children, options)}</div>
    }

    if (domNode.name === 'p') {
      let {class: className} = domNode.attribs
      className = className ? className.replace('text-align-center', 'su-text-center') : '';
      return <p className={className}>{domToReact(domNode.children, options)}</p>
    }
    if (domNode.name === 'h2') {
      let {class: className} = domNode.attribs
      className = className ? className.replace('text-align-center', 'su-text-center') : '';
      return <h2 className={className}>{domToReact(domNode.children, options)}</h2>
    }
    if (domNode.name === 'h3') {
      let {class: className} = domNode.attribs
      className = className ? className.replace('text-align-center', 'su-text-center') : '';
      return <h3 className={className}>{domToReact(domNode.children, options)}</h3>
    }

    if (domNode.name === "a") {
      const {href, class: className} = domNode.attribs

      return (
        <DrupalLink href={href} className={className}>
          {domToReact(domNode.children, options)}
        </DrupalLink>
      )
    }
  },
}

const formatHtml = (html) => parse(html, options);
export default formatHtml;