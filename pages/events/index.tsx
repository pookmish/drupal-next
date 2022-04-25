import * as React from "react"
import {GetServerSidePropsResult} from "next"
import Head from "next/head"
import {DrupalJsonApiParams} from "drupal-jsonapi-params"
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
  console.log(events);
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="List of upcoming events."
        />
      </Head>
      <div className="su-cc su-max-w-screen-2xl">
        {events.map(event => <NodeStanfordEventListItem key={event.id} node={event}/>)}
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps(context): Promise<GetServerSidePropsResult<EventPageProps>> {
  const params = new DrupalJsonApiParams();
  const date = Math.floor(Date.now() / 1000)
  params.addFilter('su_event_date_time.value', `${date}`, '>=')
  params.addSort('su_event_date_time.value', 'ASC');

  const events = await getResourceCollection<DrupalNode[]>('node--stanford_event', {params: params.getQueryObject()})
  const {tree} = await getMenu('main');
  return {
    props: {
      events,
      menu: tree
    }
  }
}
