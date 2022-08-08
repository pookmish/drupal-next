import {DrupalNode} from "next-drupal";
import {NodeStanfordCourse, NodeStanfordCourseCard, NodeStanfordCourseListItem} from "@/nodes/node-stanford-course";
import {NodeStanfordEvent, NodeStanfordEventCard, NodeStanfordEventListItem} from "@/nodes/node-stanford-event";
import {
  NodeStanfordEventSeries,
  NodeStanfordEventSeriesCard,
  NodeStanfordEventSeriesListItem
} from "@/nodes/node-stanford-event-series";
import {NodeStanfordNews, NodeStanfordNewsCard, NodeStanfordNewsListItem} from "@/nodes/node-stanford-news";
import {NodeStanfordPage, NodeStanfordPageCard, NodeStanfordPageListItem} from "@/nodes/node-stanford-page";
import {NodeStanfordPerson, NodeStanfordPersonCard, NodeStanfordPersonListItem} from "@/nodes/node-stanford-person";
import {
  NodeStanfordPublication,
  NodeStanfordPublicationCard,
  NodeStanfordPublicationListItem
} from "@/nodes/node-stanford-publication";
import * as React from "react";

interface NodeProps {
  node: DrupalNode
  display?: 'page' | 'card' | 'list'
}

export const Node = ({node, display = 'page', ...props}: NodeProps) => {
  if (display === 'page') {
    return (
      <>
        {node.type === "node--stanford_course" && <NodeStanfordCourse node={node} {...props}/>}
        {node.type === "node--stanford_event" && <NodeStanfordEvent node={node} {...props}/>}
        {node.type === "node--stanford_event_series" && <NodeStanfordEventSeries node={node} {...props}/>}
        {node.type === "node--stanford_news" && <NodeStanfordNews node={node} {...props}/>}
        {node.type === "node--stanford_page" && <NodeStanfordPage node={node} {...props}/>}
        {node.type === "node--stanford_person" && <NodeStanfordPerson node={node} {...props}/>}
        {node.type === "node--stanford_publication" && <NodeStanfordPublication node={node} {...props}/>}
      </>
    )
  }

  if (display === 'card') {
    return (
      <>
        {node.type === "node--stanford_course" && <NodeStanfordCourseCard node={node} {...props}/>}
        {node.type === "node--stanford_event" && <NodeStanfordEventCard node={node} {...props}/>}
        {node.type === "node--stanford_event_series" && <NodeStanfordEventSeriesCard node={node} {...props}/>}
        {node.type === "node--stanford_news" && <NodeStanfordNewsCard node={node} {...props}/>}
        {node.type === "node--stanford_page" && <NodeStanfordPageCard node={node} {...props}/>}
        {node.type === "node--stanford_person" && <NodeStanfordPersonCard node={node} {...props}/>}
        {node.type === "node--stanford_publication" && <NodeStanfordPublicationCard node={node} {...props}/>}
      </>
    )
  }

  if (display === 'page') {
    return (
      <>
        {node.type === "node--stanford_course" && <NodeStanfordCourseListItem node={node} {...props}/>}
        {node.type === "node--stanford_event" && <NodeStanfordEventListItem node={node} {...props}/>}
        {node.type === "node--stanford_event_series" && <NodeStanfordEventSeriesListItem node={node} {...props}/>}
        {node.type === "node--stanford_news" && <NodeStanfordNewsListItem node={node} {...props}/>}
        {node.type === "node--stanford_page" && <NodeStanfordPageListItem node={node} {...props}/>}
        {node.type === "node--stanford_person" && <NodeStanfordPersonListItem node={node} {...props}/>}
        {node.type === "node--stanford_publication" && <NodeStanfordPublicationListItem node={node} {...props}/>}
      </>
    )
  }
}