import {Paragraphs} from "@/components/paragraphs";
import {DrupalParagraph} from "next-drupal";

interface RowProps {
  rows: DrupalParagraph[]
}

export const Row = ({rows, ...props}: RowProps) => {
  return (
    <div {...props}>
      {rows.map(row => (
        <Paragraphs key={row.id} components={row.su_page_components}/>
      ))}
    </div>
  )
}