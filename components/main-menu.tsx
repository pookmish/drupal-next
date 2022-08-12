import {DrupalMenuLinkContent} from "next-drupal";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";

import {DrupalLink} from "@/components/simple/link";
import {useAppContext} from "../context/state";
import GetActiveTrail from "@/lib/menu";


export const MainMenu = ({...props}) => {
  const appContext = useAppContext();
  const activeTrail = GetActiveTrail(appContext.menu);

  if (typeof appContext.menu === 'undefined') {
    return null;
  }
  return (
    <div className="su-cc" {...props}>
      <ul className="su-list-unstyled su-flex">
        {appContext.menu.map((item, i) => <MenuItem key={item.id}
                                                    active={activeTrail?.[0] && i === activeTrail[0]} {...item}/>)}
      </ul>
    </div>
  )
}

interface MenuItemProps {
  title: string
  url: string
  items?: DrupalMenuLinkContent[]
  menuLevel?: number
  active?: boolean
}

export const MenuItem = ({title, url, items, active, menuLevel = 0}: MenuItemProps) => {
  const {buttonProps, isOpen} = useDropdownMenu(items?.length);

  return (
    <li className="su-p-10">
      <DrupalLink href={url}
                  className={`su-text-cardinal-red su-no-underline su-pb-[10px] hover:su-underline ${active ? 'su-text-black hover:su-text-cardinal-red su-border-b-[6px] su-border-[#2e2d29]' : ''}`}>
        {title}
      </DrupalLink>

      {(items?.length > 0 && menuLevel < 1) &&
          <>
              <button {...buttonProps}
                      className="su-mx-[5px] su-text-cardinal-red hover:su-underline hover:su-text-black su-border-l-[1px] su-border-[#766253]">
                  <span className="su-sr-only">
                    {isOpen ? 'Close' : 'Open'} "{title}" submenu
                  </span>

                {isOpen ? <ChevronUpIcon aria-hidden={true} height={20}/> :
                  <ChevronDownIcon aria-hidden={true} height={20}/>}
              </button>
              <ul
                  className={'su-z-10 su-shadow-xl su-absolute su-list-unstyled su-bg-white ' + (isOpen ? '' : 'su-hidden')}
                  role="menu"
              >
                {items.map((item, i) => <MenuItem key={item.id} {...item} menuLevel={menuLevel + 1}/>)}
              </ul>
          </>
      }
    </li>
  )
}