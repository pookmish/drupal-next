import Link from "next/link";

export const DrupalLink = ({href, children, ...props}) => {
  return (
    <Link href={href} passHref>
      <a href={href} {...props}>
        {children}
      </a>
    </Link>
  )
}