import Link from "next/link";

export const DrupalLink = ({href, children= null, buttonProps= null, ...props}) => {
  return (
    <Link href={href} passHref>
      <a href={href} {...props}>
        {children}
      </a>
    </Link>
  )
}