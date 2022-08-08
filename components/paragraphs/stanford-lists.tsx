import {ListParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLink} from "@/components/simple/link";

interface ListProps {
  paragraph: ListParagraph
}

export const StanfordLists = ({paragraph, ...props}: ListProps) => {

  return (
    <div {...props}>
      {paragraph.su_list_headline && <h2>{paragraph.su_list_headline}</h2>}
      {paragraph.su_list_description && <div>{formatHtml(paragraph.su_list_description.processed)}</div>}
      <div>List here!</div>
      {paragraph.su_list_button &&
          <DrupalLink href={paragraph.su_list_button.url}>{paragraph.su_list_button.title}</DrupalLink>}
    </div>
  )

}