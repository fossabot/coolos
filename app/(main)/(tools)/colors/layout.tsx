import { FC } from "react"
import { Metadata } from "next"

import PageWrapper from "@/components/shared/PageWrapper"

const pageMeta = {
  title: "Colors",
  description: "Browse our library of more than 500 color names.",
}

export const metadata: Metadata = {
  title: pageMeta.title + " - Coolos",
}

const ColorsPageLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PageWrapper title={pageMeta.title} description={pageMeta.description}>
      {children}
    </PageWrapper>
  )
}

export default ColorsPageLayout
