
import {StanfordWysiwyg} from "@/components/paragraphs/stanford-wysiwyg";
import {StanfordCard} from "@/components/paragraphs/stanford-card";
import {StanfordBanner} from "@/components/paragraphs/stanford-banner";
import {StanfordImageGallery} from "@/components/paragraphs/stanford-image-gallery";
import {StanfordMediaCaption} from "@/components/paragraphs/stanford-media-caption";
import {StanfordLists} from "@/components/paragraphs/stanford-lists";
import {StanfordEntity} from "@/components/paragraphs/stanford-entity";

export const Paragraphs = ({components, ...props}) => {
  if (typeof components === 'undefined') {
    return null;
  }

  const gridColumns = {
    1: 'su-grid-cols-1',
    2: 'su-grid-cols-2',
    3: 'su-grid-cols-3',
  }

  return (
    <div
      className={`lg:su-grid su-gap-xl ${gridColumns[components.length]}`} {...props}>
      {components.map(component => (
        <div key={component.id}>
          {component.type === 'paragraph--stanford_card' && <StanfordCard paragraph={component}/>}
          {component.type === 'paragraph--stanford_banner' && <StanfordBanner paragraph={component} fullWidth={components.length === 1}/>}
          {component.type === 'paragraph--stanford_gallery' && <StanfordImageGallery paragraph={component}/>}
          {component.type === 'paragraph--stanford_media_caption' && <StanfordMediaCaption paragraph={component}/>}
          {component.type === 'paragraph--stanford_wysiwyg' && <StanfordWysiwyg paragraph={component}/>}
          {component.type === 'paragraph--stanford_lists' && <StanfordLists paragraph={component}/>}
          {component.type === 'paragraph--stanford_entity' && <StanfordEntity paragraph={component}/>}
        </div>
      ))}
    </div>
  );
}