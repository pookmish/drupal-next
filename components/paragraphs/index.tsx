import {DrupalParagraph} from "next-drupal";

import {StanfordWysiwyg} from "@/components/paragraphs/stanford-wysiwyg";
import {StanfordCard} from "@/components/paragraphs/stanford-card";
import {StanfordBanner} from "@/components/paragraphs/stanford-banner";
import {StanfordImageGallery} from "@/components/paragraphs/stanford-image-gallery";
import {StanfordMediaCaption} from "@/components/paragraphs/stanford-media-caption";
import {StanfordLists} from "@/components/paragraphs/stanford-lists";
import {StanfordEntity} from "@/components/paragraphs/stanford-entity";

interface ParagraphProps {
  paragraph: DrupalParagraph;
}

export const Paragraph = ({paragraph, ...props}: ParagraphProps) => {
  return (
    <div {...props}>
      {paragraph.type === 'paragraph--stanford_card' && <StanfordCard paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_banner' && <StanfordBanner paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_gallery' && <StanfordImageGallery paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_media_caption' &&
          <StanfordMediaCaption paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_wysiwyg' && <StanfordWysiwyg paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_lists' && <StanfordLists paragraph={paragraph} {...props}/>}
      {paragraph.type === 'paragraph--stanford_entity' && <StanfordEntity paragraph={paragraph} {...props}/>}
    </div>

  );
}