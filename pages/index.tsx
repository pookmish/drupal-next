import {GetStaticPropsResult} from "next"
import {DrupalMenuLinkContent, DrupalNode, getMenu} from "next-drupal"

import {NodeStanfordPage} from "@/components/nodes/node-stanford-page";
import {MainLayout} from "@/components/layouts/main-layout"
import {NextSeo} from "next-seo";
import {fetchNode} from "@/lib/fetch-node";

interface HomePageProps {
  node: DrupalNode,
  menu: DrupalMenuLinkContent[],
}

const HomePage = ({node, menu, ...props}: HomePageProps) => {
  return (
    <>
      <NextSeo
        title={process.env.NEXT_SITE_NAME}
      />
      <MainLayout menu={menu} {...props}>
        <NodeStanfordPage node={node} homepage/>
      </MainLayout>
    </>
  )
}

export default HomePage;

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const node = await fetchNode('stanford_page', process.env.DRUPAL_FRONT_PAGE);
  const {tree} = await getMenu('main');

  return {
    props: {
      node,
      menu: tree
    },
    revalidate: 60 * 5
  }
}
