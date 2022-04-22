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
import {NodeStanfordCourseListItem} from "@/nodes/node-stanford-course";

interface CoursesPageProps {
  courses: DrupalNode[]
  menu: DrupalMenuLinkContent[]
}

export default function Courses({courses, menu}: CoursesPageProps) {
  return (
    <MainLayout menu={menu}>
      <Head>
        <title>Upcoming Events</title>
        <meta
          name="description"
          content="List of upcoming events."
        />
      </Head>
      {courses.map(course => <NodeStanfordCourseListItem key={course.id} node={course}/>)}
    </MainLayout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<CoursesPageProps>> {

  const courses = await getResourceCollection<DrupalNode[]>('node--stanford_course', {params: {'filter[status]': '1'}})
  const {tree} = await getMenu('main');

  return {
    props: {
      courses,
      menu: tree
    },
    revalidate: 900,
  }
}
