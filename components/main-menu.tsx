import {DrupalMenuLinkContent} from "next-drupal";
import {useState} from "react";

import {DrupalLink} from "@/components/simple/link";

interface MainMenuProps {
  tree: DrupalMenuLinkContent[]
}

export const MainMenu = ({tree}: MainMenuProps) => {
  if (typeof tree === 'undefined') {
    return null;
  }
  return (
    <div className="su-cc">
      <ul className="su-list-unstyled su-flex">
        {tree.map(item => <MenuItem key={item.id} {...item}/>)}
      </ul>
    </div>
  )
}

export const MenuItem = ({title, url, items = []}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className="su-p-10"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DrupalLink href={url}>{title}</DrupalLink>
        {typeof items === 'object' &&
            <ul className={'su-z-10 su-shadow-lg su-absolute su-list-unstyled su-bg-white ' + (isHovered ? 'su-block' : 'su-hidden')}>
              {items.map(item => <MenuItem key={item.id} {...item}/>)}
            </ul>
        }
    </li>
  )
}