import {MainLayout} from "@/components/layouts/main-layout";

export default function Custom404({...props}) {
  return (
    <MainLayout {...props}>
      <h1>404</h1>
      <p>Page not found</p>
    </MainLayout>
  )
}