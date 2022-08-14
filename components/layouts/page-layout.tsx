import {PreviewAlert} from "@/components/preview-alert"
import {GlobalFooter} from "@/components/global-footer";
import {IdentityBar} from "@/components/identity-bar";
import {Lockup} from "@/components/lockup";
import {MainMenu} from "@/components/main-menu";


export const PageLayout = ({...props}) => {

  return (
    <>
      <PreviewAlert/>
      <div>
        <IdentityBar/>
        <header className="su-shadow-lg">
          <Lockup/>
          <MainMenu/>
        </header>

        {props.children}
        <GlobalFooter/>
      </div>
    </>
  )

}
