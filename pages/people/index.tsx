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
import {NodeStanfordPersonListItem} from "@/nodes/node-stanford-person";

interface PeoplePageProps {
  people: DrupalNode[]
  menu: DrupalMenuLinkContent[]
}

export default function People({people, menu}: PeoplePageProps) {
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="List of upcoming events."
        />
      </Head>
      {people.map(person => <NodeStanfordPersonListItem key={person.id} node={person}/>)}
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PeoplePageProps>> {

  const people = await getResourceCollection<DrupalNode[]>('node--stanford_person',{params: {'filter[status]': '1'}})
  const {tree} = await getMenu('main');

  return {
    props: {
      people,
      menu: tree
    },
    revalidate: 900,
  }
}
