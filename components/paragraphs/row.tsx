import {Paragraphs} from "@/components/paragraphs";

export const Row = ({rows}) => {
  return (
    <div>
      {rows.map(row => (
        <Paragraphs key={row.id} components={row.su_page_components}/>
      ))}
    </div>
  )
}