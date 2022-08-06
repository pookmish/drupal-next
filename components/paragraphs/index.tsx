
import {StanfordWysiwyg} from "@/components/paragraphs/stanford-wysiwyg";
import {StanfordCard} from "@/components/paragraphs/stanford-card";
import {StanfordBanner} from "@/components/paragraphs/stanford-banner";
import {StanfordImageGallery} from "@/components/paragraphs/stanford-image-gallery";
import {StanfordMediaCaption} from "@/components/paragraphs/stanford-media-caption";
import {StanfordLists} from "@/components/paragraphs/stanford-lists";

export const Paragraphs = ({components, ...props}) => {
  if (typeof components === 'undefined') {
    return null;
  }

  const fullWidthComponents = [
    'paragraph--stanford_banner'
  ];

  return (
    <div
      className={`su-grid su-gap-x-xl su-grid-cols-${components.length}`} {...props}>
      {components.map(component => (
        <div key={component.id}>
          {component.type === 'paragraph--stanford_card' && <StanfordCard paragraph={component} />}
          {component.type === 'paragraph--stanford_banner' && <StanfordBanner paragraph={component}/>}
          {component.type === 'paragraph--stanford_gallery' && <StanfordImageGallery paragraph={component}/>}
          {component.type === 'paragraph--stanford_media_caption' && <StanfordMediaCaption paragraph={component}/>}
          {component.type === 'paragraph--stanford_wysiwyg' && <StanfordWysiwyg paragraph={component}/>}
          {component.type === 'paragraph--stanford_lists' && <StanfordLists paragraph={component}/>}
        </div>
      ))}
    </div>
  );
}