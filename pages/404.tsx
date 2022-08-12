import {PageLayout} from "@/components/layouts/page-layout";

export default function Custom404({...props}) {
  return (
    <PageLayout {...props}>
      <h1>404</h1>
      <p>Page not found</p>
    </PageLayout>
  )
}