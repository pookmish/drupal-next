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
import {NodeStanfordEventListItem} from "@/nodes/node-stanford-event";

interface EventPageProps {
  events: DrupalNode[]
  menu: DrupalMenuLinkContent[]
}

export default function Events({events, menu}: EventPageProps) {
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="List of upcoming events."
        />
      </Head>
      {events.map(event => <NodeStanfordEventListItem key={event.id} node={event}/>)}
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<EventPageProps>> {

  const events = await getResourceCollection<DrupalNode[]>('node--stanford_event', {params: {'filter[status]': '1'}})
  const {tree} = await getMenu('main');

  return {
    props: {
      events,
      menu: tree
    },
    revalidate: 900,
  }
}
