import formatHtml from "@/lib/format-html"
import {WysiwygParagraph} from "../../types/drupal";

interface StanfordWysiwygProps {
  paragraph: WysiwygParagraph
}

export function StanfordWysiwyg({paragraph, ...props}: StanfordWysiwygProps) {
  return <div {...props}>{formatHtml(paragraph?.su_wysiwyg_text?.processed)}</div>
}