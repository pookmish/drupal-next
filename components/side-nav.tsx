import {DrupalMenuLinkContent} from "next-drupal";

import {DrupalLink} from "@/components/simple/link";

interface MainMenuProps {
  tree: DrupalMenuLinkContent[]
}

export const SideNav = ({tree, ...props}: MainMenuProps) => {
  if (typeof tree === 'undefined') {
    return null;
  }

  return (
    <ul className="su-list-unstyled">
      {tree.map(item => <MenuItem key={item.id} {...item}/>)}
    </ul>
  )
}

interface MenuItemProps {
  title: string,
  url: string,
  parentItemProps?: any,
  items?: DrupalMenuLinkContent[],
}


export const MenuItem = ({title, url, items, ...props}: MenuItemProps) => {
  return (
    <li className="su-p-10">
      <DrupalLink href={url} className="su-text-cardinal-red">
        {title}
      </DrupalLink>

      {typeof items === 'object' &&
          <ul className="su-list-unstyled">
            {items?.map(item => <MenuItem key={item.id} {...item}/>)}
          </ul>
      }
    </li>
  )
}