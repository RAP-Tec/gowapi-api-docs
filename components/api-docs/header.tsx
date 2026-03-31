"use client"

import { Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#262626] lg:hidden">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">W</span>
          </div>
          <span className="font-semibold text-white text-sm">GoWAPI</span>
        </div>
        <button
          onClick={onMenuClick}
          className="p-2 text-[#a3a3a3] hover:text-white hover:bg-[#171717] rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
