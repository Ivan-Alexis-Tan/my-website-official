export default function Sec2About() {
    return (
        <div className="p-4 ">
            <div className="flex items-center gap-2 mb-5">
                <svg width={40} height={40}>
                    <use href="/icons.svg#info-icon" />
                </svg>

                <h1 className="text-4xl font-bold text-white">About</h1>
            </div>

            <div className="[&>p]:mb-5">
                <p>I am a software developer with a strong interest in backend development, data engineering, and artificial intelligence. I enjoy building applications that are practical, scalable, and designed with long-term maintainability in mind. My approach to software development goes beyond making features work—I like understanding how systems are designed, how different technologies interact, and why certain solutions are chosen over others.</p>

                <p>Before transitioning into software development, I worked as a teacher. That experience strengthened my ability to communicate complex ideas clearly, solve problems methodically, and continuously learn new concepts. Those skills continue to shape how I design software and approach technical challenges.</p>

                <p>My recent work includes full-stack web applications built with React, Next.js, Python, and PostgreSQL, as well as projects involving authentication, database design, data visualization, and modern development workflows. As I continue to grow, my goal is to build reliable software that solves real-world problems while expanding my expertise in backend systems, cloud technologies, and AI engineering.</p>
            </div>
        </div>
    )
}