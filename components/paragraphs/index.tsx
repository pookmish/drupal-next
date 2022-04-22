import {Wysiwyg} from "@/components/paragraphs/wysiwyg";
import {Card} from "@/components/paragraphs/card";
import {Banner} from "@/components/paragraphs/banner";
import {ImageGallery} from "@/components/paragraphs/image-gallery";
import {MediaCaption} from "@/components/paragraphs/media-caption";

export const Paragraphs = ({components, ...props}) => {
  if (typeof components === 'undefined') {
    return null;
  }
  return (
    <div className="su-flex su-flex-col md:su-flex-row su-flex-grow-0 su-flex-shrink-0" {...props}>
      {components.map(component => (
        <div key={component.id} className="su-flex-1">
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