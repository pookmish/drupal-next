import {PreviewAlert} from "@/components/preview-alert"
import {GlobalFooter} from "@/components/global-footer";
import {IdentityBar} from "@/components/identity-bar";
import {Lockup} from "@/components/lockup";
import {MainMenu} from "@/components/main-menu";
import {SideNav} from "@/components/side-nav";
import {useRouter} from "next/router";

export const MainLayout = ({menu, localFooter, globalFooter, lockupSettings, basicSiteSettings, children, ...props}) => {

  const router = useRouter()

  const findCurrentTreeBranch = (menuItems) => {
    for (let i = 0; i < menuItems.length; i++) {
      if (router.asPath === menuItems[i].url) {
        return menuItems[i];
      }
      if (typeof menuItems[i].items === 'object') {
        if (findCurrentTreeBranch(menuItems[i].items)) {
          return menuItems[i];
        }
      }
    }
    return false;
  }
  const sideMenu = findCurrentTreeBranch(menu)

  return (
    <>
      <PreviewAlert/>
      <div>
        <IdentityBar/>
        <header>
          <Lockup/>
          <MainMenu tree={menu}/>
        </header>
        <main className={`su-flex md:su-flex-row ${sideMenu.items ? 'su-cc' : ''}`}>
          {sideMenu.items && <aside className="su-w-1/4"><SideNav tree={sideMenu.items}/></aside>}
          <section className={`${sideMenu.items ? 'su-w-3/4' : 'su-w-full'}`}>{children}</section>
        </main>
        <GlobalFooter/>
      </div>
    </>
  )
}
