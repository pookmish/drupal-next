import {EntityTeaserParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";
import {NodeCardDisplay} from "@/nodes/index";

interface EntityTeaserProps {
  paragraph: EntityTeaserParagraph
}

export const StanfordEntity = ({paragraph, ...props}: EntityTeaserProps) => {

  return (
    <div {...props}>
      {paragraph.su_entity_headline && <h2>{paragraph.su_entity_headline}</h2>}
      {paragraph.su_entity_description && <div>{formatHtml(paragraph.su_entity_description.processed)}</div>}
      <div className="lg:su-grid su-grid-cols-3">
        {paragraph.su_entity_item && paragraph.su_entity_item.map(item =>
          <div key={item.id}>
            <NodeCardDisplay node={item}/>
          </div>
        )}
      </div>
      {paragraph.su_entity_button &&
          <DrupalLink href={paragraph.su_entity_button.url}>{paragraph.su_entity_button.title}</DrupalLink>}
    </div>
  )

}