import Link from "next/link";

export const DrupalLink = ({href, children, buttonProps, ...props}) => {
  return (
    <Link href={href} passHref>
      <a href={href} {...props}>
        {children}
      </a>
    </Link>
  )
}