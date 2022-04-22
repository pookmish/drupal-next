import {PreviewAlert} from "@/components/preview-alert"
import {GlobalFooter} from "@/components/global-footer";
import {IdentityBar} from "@/components/identity-bar";
import {Lockup} from "@/components/lockup";
import {MainMenu} from "@/components/main-menu";

export const MainLayout = ({menu, children}) => {
  return (
    <>
      <PreviewAlert/>
      <div>
        <IdentityBar/>
        <header>
          <Lockup/>
          <MainMenu tree={menu}/>
        </header>
        <main>{children}</main>
        <GlobalFooter/>
      </div>
    </>
  )
}
