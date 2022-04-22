import {DrupalMenuLinkContent} from "next-drupal";

interface MainMenuProps {
  tree: DrupalMenuLinkContent[]
}

export const MainMenu = ({tree}: MainMenuProps) => {
  return (
    <>
      {tree && <MenuItems items={tree}/>}
    </>
  )
}

export const MenuItems = ({items, depth = 1}) => {
  return (
    <ul className="su-list-unstyled">
      {items.map(item => <MenuItem key={item.id} {...item} depth={depth}/>)}
    </ul>
  )
}

export const MenuItem = ({title, url, items, depth}) => {
  return (
    <li>
      <a href={url}>{title}</a>
      {typeof items === 'object' && <MenuItems items={items} depth={depth + 1}/>}
    </li>
  )
}