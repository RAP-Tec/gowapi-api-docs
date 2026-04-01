"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "@/components/api-docs/sidebar"
import { Header } from "@/components/api-docs/header"
import { X } from "lucide-react"

interface DocsShellProps {
  children: ReactNode
}

export function DocsShell({ children }: Readonly<DocsShellProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        <div className="hidden lg:block w-72 h-screen sticky top-0">
          <Sidebar />
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close sidebar overlay"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-72 bg-[#0a0a0a]">
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 p-1 text-[#a3a3a3] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        <main className="flex-1 min-w-0">
          <div className="w-full px-4 py-8 lg:px-6 lg:py-12">
            <div className="mb-12 pb-8 border-b border-[#262626]">
              <div className="mb-4 flex items-center gap-2">
                <a
                  href="https://app.gowa.com.br/hc/gowapi/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Help Center</span>
                </a>
                <a
                  href="https://gowapi.readme.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Readme.io Doc</span>
                </a>
                <a
                  href="https://swagger.gowapi.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Swagger API</span>
                </a>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                GoWAPI WhatsApp API
              </h1>
              <p className="text-lg text-[#a3a3a3] leading-relaxed">
                Best WhatsApp API for Developers and Automators. Build powerful WhatsApp integrations with our easy-to-use REST API.
              </p>
            </div>

            {children}

            <footer className="mt-16 pt-8 border-t border-[#262626] text-center">
              <p className="text-sm text-[#a3a3a3]">
                GoWAPI - Best WhatsApp API for Developers and Automators
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
