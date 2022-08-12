import {PreviewAlert} from "@/components/preview-alert"
import {GlobalFooter} from "@/components/global-footer";
import {IdentityBar} from "@/components/identity-bar";
import {Lockup} from "@/components/lockup";
import {MainMenu} from "@/components/main-menu";
import {SideNav} from "@/components/side-nav";
import {useRouter} from "next/router";
import {useAppContext} from "../../context/state";

export const MainLayout = ({...props}) => {
  const appContext = useAppContext();

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
  const sideMenu = findCurrentTreeBranch(appContext.menu)

  return (
    <>
      <PreviewAlert/>
      <div>
        <IdentityBar/>
        <header>
          <Lockup/>
          <MainMenu tree={appContext.menu}/>
        </header>
        <main className={`su-flex md:su-flex-row ${sideMenu.items ? 'su-cc' : ''}`}>
          {sideMenu.items && <aside className="su-w-1/4"><SideNav tree={sideMenu.items}/></aside>}
          <section className={`${sideMenu.items ? 'su-w-3/4' : 'su-w-full'}`}>{props.children}</section>
        </main>
        <GlobalFooter/>
      </div>
    </>
  )

}
