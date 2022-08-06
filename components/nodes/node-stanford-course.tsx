import Link from "next/link";

import {DrupalLink} from "@/components/simple/link";
import formatHtml from "@/lib/format-html";
import {Course} from "../../types/drupal";

interface CourseNodeProps {
  node: Course;
}

export const NodeStanfordCourse = ({node, ...props}: CourseNodeProps) => {

  return (
    <article>
      <h1>{node.title}</h1>
      {node.su_course_academic_year}
      {node.body && <>{formatHtml(node.body.processed)}</>}
      {node.su_course_code}
      {node.su_course_id}
      {node.su_course_link && <DrupalLink href={node.su_course_link.url}>{node.su_course_link.title}</DrupalLink>}
      {node.su_course_quarters && node.su_course_quarters.map((quarter, index) =>
        <div key={index}>{quarter.name}</div>
      )}
      {node.su_course_subject && <div>{node.su_course_subject.name}</div>}
      {node.su_course_tags && node.su_course_tags.map((tag, index) => <div key={index}>{tag.name}</div>)}
      {node.su_course_instructors && node.su_course_instructors.map((instructor, index) => <div
        key={index}>{instructor}</div>)}
      {node.su_shared_tags && node.su_shared_tags.map((tag, index) => <div key={index}>{tag.name}</div>)}
      {node.su_course_section_units}
    </article>
  )
}

export const NodeStanfordCourseListItem = ({node, ...props}: CourseNodeProps) => {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
    </article>
  )
}

export const NodeStanfordCourseCard = ({node, ...props}: CourseNodeProps) => {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a>
          <h2>{node.title}</h2>
        </a>
      </Link>
    </article>
  )
}