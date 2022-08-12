import {PageLayout} from "@/components/layouts/page-layout";

export default function Custom500({...props}) {
  return (
    <PageLayout {...props}>
      <h1>500</h1>
      <p>Internal server error</p>
    </PageLayout>
  )
}