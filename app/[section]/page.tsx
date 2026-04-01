import { notFound } from "next/navigation"
import {
  DeveloperSDKsSection,
  AuthenticationSection,
  SessionsSection,
  MessagesSection,
  ContactsSection,
  GroupsSection,
  ChannelsSection,
  WebhooksSection,
  ResponsesSection,
  RateLimitsSection,
} from "@/components/api-docs/content-sections"
import { DocsShell } from "@/components/api-docs/docs-shell"

const sectionComponents = {
  "developer-sdks": DeveloperSDKsSection,
  authentication: AuthenticationSection,
  sessions: SessionsSection,
  messages: MessagesSection,
  contacts: ContactsSection,
  groups: GroupsSection,
  channels: ChannelsSection,
  webhooks: WebhooksSection,
  responses: ResponsesSection,
  "rate-limits": RateLimitsSection,
}

export function generateStaticParams() {
  return Object.keys(sectionComponents).map((section) => ({ section }))
}

export default function SectionPage({
  params,
}: Readonly<{
  params: { section: string }
}>) {
  const { section } = params
  const SectionComponent = sectionComponents[section as keyof typeof sectionComponents]

  if (!SectionComponent) {
    notFound()
  }

  return (
    <DocsShell>
      <SectionComponent />
    </DocsShell>
  )
}
