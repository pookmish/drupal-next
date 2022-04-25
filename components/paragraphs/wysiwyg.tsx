import {BasicHtml} from "@/components/basic-html";

export function Wysiwyg({ su_wysiwyg_text }: { su_wysiwyg_text: object }) {
  return <div><BasicHtml html={su_wysiwyg_text.processed}/></div>
}