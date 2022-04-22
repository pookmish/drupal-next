import * as React from "react"
import {GetStaticPathsResult, GetStaticPropsResult} from "next"
import Head from "next/head"
import {
  DrupalMenuLinkContent,
  DrupalNode, getMenu,
  getPathsFromContext,
  getResourceFromContext,
  translatePathFromContext,
} from "next-drupal"

import {MainLayout} from "@/components/layouts/main-layout"
import {NodeStanfordPage} from "@/components/nodes/node-stanford-page";
import {NodeStanfordNews} from "@/nodes/node-stanford-news";
import {NodeStanfordEvent} from "@/nodes/node-stanford-event";
import {NodeStanfordPerson} from "@/nodes/node-stanford-person";
import {NodeStanfordPublication} from "@/nodes/node-stanford-publication";

interface NodePageProps {
  node: DrupalNode
  menu: DrupalMenuLinkContent[]
}

export default function NodePage({node, menu}: NodePageProps) {
  if (!node) return null

  return (
    <MainLayout menu={menu}>
      <Head>
        <title>{node.title}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      {node.type === "node--stanford_course" && <NodeStanfordPublication node={node}/>}
      {node.type === "node--stanford_event" && <NodeStanfordEvent node={node}/>}
      {node.type === "node--stanford_event_series" && <NodeStanfordPublication node={node}/>}
      {node.type === "node--stanford_news" && <NodeStanfordNews node={node}/>}
      {node.type === "node--stanford_page" && <NodeStanfordPage node={node}/>}
      {node.type === "node--stanford_person" && <NodeStanfordPerson node={node}/>}
      {node.type === "node--stanford_publication" && <NodeStanfordPublication node={node}/>}
    </MainLayout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await getPathsFromContext([
      'node--stanford_course',
      'node--stanford_event',
      'node--stanford_event_series',
      'node--stanford_news',
      'node--stanford_page',
      'node--stanford_person',
      'node--stanford_publication'
    ], context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await translatePathFromContext(context)
  const {tree} = await getMenu('main');

  if (!path) {
    return {
      notFound: true
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  const node = await getResourceFromContext<DrupalNode>(type, context, {
    params,
  })

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on the Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!node) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && node?.status === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      node,
      menu: tree
    },
    revalidate: 900,
  }
}
