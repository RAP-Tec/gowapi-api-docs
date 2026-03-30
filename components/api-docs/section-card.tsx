interface SectionCardProps {
  title: string
  description: string
  href?: string
}

export function SectionCard({ title, description, href }: SectionCardProps) {
  return (
    <a
      href={href || "#"}
      className="block p-5 border border-[#262626] rounded-xl bg-[#111111] hover:border-emerald-500/50 hover:bg-[#171717] transition-all group"
    >
      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#a3a3a3] leading-relaxed">{description}</p>
    </a>
  )
}
