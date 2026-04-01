"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Search, Command } from "lucide-react"

interface NavItem {
  title: string
  items?: {
    title: string
    method?: "GET" | "POST" | "PUT" | "DELETE"
    href: string
    description?: string
  }[]
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Getting Started with GoWAPI", href: "#getting-started" },
      { title: "Using Our API with Postman", href: "#postman" },
      { title: "How To Receive Messages and Media", href: "#receive-messages" },
      { title: "Model Context Protocol (MCP) Integration", href: "#mcp" },
      { title: "Using Proxies", href: "#proxies" },
    ],
  },
  {
    title: "Developer SDKs",
    items: [
      { title: "Official SDKs – Node.js, Python & Laravel", href: "#sdks" },
    ],
  },
  {
    title: "Authentication",
    items: [
      { title: "How to Authenticate Using Bearer Tokens", href: "#bearer-tokens" },
      { title: "How to Authenticate Using Personal Access Token", href: "#personal-access-token" },
    ],
  },
  {
    title: "Sessions",
    items: [
      { title: "Get All WhatsApp Sessions", method: "GET", href: "#get-sessions" },
      { title: "Create WhatsApp Session", method: "POST", href: "#create-session" },
      { title: "Get WhatsApp Session Details", method: "GET", href: "#get-session-details" },
      { title: "Update WhatsApp Session", method: "PUT", href: "#update-session" },
      { title: "Get WhatsApp Session Status", method: "GET", href: "#session-status" },
      { title: "Delete WhatsApp Session", method: "DELETE", href: "#delete-session" },
      { title: "Restart WhatsApp Session", method: "POST", href: "#restart-session" },
      { title: "Connect WhatsApp Session", method: "POST", href: "#connect-session" },
      { title: "Get Message Logs", method: "GET", href: "#message-logs" },
      { title: "Get WhatsApp Session QR Code", method: "GET", href: "#qr-code" },
      { title: "Get Session Logs", method: "GET", href: "#session-logs" },
      { title: "Disconnect WhatsApp Session", method: "POST", href: "#disconnect-session" },
      { title: "Get Session User Info", method: "GET", href: "#user-info" },
      { title: "Check if a number is on WhatsApp", method: "GET", href: "#check-number" },
      { title: "Regenerate API Key", method: "POST", href: "#regenerate-key" },
      { title: "Send Presence Update", method: "POST", href: "#presence-update" },
    ],
  },
  {
    title: "Messages",
    items: [
      { title: "Decrypt Media File", method: "POST", href: "#decrypt-media" },
      { title: "Upload Media File", method: "POST", href: "#upload-media" },
      { title: "Send Text Message", method: "POST", href: "#send-text" },
      { title: "Send Image Message", method: "POST", href: "#send-image" },
      { title: "Send Video Message", method: "POST", href: "#send-video" },
      { title: "Send Document Message", method: "POST", href: "#send-document" },
      { title: "Send Audio Message", method: "POST", href: "#send-audio" },
      { title: "Send Sticker Message", method: "POST", href: "#send-sticker" },
      { title: "Send Contact Card", method: "POST", href: "#send-contact" },
      { title: "Resend Failed Message", method: "POST", href: "#resend-message" },
      { title: "Send Location", method: "POST", href: "#send-location" },
      { title: "Send Quoted Message", method: "POST", href: "#send-quoted" },
      { title: "Send Poll Message", method: "POST", href: "#send-poll" },
      { title: "Edit a Message", method: "PUT", href: "#edit-message" },
      { title: "Get Message Info", method: "GET", href: "#message-info" },
      { title: "Delete a Message", method: "DELETE", href: "#delete-message" },
      { title: "Mark Message as Read", method: "POST", href: "#mark-read" },
      { title: "Send View Once Message", method: "POST", href: "#view-once" },
    ],
  },
  {
    title: "Contacts",
    items: [
      { title: "Get All Contacts", method: "GET", href: "#get-contacts" },
      { title: "Get Contact Info", method: "GET", href: "#contact-info" },
      { title: "Get Contact Profile Picture", method: "GET", href: "#contact-picture" },
      { title: "Block Contact", method: "POST", href: "#block-contact" },
      { title: "Unblock Contact", method: "POST", href: "#unblock-contact" },
      { title: "Create or Update Contact", method: "PUT", href: "#upsert-contact" },
      { title: "Get LID from Phone Number", method: "GET", href: "#lid-from-pn" },
      { title: "Get Phone Number from LID", method: "GET", href: "#pn-from-lid" },
    ],
  },
  {
    title: "Groups",
    items: [
      { title: "Create a New Group", method: "POST", href: "#create-group" },
      { title: "Get All Groups", method: "GET", href: "#get-groups" },
      { title: "Get Group Metadata", method: "GET", href: "#group-metadata" },
      { title: "Send Group Message", method: "POST", href: "#send-group-message" },
      { title: "Update Group Participants", method: "PUT", href: "#update-participants" },
      { title: "Send Message with Mentions", method: "POST", href: "#send-mentions" },
      { title: "Get Group Participants", method: "GET", href: "#group-participants" },
      { title: "Add Group Participants", method: "POST", href: "#add-participants" },
      { title: "Remove Group Participants", method: "POST", href: "#remove-participants" },
      { title: "Get Group Profile Picture", method: "GET", href: "#group-picture" },
      { title: "Update Group Settings", method: "PUT", href: "#group-settings" },
      { title: "Get Group Invite Link", method: "GET", href: "#invite-link" },
      { title: "Get Group Invite Info", method: "GET", href: "#invite-info" },
      { title: "Accept Group Invite", method: "POST", href: "#accept-invite" },
      { title: "Leave Group", method: "POST", href: "#leave-group" },
    ],
  },
  {
    title: "Channels (Communities)",
    items: [
      { title: "Send Channel Message", method: "POST", href: "#send-channel" },
    ],
  },
  {
    title: "Webhooks",
    items: [
      { title: "Webhook Setup", method: "POST", href: "#webhook-setup" },
      { title: "Webhook: Contact Update", href: "#webhook-contact-update" },
      { title: "Webhook: Contact Upsert", href: "#webhook-contact-upsert" },
      { title: "Webhook: Group Participants Update", href: "#webhook-group-participants" },
      { title: "Webhook: Group Update", href: "#webhook-group-update" },
      { title: "Webhook: Chat Update", href: "#webhook-chat-update" },
      { title: "Webhook: Message Sent", href: "#webhook-message-sent" },
      { title: "Webhook: Group Upsert", href: "#webhook-group-upsert" },
      { title: "Webhook: Session Status", href: "#webhook-session-status" },
      { title: "Webhook: Chat Delete", href: "#webhook-chat-delete" },
      { title: "Webhook: Chat Upsert", href: "#webhook-chat-upsert" },
      { title: "Webhook: QR Code Updated", href: "#webhook-qr-updated" },
      { title: "Webhook: Message Received", href: "#webhook-message-received" },
      { title: "Webhook: Message Upsert", href: "#webhook-message-upsert" },
      { title: "Webhook: Group Message Received", href: "#webhook-group-message" },
      { title: "Webhook: Message Status Update", href: "#webhook-message-status" },
      { title: "Webhook: Message Deleted", href: "#webhook-message-deleted" },
      { title: "Webhook: Newsletter Message Received", href: "#webhook-newsletter" },
      { title: "Webhook: Message Receipt Update", href: "#webhook-receipt" },
      { title: "Webhook: Personal Message Received", href: "#webhook-personal-message" },
      { title: "Webhook: Message Reaction", href: "#webhook-reaction" },
      { title: "Webhook: Call Received", href: "#webhook-call" },
      { title: "Webhook: Poll Results", href: "#webhook-poll" },
    ],
  },
  {
    title: "Responses & Errors",
    items: [
      { title: "Response Headers", href: "#response-headers" },
      { title: "Error Responses", href: "#error-responses" },
    ],
  },
  {
    title: "Rate Limits",
    items: [
      { title: "Understanding Rate Limits", href: "#rate-limits" },
    ],
  },
]

const MethodBadge = ({ method }: { method: "GET" | "POST" | "PUT" | "DELETE" }) => {
  const colors = {
    GET: "text-emerald-400",
    POST: "text-blue-400",
    PUT: "text-amber-400",
    DELETE: "text-red-400",
  }

  return (
    <span className={cn("text-[10px] font-mono font-medium", colors[method])}>
      {method}
    </span>
  )
}

interface SidebarProps {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  // AQUI const [openSections, setOpenSections] = useState<string[]>(["Getting Started", "Sessions", "Messages"]) // AQUI define quais sessões já vem abertas
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  return (
    <aside className="flex flex-col h-full bg-[#0a0a0a] border-r border-[#262626]">
      {/* Logo */}
      <div className="p-4 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-white">GoWAPI</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#a3a3a3] bg-[#171717] border border-[#262626] rounded-lg hover:border-[#404040] transition-colors">
          <Search className="w-4 h-4" />
          <span className="flex-1 text-left">Search ...</span>
          <div className="flex items-center gap-1 text-xs">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[#fafafa] hover:bg-[#171717] rounded-lg transition-colors"
            >
              <span>{section.title}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-[#a3a3a3] transition-transform",
                  openSections.includes(section.title) && "rotate-180"
                )}
              />
            </button>
            {openSections.includes(section.title) && section.items && (
              <div className="ml-2 mt-1 space-y-0.5">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#a3a3a3] hover:text-white hover:bg-[#171717] rounded-lg transition-colors"
                  >
                    {item.method && <MethodBadge method={item.method} />}
                    <span className="truncate">{item.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
