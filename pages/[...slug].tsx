import * as React from "react"
import {GetStaticPathsResult, GetStaticPropsResult} from "next"
import {DefaultSeo} from 'next-seo';
import {
  DrupalNode,
  getPathsFromContext,
  getResourceFromContext,
  translatePathFromContext
} from "next-drupal"

import {fetchParagraphs, fetchRowParagraphs} from "@/lib/fetch-paragraphs";
import {PageLayout} from "@/components/layouts/page-layout";
import {NodePageDisplay} from "@/nodes/index";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";

interface NodePageProps {
  node: DrupalNode
}

export default function NodePage({node, ...props}: NodePageProps) {
  if (!node) return null
  return (<>
      <DefaultSeo
        title={node.title + ' | ' + process.env.NEXT_PUBLIC_SITE_NAME}
      />
      <PageLayout {...props}>
        <NodePageDisplay node={node}/>
      </PageLayout>
    </>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  const params = new DrupalJsonApiParams();
  let fetchMore = true;
  let page = 0;
  let pagedPaths, paths = [];

  // Make sure to fetch all basic pages. We'll fetch other content types later since we can't fetch them all at once.
  while (fetchMore) {
    pagedPaths = await getPathsFromContext(['node--stanford_page'], context, {params: params.getQueryObject()})
    paths = [...paths, ...pagedPaths]

    params.addPageOffset(page * 50);
    page++;

    // Local development environment doesn't need to pre-render all pages. Just build 50 for now.
    if (process.env.NODE_ENV === 'development' || pagedPaths.length === 0) {
      fetchMore = false;
    }
  }

  const otherPaths = await getPathsFromContext([
    'node--stanford_course',
    'node--stanford_event',
    'node--stanford_event_series',
    'node--stanford_news',
    'node--stanford_person',
    'node--stanford_publication'
  ], context)
  paths = [...paths, ...otherPaths]

  return {
    paths,
    fallback: "blocking",
  }
}

function getMoreContentPaths(nodeType, context) {
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
  let paragraphs = null

  switch (type) {
    case 'node--stanford_page':

      paragraphs = await fetchRowParagraphs(node.su_page_components, 'su_page_components');

      node?.su_page_components.map((row, i) => {
        row?.su_page_components.map((component, j) => {
          node.su_page_components[i].su_page_components[j] = paragraphs.find(paragraph => paragraph.id === component.id);
        })
      })
      break;

    case 'node--stanford_publication':

      paragraphs = await fetchRowParagraphs(node.su_publication_components, 'su_pubs_components');
      node?.su_publication_components.map((row, i) => {
        row?.su_pubs_components.map((component, j) => {
          node.su_publication_components[i].su_pubs_components[j] = paragraphs.find(paragraph => paragraph.id === component.id);
        })
      })
      break;

    case 'node--stanford_news':
      paragraphs = await fetchParagraphs(node.su_news_components);
      node.su_news_components.map((component, i) => {
        node.su_news_components[i] = paragraphs.find(paragraph => paragraph.id === component.id);
      })
      break;

    case 'node--stanford_event':
      paragraphs = await fetchParagraphs(node.su_event_components);
      node.su_event_components.map((component, i) => {
        node.su_event_components[i] = paragraphs.find(paragraph => paragraph.id === component.id);
      })
      break;

    case 'node--stanford_person':
      paragraphs = await fetchParagraphs(node.su_person_components);
      node.su_person_components.map((component, i) => {
        node.su_person_components[i] = paragraphs.find(paragraph => paragraph.id === component.id);
      })
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
      node
    },
    revalidate: 60 * 5
  }
}
