import Head from "next/head"
import {GetStaticPropsResult} from "next"
import {DrupalMenuLinkContent, DrupalNode, getMenu, getResource} from "next-drupal"

import {NodeStanfordPage} from "@/components/nodes/node-stanford-page";
import {MainLayout} from "@/components/layouts/main-layout"
import {DrupalJsonApiParams} from "drupal-jsonapi-params";

interface HomePageProps {
  node: DrupalNode,
  menu: DrupalMenuLinkContent[]
}

const HomePage = ({node, menu}: HomePageProps) => {
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Demo Site</title>
        <meta
          name="description"
          content="Demo Site."
        />
      </Head>
      <div>
        <NodeStanfordPage node={node} homepage/>
      </div>
    </MainLayout>
  )
}

export default HomePage;

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const params = new DrupalJsonApiParams();
  params.addInclude([
    'su_page_banner.su_banner_image.field_media_image',
    'su_page_image.field_media_image',
    'su_page_components.su_page_components'
  ]);

  const node = await getResource<DrupalNode>(
    "node--stanford_page",
    '72f0069b-f1ec-4122-af73-6aa841faea90',
    {params: params.getQueryObject()}
  )
  const {tree} = await getMenu('main');
  return {
    props: {
      node,
      menu: tree
    },
    revalidate: 60 * 5
  }
}
