import { getProject } from "../../../../helpers/projectsDbHelpers";
import ProjectBuild from "../../../helpers/ProjectBuildIcons";
import ProjectLinkBtns from "../../../helpers/ProjectLinks";
import CategorizedTechStack from "../CategorizedTechStack";

export default function MyWebsiteOfficial({ className }: { className?: string }) {
    const project = getProject("my-website-official")
    return (
        <div className={`${className ?? ""} mb-5 *:mb-5 [&_h3]:text-xl [&_h3,&_h4]:font-bold [&_h3,&_h4]:text-(--text-h) [&_h3]:mb-2`}>
            <div className="flex gap-2 items-center [&>h2]:text-3xl [&>h2]:font-bold">
                <h2 className="text-(--text-h)">🌐 My Website</h2>
                <h2>(This Website)</h2>
            </div>

            <div>
                <ProjectLinkBtns
                    liveDemoUrl={project.liveDemoUrl}
                    repoUrl={project.repoUrl}
                    className="mb-3"
                />

                <ProjectBuild 
                    build={project.build}
                    logoProps={{
                        vercel: { className: "w-13!"}
                    }}
                />
            </div>
            <hr />

            <div className="gap-3 flex flex-col justify-between">
                <p>The homepage introduces who I am, the technologies I work with, and a collection of projects that I've built throughout my learning journey.</p>
                <p>Each project has its own dedicated page containing an overview, descriptions, technology stack, links to the source code, live demo (when available), and other relevant information.</p>
            </div>

            <div>
                <h3>Why I Built This</h3>

                <ul className="[&>li]:ml-10 [&_li]:list-disc">
                    <li>To have a personal website</li>
                    <li>Inspired from indie dev community</li>
                    <li>Showcase and record the projects I made</li>
                    <li>Keep track the technologies I have worked with</li>
                    <li>Record my learning journey</li>
                    <li>Easy access of the links of the projects I made</li>
                    <li>Updated version of my old website</li>
                </ul>
            </div>

            <div>
                <h3>Features</h3>
                
                <ul className="ml-10 [&>li]:list-disc">
                    <li>Responsive design for desktop and mobile devices</li>
                    <li>Project showcase with dedicated project pages</li>
                    <li>Homepage sections for:</li>
                    <ul className="ml-7 mb-2 [&>li]:list-decimal">
                        <li>Hero</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                    </ul>

                    <li>Sidebar navigation on desktop</li>
                    <li>Mobile-friendly navigation drawer</li>
                    <li>External links to GitHub repositories</li>
                    <li>External links to deployed projects (when available)</li>
                    <li>Dark-themed interface</li>
                    <li>Component-based architecture using React</li>
                </ul>
            </div>

            <div>
                <h3>Tech Stack</h3>

                <CategorizedTechStack
                    logos={project.build}
                    custom={{
                        vercel: { className: "w-17!"}
                    }}
                />
            </div>

            <div>
                <h3>Challenges</h3>

                <ul className="ml-10 [&>li]:list-disc">
                    <li>Project design and functionality</li>
                    <li>File and directory management</li>
                    <li>Deciding between dynamic reusable component vs. simple hard-coded component</li>
                    <li>Responsive design and layout</li>
                    <li>Card component design</li>
                    <li>Graphic design</li>
                    <li>Usage distinction between <code>display: flex</code> vs <code>display: grid</code></li>
                    <li><code>.svg</code> file usage instead of <code>.png</code></li>
                    <li>TypeScript dynamic typing</li>
                    <li>Light and dark theme CSS</li>
                </ul>
            </div>

            <div>
                <h3>What I Learned</h3>

                <ul className="ml-10 [&>li]:list-disc">
                    <li>Project design and functionality</li>
                    <li>File and directory management</li>
                    <li>Drawbacks and advantages of dynamic component vs. simple hard-coded component</li>
                    <li>I can now create sidebars and navbars without guides</li>
                    <li>Usage distinction between <code>display: flex</code> vs <code>display: grid</code></li>
                    <li>Using <code>.svg</code> as a component</li>
                    <li>TypeScript dynamic typing</li>
                </ul>
            </div>
        </div>
    )
}