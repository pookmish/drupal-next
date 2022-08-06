import {DrupalMenuLinkContent} from "next-drupal";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import Link from "next/link";

interface MainMenuProps {
  tree: DrupalMenuLinkContent[]
}

export const MainMenu = ({tree, ...props}: MainMenuProps) => {
  if (typeof tree === 'undefined') {
    return null;
  }
  return (
    <div className="su-cc" {...props}>
      <ul className="su-list-unstyled su-flex">
        {tree.map(item => <MenuItem key={item.id} {...item}/>)}
      </ul>
    </div>
  )
}

interface MenuItemProps {
  title: string,
  url: string,
  parentItemProps?: any,
  items?: DrupalMenuLinkContent[],
}

export const MenuItem = ({title, url, parentItemProps, items}: MenuItemProps) => {
  const {buttonProps, itemProps, isOpen} = useDropdownMenu(items?.length);

  return (
    <li className="su-p-10">
      <Link href={url} passHref>
        <a href={url} {...parentItemProps}>
          {title}
        </a>
      </Link>

      {items?.length > 0 &&
          <>
              <button {...buttonProps}>+<span
                  className="su-sr-only">{isOpen ? 'Close' : 'Open'} "{title}" submenu</span></button>
              <ul
                  className={'su-z-10 su-shadow-lg su-absolute su-list-unstyled su-bg-white ' + (isOpen ? '' : 'su-hidden')}
                  role="menu"
              >
                {items.map((item, i) => <MenuItem key={item.id} {...item} parentItemProps={itemProps[i]}/>)}
              </ul>
          </>
      }
    </li>
  )
}