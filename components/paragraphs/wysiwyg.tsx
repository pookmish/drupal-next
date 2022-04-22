export const Wysiwyg = ({su_wysiwyg_text}) => {
  return (
    <div dangerouslySetInnerHTML={{__html: su_wysiwyg_text.processed}}/>
  )
}