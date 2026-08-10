import type React from "react"
import { useState } from "react"

import { capitalize } from "../../../../helpers/generalHelpers"
import { getProject } from "../../../../helpers/projectsDbHelpers"

import ProjectBuild from "../../../helpers/ProjectBuildIcons"
import ProjectLinkBtns from "../../../helpers/ProjectLinks"
import TableComponent from "../../../helpers/TableComponent"

const techIds = ["frontend", "backend",  "devTools", "deployment"] as const
type techIdType = typeof techIds[number]

export default function StudentRecordsManager({ className }: { className?: string }) {
    const [techId, setTechId] = useState<techIdType>("frontend")
    const project = getProject("student-records-manager")

    return (
        <div className={`${className ?? ""} mb-5 *:mb-5 [&_h3]:text-xl [&_h3,&_h4]:font-bold [&_h3,&_h4]:text-(--text-h) [&_h3]:mb-2`}>
            <h2 className="text-3xl font-bold text-(--text-h)">📚 Student Records Manager</h2>

            <div className="mb-5">
                <ProjectLinkBtns 
                    liveDemoUrl={project.liveDemoUrl}
                    repoUrl={project.repoUrl}
                    className="mb-3"
                /> 
                <ProjectBuild build={project.build} />
            </div>
            <hr />

            <div>
                <h3>Why I Built This?</h3>
                
                <div className="pl-10">
                    <li>For real classroom use.</li>
                    <li>From inefficient manual grade tracking though Excel.</li>
                    <li>Upgraded to Django UI, but was only bare and strictly for grade computations only.</li>
                    <li>Currently: the proper rebuild, role-based access and with modern frontend UI</li>
                    <li>To make grade recording online and accessible both students and teachers.</li>
                </div>
            </div>

            <div>
                <h3>Features</h3>

                <div className="*:mb-3 [&_li]:ml-10">
                    <div>
                        <h4>👩‍🏫 Teacher</h4>
                        <li>Encode, update, and delete grade records</li>
                        <li>View all students under their class</li>
                        <li>Manage entries per subject or term</li>
                    </div>

                    <div>
                        <h4>🎓 Student</h4>
                        <li>Personal dashboard with real-time grade visibility</li>
                        <li>Read-only access — no record tampering possible</li>
                    </div>
                    
                    <div>
                        <h4>🛡️ Admin</h4>
                        <li>Full system oversight</li>
                        <li>Manage user accounts</li>
                        <li>Monitor overall activity</li>
                    </div>
                    
                    <div>
                        <h4>🔐 Authentication & Security</h4>
                        <li>Token-based auth using HTTP-only cookies — tokens never touch the browser's JavaScript, protecting against XSS</li>
                        <li>Role-based access control (RBAC) enforced at both the API route level and frontend navigation</li>
                        <li>Each role is scoped to its own data and actions only</li>
                    </div>
                </div>
            </div>

            <div>
                <h3>Tech Stack</h3>

                <div className="mx-auto mb-5 py-2 px-3 gap-5 max-w-125 flex flex-wrap justify-evenly border rounded-4xl">
                    {techIds.map(id => (
                        <button key={id} 
                            onClick={_=> setTechId(id)}
                            className={`${techId === id && "underline underline-offset-4 text-(--text-h)"} font-bold hover:text-(--accent)`}
                        >
                            {capitalize(id)}
                        </button>
                    ))}
                </div>

                <div className="*:mx-auto">
                    {techStackMap[techId]?.comp}
                </div>
            </div>

            <div>
                <h3>Challenges</h3>

                <div className="[&>li]:ml-10 [&_li]:mb-1">
                    <p className="ml-5 font-bold">My first:</p>
                    <ul className="[&>li]:ml-15 [&>li]:list-disc mb-3">
                        <li>Full-stack project</li>
                        <li>React application with a backend and a database</li>
                        <li>Deployed application online</li>
                    </ul>
                    <li>Wiring FastAPI backend to React frontend</li>
                    <li>Alembic migration practices on production</li>
                    <li>Practical practices of React Router, TanStack Query, Axios, Zod and React Hook Form</li>
                    <li>Routing control</li>
                    <li>Form validations</li>
                    <li>Role-based Access Control (RBAC) system design and implementation</li>
                    <li>Setting credential authentication and authorization (e.g. setting HTTP-only cookies)</li>
                </div>
            </div>

            <div>
                <h3>What I learned</h3>

                <div className="[&>li]:ml-10 [&>li]:mb-1">
                    <li>Wiring a dedicated backend app to React frontend</li>
                    <li><code>.env</code> basics</li>
                    <li>Alembic migration on production</li>
                    <li>Routing</li>
                    <li>Authentication and authorization</li>
                    <li>Data caching, validation, and efficient fetching</li>
                    <li>Role-based Access Control (RBAC)</li>
                    <li>Credential authentication and authorization</li>
                    <li>HTTP-only cookies</li>
                </div>
            </div>
        </div>
    )
}

const FrontendTech = () => {
    return (
        <TableComponent colHeader={["Tool", "Purpose"]}
            boldCol1={true}
            rowContents={[
                ["React", "UI framework"],
                ["React Router DOM", "Client-side routing and RBAC route guards"],
                ["TanStack Query", "Server state management and fetch caching"],
                ["Axios", "HTTP client with structured error handling"],
                ["React Hook Form", "Form state management"],
                ["Zod", "Schema-based input validation"],
            ]}
        />
    )
}

const BackendTech = () => {
    return (
        <TableComponent colHeader={["Tool", "Purpose"]} 
            boldCol1={true}
            rowContents={[
                ["FastAPI", "REST API framework"],
                ["SQLAlchemy", "ORM for database interaction"],
                ["MySQL", "Database"],
                ["uv", "Fast Python package manager and task runner"],
            ]}
        />
    )
}

const DevAndToolingTech = () => {
    return <TableComponent 
        colHeader={["Tool", "Purpose"]} 
        boldCol1={true}
        rowContents={[
            ["Git", "Version control — also used for debugging crashes by tracing what changed between commits"],
            ["Alembic", "Database schema versioning and rollback"]
        ]}
    />
}

const DeploymentTech = () => {
    return (
        <TableComponent colHeader={["Layer", "Platform"]}
            boldCol1={true}
            rowContents={[
                ["Frontend", "Vercel"],
                ["Backend", "Render"],
                ["Database", "Neon (Vercel)"],
            ]}
        />
    )
}

const techStackMap: Partial<Record<techIdType, {name: string, comp: React.ReactNode}>> = {
    frontend: mapTechStack("Frontend", <FrontendTech />),
    backend: mapTechStack("Backend", <BackendTech />),
    devTools: mapTechStack("DevTools", <DevAndToolingTech />),
    deployment: mapTechStack("Deployment", <DeploymentTech />),
}

function mapTechStack(name: string, comp: React.ReactNode) {
    return { name, comp }
}