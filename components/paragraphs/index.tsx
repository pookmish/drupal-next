import {Wysiwyg} from "@/components/paragraphs/wysiwyg";
import {Card} from "@/components/paragraphs/card";
import {Banner} from "@/components/paragraphs/banner";
import {ImageGallery} from "@/components/paragraphs/image-gallery";
import {MediaCaption} from "@/components/paragraphs/media-caption";

export const Paragraphs = ({components, ...props}) => {
  if (typeof components === 'undefined') {
    return null;
  }

  const fullWidthComponents = [
    'paragraph--stanford_banner'
  ];
  const widthClass = components && components.length === 1 && fullWidthComponents.indexOf(components[0].type) < 0?'su-cc su-max-w-screen-2xl' : '';

  return (
    <div
      className={`su-grid su-gap-xl su-grid-cols-${components.length} ${widthClass}`} {...props}>
      {components.map(component => (
        <div key={component.id} className="">
          {component.type === 'paragraph--stanford_card' && <Card {...component}/>}
          {component.type === 'paragraph--stanford_banner' && <Banner {...component}/>}
          {component.type === 'paragraph--stanford_gallery' && <ImageGallery {...component}/>}
          {component.type === 'paragraph--stanford_media_caption' && <MediaCaption {...component}/>}
          {component.type === 'paragraph--stanford_wysiwyg' && <Wysiwyg {...component}/>}
        </div>
      ))}
    </div>
  );
}