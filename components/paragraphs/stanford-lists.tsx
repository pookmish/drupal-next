import useSWR from 'swr';

import {ListParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLinkButton} from "@/components/simple/link";
import {NodeCardDisplay} from "@/nodes/index";

interface ListProps {
  paragraph: ListParagraph
  siblingCount?: number
}

export const StanfordLists = ({paragraph, siblingCount, ...props}: ListProps) => {
  let itemsToDisplay = [];

  if (paragraph.su_list_view?.resourceIdObjMeta?.drupal_internal__target_id && paragraph.su_list_view?.resourceIdObjMeta?.display_id) {
    const fetcher = (...args) => fetch.apply(null, args).then(res => res.json())
    const {
      data: listItems,
      error
    } = useSWR(`/api/views/${paragraph.su_list_view.resourceIdObjMeta.drupal_internal__target_id}/${paragraph.su_list_view.resourceIdObjMeta.display_id}/${paragraph.su_list_view.resourceIdObjMeta.arguments}:${paragraph.su_list_view.resourceIdObjMeta.items_to_display}`, fetcher)

    itemsToDisplay = paragraph.su_list_view.resourceIdObjMeta.items_to_display >= 1 ? listItems?.slice(0, paragraph.su_list_view.resourceIdObjMeta.items_to_display) : listItems;
  }
  const gridClasses = {
    1: 'su-grid-cols-1',
    2: 'su-grid-cols-2',
    3: 'su-grid-cols-3',
  };

  const gridClass = siblingCount >= 1 ? gridClasses[1] : (itemsToDisplay?.length > 3 ? gridClasses[3] : gridClasses[itemsToDisplay?.length]);

  return (
    <div {...props}>
      {paragraph.su_list_headline && <h2 className={`su-text-center`}>{paragraph.su_list_headline}</h2>}
      {paragraph.su_list_description && <div>{formatHtml(paragraph.su_list_description.processed)}</div>}

      <div className={`lg:su-grid ${gridClass}`}>
        {itemsToDisplay?.map(item => (
          <NodeCardDisplay key={item.id} node={item}/>
        ))}
      </div>

      {paragraph.su_list_button &&
          <DrupalLinkButton href={paragraph.su_list_button.url} className="su-block su-mx-auto">
            {paragraph.su_list_button.title}
          </DrupalLinkButton>}
    </div>
  )

}