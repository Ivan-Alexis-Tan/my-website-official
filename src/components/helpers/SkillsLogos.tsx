import type React from "react"

type SkillsLogosProps = {
    title: string
    logos: Record<string, Record<"comp", React.ReactNode>>
    className?: string
}

export default function SkillsLogos({ title, logos, className }: SkillsLogosProps) {
    const logoKeys = Object.keys(logos) as (keyof (typeof logos))[]

    return (
        <div className={`${className ?? ""} py-4 px-2 gap-x-5 gap-y-3
                        grid grid-cols-1 sm:grid-cols-[135px_1fr] items-center
                        bg-(--accent-bg) rounded-[10px]`}
        >
            <h2 className="text-2xl font-bold text-(--text-h) sm:text-end">
                {title}
            </h2>

            <div className="p-2 gap-5 flex flex-wrap justify-evenly items-center bg-(--bg) rounded-[15px]">
                {logoKeys.map(key => (
                    <div key={key}>
                        {logos[key].comp}
                    </div>
                ))}
            </div>
        </div>
    )
}