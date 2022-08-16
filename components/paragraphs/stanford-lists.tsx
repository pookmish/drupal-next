import useSWR from 'swr';

import {ListParagraph} from "../../types/drupal";
import formatHtml from "@/lib/format-html";
import {DrupalLinkButton} from "@/components/simple/link";
import {NodeCardDisplay, NodeListDisplay} from "@/nodes/index";
import {DrupalNode} from "next-drupal";

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

      <div className={`lg:su-grid su-gap-[50px] ${gridClass}`}>
        {itemsToDisplay?.map(item => (
          <ListItem
            key={item.id}
            node={item}
            viewId={paragraph.su_list_view.resourceIdObjMeta.drupal_internal__target_id}
            viewDisplayId={paragraph.su_list_view.resourceIdObjMeta.display_id}
          />
        ))}
      </div>

      {paragraph.su_list_button &&
          <DrupalLinkButton href={paragraph.su_list_button.url} className="su-block su-mx-auto">
            {paragraph.su_list_button.title}
          </DrupalLinkButton>}
    </div>
  )

}

interface ListItemProps {
  node: DrupalNode
  viewId: string
  viewDisplayId: string
}

const ListItem = ({node, viewId, viewDisplayId}: ListItemProps) => {
  const display = `${viewId}:${viewDisplayId}`

  switch (display) {
    case 'stanford_events:cards':
    case 'stanford_news:vertical_cards':
    case 'stanford_person:grid_list_all':
    case 'stanford_events:past_events_list_block':
    case 'stanford_shared_tags:card_grid':
    case 'stanford_basic_pages:viewfield_block_1':
    case 'stanford_courses:vertical_teaser_viewfield_block':
      return <NodeCardDisplay node={node}/>
    case 'stanford_events:list_page':
    case 'stanford_news:block_1':
    case 'stanford_publications:chicago_list':
    case 'stanford_publications:apa_list':
    case 'stanford_basic_pages:basic_page_type_list':
    case 'stanford_courses:default_list_viewfield_block':
      return <NodeListDisplay node={node}/>
  }
}