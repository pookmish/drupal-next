import {ListParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLinkButton} from "@/components/simple/link";

interface ListProps {
  paragraph: ListParagraph
  siblingCount?: number
}

export const StanfordLists = ({paragraph,siblingCount, ...props}: ListProps) => {

  return (
    <div {...props}>
      {paragraph.su_list_headline && <h2 className={`su-text-center`}>{paragraph.su_list_headline}</h2>}
      {paragraph.su_list_description && <div>{formatHtml(paragraph.su_list_description.processed)}</div>}
      <div>List here!</div>
      {paragraph.su_list_button &&
          <DrupalLinkButton href={paragraph.su_list_button.url} className="su-block su-mx-auto">
            {paragraph.su_list_button.title}
          </DrupalLinkButton>}
    </div>
  )

}