import { getProject } from "../../../../helpers/projectsDbHelpers";

import ProjectBuild from "../../../helpers/ProjectBuildIcons";
import ProjectLinkBtns from "../../../helpers/ProjectLinks";
import CategorizedTechStack from "../CategorizedTechStack";

export default function PersonalFinanceManager({ className }: { className?: string }) {
    const project = getProject("personal-finance-manager")
    
    return (
        <div className={`${className ?? ""} mb-5 *:mb-5 [&_h3]:text-xl [&_h3,&_h4]:font-bold [&_h3,&_h4]:text-(--text-h) [&_h3]:mb-2`}>
            <h2 className="text-3xl font-bold text-(--text-h)">
                💳 Personal Finance Manager Web App
            </h2>

            <div className="mb-5">
                <ProjectLinkBtns 
                    liveDemoUrl={project.liveDemoUrl}
                    repoUrl={project.repoUrl}
                    className="mb-3"
                />
                <ProjectBuild 
                    build={project.build} 
                    logoProps={{ 
                        nextjs: { className: "w-13!" },
                        postgresql: { className: "w-17!" },
                        vercel: { className: "w-15!" },
                    }}
                />
            </div>
            <hr />

            <p>A full-stack web application for recording and managing personal financial transactions. The application allows users to securely sign in, record income and expense transactions individually or in bulk, and efficiently search and organize financial records.</p>

            <div>
                <h3>Why I Built This</h3>
                <ul className="[&>li]:ml-10 [&>li]:list-disc">
                    <li>For personal finance tracking</li>
                    <li>Making the recorder online for accessibility</li>
                    <li>More reliable and personalized recording system than in Excel</li>
                    <li>Can also be used by others via loggin in</li>
                    <li>For personalized charts and graphs for data visualization</li>
                    <li>Learning experience on developing a real-world web app</li>
                </ul>
            </div>

            <div>
                <h3>Features</h3>
                <ul className="[&>li]:ml-10 [&>li]:list-disc">
                    <li>Secure authentication with Google and GitHub (OAuth)</li>
                    <li>Record income and expense transactions</li>
                    <li>Create multiple transactions in a single submission (bulk entry)</li>
                    <li>Edit and delete existing transactions</li>
                    <li>Search transactions</li>
                    <li>Filter transactions</li>
                    <li>Pagination</li>
                    <li>Responsive UI</li>
                    <li>Server-side validation with Zod</li>
                </ul>
            </div>

            <div>
                <h3>Tech Stack</h3>

                <CategorizedTechStack logos={[...project.build, "git", "javascript", "react", "css"]} 
                    custom={{
                        postgresql: { className: "w-25! h-10!" },
                        vercel: { className: "w-20! h-5!" },
                        nextjs: { className: "w-20! h-5!" },
                    }} 
                />
            </div>

            <div>
                <h3>Challenges</h3>
                
                <ul className="[&>li]:ml-10 [&_li]:list-disc">
                    <p>The first:</p>
                    <ul className="[&>li]:ml-15 mb-3">
                        <li>developed real-world app using Next.js</li>
                        <li>app using tailwind styling</li>
                        <li>app on responsive design</li>
                        <li>app to utilizing prisma</li>
                        <li>app using Auth.js</li>
                    </ul>

                    <li>Wiring third-party authentications (usin Google and GitHub)</li>
                    <li>Setting up authentication using Auth.js</li>
                    <li>Prisma migrations in production</li>
                    <li>Setting up middleware in Next.js environment</li>
                    <li>Setting up PostgreSQL database</li>
                    <li>Learning PostgreSQL (from MySQL)</li>
                </ul>
            </div>

            <div>
                <h3>What I Learned</h3>
                
                <ul className="[&>li]:ml-10 [&_li]:list-disc">
                    <li>The general Next.js environment</li>
                    <li>Responsive design and layout</li>
                    <li>More Typescript concepts</li>
                    <li>Next.js routing</li>
                    <li>Next.js server-side and client-side rendering</li>
                    <li>Next.js authentication</li>
                    <li>Setting up middleware and Auth.js configurations</li>
                    <li>Protected routes and RBAC in Next.js environment</li>
                    <li>Fetching from database directly from server-side instead of using API endpoints</li>
                    <li>Setting up and utilizing <code>.env</code> variables</li>
                    <li>Prisma migrations</li>
                    <li>PostgreSQL ORM process</li>
                </ul>
            </div>
        </div>
    )
}