import * as React from "react"
import {GetStaticPathsResult, GetStaticPropsResult} from "next"
import {NextSeo} from 'next-seo';
import {
  DrupalMenuLinkContent,
  DrupalNode,
  getMenu,
  getPathsFromContext,
  getResourceFromContext,
  translatePathFromContext
} from "next-drupal"

import {fetchRowParagraphs} from "@/lib/fetch-paragraphs";
import {MainLayout} from "@/components/layouts/main-layout";
import {Node} from "@/nodes/index";

interface NodePageProps {
  node: DrupalNode
  menu: DrupalMenuLinkContent[]
}

export default function NodePage({node, menu, ...props}: NodePageProps) {
  if (!node) return null

  return (<>
      <NextSeo
        title={node.title + ' | ' + process.env.NEXT_PUBLIC_SITE_NAME}
      />
      <MainLayout menu={menu} {...props}>
        <Node node={node}/>
      </MainLayout>
    </>
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

export async function getStaticProps(context): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await translatePathFromContext(context);

  if (!path) {
    return {
      notFound: true
    }
  }

  // Check for redirect.
  if (path.redirect?.length) {
    const [redirect] = path.redirect
    return {
      redirect: {
        destination: redirect.to,
        permanent: redirect.status === "301",
      },
    }
  }

  const type = path.jsonapi.resourceName
  const node = await getResourceFromContext<DrupalNode>(type, context)
  const {tree} = await getMenu('main');

  switch (type) {
    case 'node--stanford_page':

      const paragraphs = await fetchRowParagraphs(node.su_page_components, 'su_page_components');

      node?.su_page_components.map((row, i) => {
        row?.su_page_components.map((component, j) => {
          node.su_page_components[i].su_page_components[j] = paragraphs.find(paragraph => paragraph.id === component.id);
        })
      })
      break;
    case '':
      break;
  }

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
    revalidate: 60 * 5
  }
}
