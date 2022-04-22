import {DrupalMenuLinkContent} from "next-drupal";
import {useState} from "react";

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
        {tree.map(item => <MenuItem key={item.id} {...item} depth={1}/>)}
      </ul>
    </div>
  )
}

export const MenuItems = ({items}, props) => {
  return (
    <ul {...props}>
      {items.map(item => <MenuItem key={item.id} {...item}/>)}
    </ul>
  )
}

export const MenuItem = ({title, url, items}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url}>{title}</a>
      {typeof items === 'object' &&
          <ul className={'su-absolute su-list-unstyled ' + (isHovered ? 'su-block' : 'su-hidden')}>
            {items.map(item => <MenuItem key={item.id} {...item}/>)}
          </ul>
      }
    </li>
  )
}