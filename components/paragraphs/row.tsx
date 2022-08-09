import {Paragraph} from "@/components/paragraphs";
import {DrupalParagraph} from "next-drupal";

interface RowProps {
  rows: DrupalParagraph[]
  rowField: string
}

export const Row = ({rows, rowField, ...props}: RowProps) => {

  const gridClasses = {
    1: 'su-grid-cols-1',
    2: 'su-grid-cols-2',
    3: 'su-grid-cols-3',
    4: 'su-grid-cols-4',
  }

  return (
    <div {...props}>
      {rows.map(row =>
        <div key={row.id} className={`lg:su-grid su-gap-xl ${gridClasses[row[rowField].length]}`}>
          {row[rowField].map(paragraph =>
            <Paragraph paragraph={paragraph} key={paragraph.id}/>
          )}
        </div>
      )}
    </div>
  )
}