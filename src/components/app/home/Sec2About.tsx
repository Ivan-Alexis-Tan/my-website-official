export default function Sec2About() {
    return (
        <div className="p-4 ">

            {/* Section Header */}
            <div className="flex items-center gap-2 mb-5">
                <svg width={40} height={40}>
                    <use href="/icons.svg#info-icon" />
                </svg>

                <h1 className="text-4xl font-bold text-(--text-h)">About</h1>
            </div>

            {/* Section Contents */}
            <div className="[&>p]:mb-5">
                <p>I’m a full-stack developer focused on building practical web applications with React, Next.js, TypeScript, Python, and SQL databases. I enjoy working across the stack—from designing user interfaces and application logic to building APIs, managing databases, implementing authentication, and deploying applications.</p>

                <p>Before transitioning into software development, I worked as a secondary school teacher, where I built software tools to automate repetitive tasks and solve problems in my own workflow. That experience led me to pursue software development more seriously and shaped my approach to building applications: understand the problem first, design a practical solution, and continuously improve it as I learn.</p>

                <p>My current projects include full-stack applications involving authentication, database design, CRUD operations, data processing, and responsive interfaces. I’m particularly interested in growing as a full-stack developer while strengthening my knowledge of backend systems, software architecture, and modern web development.</p>
            </div>
        </div>
    )
}