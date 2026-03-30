import { cn } from "@/lib/utils"

interface EndpointCardProps {
  method: "GET" | "POST" | "PUT" | "DELETE"
  endpoint: string
  title: string
  description: string
  id?: string
}

export function EndpointCard({ method, endpoint, title, description, id }: EndpointCardProps) {
  const methodColors = {
    GET: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    PUT: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  return (
    <div id={id} className="group border border-[#262626] rounded-xl bg-[#111111] hover:border-[#404040] transition-colors">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className={cn("px-2 py-0.5 text-xs font-mono font-semibold rounded border", methodColors[method])}>
            {method}
          </span>
          <code className="text-sm text-[#a3a3a3] font-mono">{endpoint}</code>
        </div>
        <p className="text-sm text-[#a3a3a3] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
