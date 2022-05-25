import Head from "next/head"
import {GetStaticPropsResult} from "next"
import {DrupalNode, getResource} from "next-drupal"

import {NodeStanfordPage} from "@/components/nodes/node-stanford-page";
import {MainLayout} from "@/components/layouts/main-layout"
import {fetchRowParagraphs} from "@/lib/fetch-paragraphs";

interface HomePageProps {
  node: DrupalNode
}

const HomePage = ({node, globalSettings}: HomePageProps) => {
  return (
    <MainLayout {...globalSettings}>
      <Head>
        <title>{node.title}</title>
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
  const node = await getResource<DrupalNode>(
    "node--stanford_page",
    process.env.DRUPAL_FRONT_PAGE
  )

  const paragraphs = await fetchRowParagraphs(node.su_page_components, 'su_page_components');
  node?.su_page_components.map((row, i) => {
    row?.su_page_components.map((component, j) => {
      node.su_page_components[i].su_page_components[j] = paragraphs.find(paragraph => paragraph.id === component.id)
    })
  })

  return {
    props: {node},
    revalidate: 60 * 5
  }
}
