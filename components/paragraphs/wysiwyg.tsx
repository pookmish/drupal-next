import formatHtml from "@/lib/format-html"

export function Wysiwyg({su_wysiwyg_text}) {
  return <div>{formatHtml(su_wysiwyg_text.processed)}</div>
}