import {MainLayout} from "@/components/layouts/main-layout";

export default function Custom500({...props}) {
  return (
    <MainLayout {...props}>
      <h1>500</h1>
      <p>Internal server error</p>
    </MainLayout>
  )
}