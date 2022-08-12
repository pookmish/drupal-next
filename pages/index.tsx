import {GetStaticPropsResult} from "next"
import {NextSeo} from "next-seo";
import {DrupalMenuLinkContent, DrupalNode, getMenu, getResource} from "next-drupal"

import {NodeStanfordPage} from "@/components/nodes/node-stanford-page";
import {MainLayout} from "@/components/layouts/main-layout"
import {fetchRowParagraphs} from "@/lib/fetch-paragraphs";

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

  const node = await getResource<DrupalNode>('node--stanford_page', process.env.DRUPAL_FRONT_PAGE)
  const paragraphs = await fetchRowParagraphs(node.su_page_components, 'su_page_components');

  node?.su_page_components.map((row, i) => {
    row?.su_page_components.map((component, j) => {
      node.su_page_components[i].su_page_components[j] = paragraphs.find(paragraph => paragraph.id === component.id);
    })
  })
  const {tree} = await getMenu('main');

  return {
    props: {
      node,
      menu: tree
    },
    revalidate: 60 * 5
  }
}
