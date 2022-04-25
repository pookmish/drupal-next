import {DrupalMenuLinkContent} from "next-drupal";

import {DrupalLink} from "@/components/simple/link";

interface MainMenuProps {
  tree: DrupalMenuLinkContent[]
}

export const SideNav = ({tree}: MainMenuProps) => {
  if (typeof tree === 'undefined') {
    return null;
  }

  return (
    <ul className="su-list-unstyled">
      {tree.map(item => <MenuItem key={item.id} {...item}/>)}
    </ul>
  )
}

export const MenuItem = ({title, url, items = []}) => {
  return (
    <li className="su-p-10">
      <DrupalLink href={url}>{title}</DrupalLink>
      {typeof items === 'object' &&
          <ul className="su-list-unstyled">
            {items.map(item => <MenuItem key={item.id} {...item}/>)}
          </ul>
      }
    </li>
  )
}