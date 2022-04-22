import * as React from "react"
import {GetStaticPropsResult} from "next"
import Head from "next/head"
import {
  DrupalMenuLinkContent,
  DrupalNode,
  getMenu,
  getResourceCollection,
} from "next-drupal"

import {MainLayout} from "@/components/layouts/main-layout"
import {NodeStanfordNewsListItem} from "@/nodes/node-stanford-news";

interface NewsPageProps {
  news: DrupalNode[]
  menu: DrupalMenuLinkContent[]
}

export default function News({news, menu}: NewsPageProps) {
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="List of upcoming events."
        />
      </Head>
      {news.map(item => <NodeStanfordNewsListItem key={item.id} node={item}/>)}
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<NewsPageProps>> {

  const news = await getResourceCollection<DrupalNode[]>('node--stanford_news', {params: {'filter[status]': '1'}})
  const {tree} = await getMenu('main');

  return {
    props: {
      news,
      menu: tree
    },
    revalidate: 900,
  }
}
