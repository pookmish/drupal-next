import {useAppContext} from "../../context/state";
import GetActiveTrail from "@/lib/menu";
import {SideNav} from "@/components/menu/side-nav";

interface MainLayoutProps {
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const MainContentLayout = ({fullWidth, ...props}: MainLayoutProps) => {
  const appContext = useAppContext();

  const activeTrail = GetActiveTrail(appContext.menu);
  let subTree;
  if (activeTrail.length >= 1) {
    subTree = appContext.menu[activeTrail[0]]?.items;
  }

  return (
    <main {...props} className={`${props.className ?? ''} md:su-grid su-grid-cols-4 ${fullWidth ? '' : 'su-cc'}`}>
      {subTree &&
          <aside className="su-hidden lg:su-block su-col-span-1">
              <SideNav tree={subTree} className="su-sticky su-top-0"/>
          </aside>
      }

      <section className={`su-col-span-4 ${subTree ? 'lg:su-col-span-3' : ''}`}>
        {props.children}
      </section>
    </main>

  )

}
