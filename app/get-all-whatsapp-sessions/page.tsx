"use client"

import { DocsShell } from "@/components/api-docs/docs-shell"
import { useState } from "react"

export default function GetAllWhatsAppSessionsPage() {
  const endpoint = "/api/whatsapp-sessions"
  const [copied, setCopied] = useState(false)

  const handleCopyEndpoint = async () => {
    try {
      await navigator.clipboard.writeText(endpoint)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <DocsShell>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-1">Get All WhatsApp Sessions</h2>
        <p className="text-sm text-[#a3a3a3] mb-6">Sessions</p>

        <div className="p-6 border border-[#262626] rounded-xl bg-[#111111]">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                GET
              </span>
              <code className="text-sm text-[#a3a3a3] font-mono">{endpoint}</code>
            </div>
            <button
              type="button"
              onClick={handleCopyEndpoint}
              className="px-3 py-1.5 text-xs text-[#d4d4d4] border border-[#2f2f2f] rounded-md bg-[#171717] hover:bg-[#1f1f1f] transition-colors"
            >
              {copied ? "Copied!" : "Copy endpoint"}
            </button>
          </div>

          <p className="text-[#a3a3a3] mb-6 leading-relaxed">
            Retrieves a list of all WhatsApp sessions available to the authenticated user.
          </p>

          <h3 className="text-4xl font-bold text-white mb-6 pb-4 border-b border-[#262626]">
            Get All WhatsApp Sessions
          </h3>

          <p className="text-[#a3a3a3] mb-4 leading-relaxed">
            Retrieves a list of all WhatsApp sessions available to the authenticated user.
          </p>

          <div className="mb-8 p-4 border-l-2 border-amber-500 rounded-lg bg-[#1a1a1a] text-[#d4d4d4] text-sm">
            This endpoint requires an access token to be included in the <code className="text-emerald-400">Authorization</code> header.
            You can get the token from{" "}
            <a href="/authentication#api-tokens" className="text-emerald-400 hover:text-emerald-300 underline">
              here
            </a>.
          </div>

          <h4 className="text-2xl font-semibold text-white mb-3">Code Examples</h4>
          <div className="mb-3 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500 text-white text-sm font-medium">Bash</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Python</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">JavaScript</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">PHP</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Ruby</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Go</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">CSharp</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Java</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Swift</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">PowerShell</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">TypeScript</span>
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171717] text-[#a3a3a3] text-sm font-medium border border-[#262626]">Rust</span>
          </div>

          <pre className="mb-8 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-[#d4d4d4]">
{`curl "https://www.gowapi.com/api/whatsapp-sessions" \\
  -H "Authorization: Bearer YOUR_SESSION_ACCESS_TOKEN"`}
          </pre>

          <h4 className="text-2xl font-semibold text-white mb-3">Response Examples</h4>
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500 text-white text-sm font-medium">Success Response</span>
          </div>

          <pre className="p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-x-auto text-sm text-[#d4d4d4]">
{`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Business WhatsApp",
      "status": "connected",
      "record_qrcode": true,
      "log_message": null,
      "webhook_url": "https://example.com/webhook",
      "webhook_events": [
        "messages.upsert",
        "chats.update"
      ],
      "created_at": "2025-04-11T12:30:00Z",
      "updated_at": "2025-04-15T09:15:00Z"
    },
    {
      "id": 2,
      "name": "Support WhatsApp",
      "status": "not_connected",
      "record_qrcode": false,
      "log_message": null,
      "webhook_url": null,
      "webhook_events": [],
      "created_at": "2025-04-13T09:45:00Z",
      "updated_at": "2025-04-17T13:20:00Z"
    }
  ]
}`}
          </pre>
        </div>
      </section>
    </DocsShell>
  )
}
