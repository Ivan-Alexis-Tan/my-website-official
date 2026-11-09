import { getProject } from "../../../../helpers/projectsDbHelpers"

import ProjectContentsContainer from "../../../helpers/ProjectContentsContainer"
import CategorizedTechStack from "../CategorizedTechStack"

type CompiledTutorialNotesProps = {
    className?: string
}

export default function CompiledTutorialNotes({ className }: CompiledTutorialNotesProps) {
    const project = getProject("compiled-tutorial-notes")

    return (
        <ProjectContentsContainer
            projectTitle="Compiled Tutorial Notes"
            projectDetails={project}
            className={className}
            buildCustomStyle={{
                vercel: { className: "w-10!" }
            }}
        >
            <div className="flex flex-col gap-3">
                <p>A personal web application that serves as my compiled web development notes.</p>

                <p>Instead of writing notes in a traditional document, I built them into a React application. Every topic I studied became another opportunity to practice HTML, CSS, JavaScript, React, component design, layouts, navigation, and responsive design.</p>

                <p>The website is primarily a reference for myself. The notes are written as reminders of concepts I've already learned rather than beginner-friendly tutorials.</p>
            </div>

            <div>
                <h3>Why I Built This</h3>
               
                <ul>
                    <li>I often revisit concepts that I haven't used for a while</li>
                    <li>Rather than written notes on papers or <code>.docx</code> files, I want an online notes that quickly navigate through everything I had studied.</li>
                    <li>An online notes for accessibility</li>
                    <li>More personalized notes, instead of scanning though online guides and documentations.</li>
                    <li>Records my learning process and what I have learned so far</li>
                    <li>Creating this application allowed me to continuously practice frontend development while documenting what I learned.</li>
                </ul>
            </div>

            <div>
                <h3>Features</h3>

                <ul>
                    <li>Organized learning notes by technology</li>
                    <li>Multiple levels of navigation for quick access</li>
                    <li>Responsive layout</li>
                    <li>Desktop sidebar navigation</li>
                    <li>Mobile drawer navigation</li>
                    <li>Internal guide summaries for longer topics</li>
                    <li>Dark theme interface</li>
                    <li>Built entirely with reusable React components</li>
                </ul>
            </div>

            <div>
                <h3>Tech Stack</h3>

                <CategorizedTechStack logos={[...project.build, "git", "reactRouter"]} 
                    custom={{
                        vercel: { className: "w-17!" }
                    }} 
                />
            </div>

            <div>
                <h3>Challenges</h3>

                <ul>
                    <li>My first react project</li>
                    <li>Transfering existing notes from previous static HTML and Flask tech stack</li>
                    <li>Implementing sidebar and navbar</li>
                    <li>Handling multiple states</li>
                    <li>React Router navigation and routing</li>
                    <li>Constructing React Router boilerplate or its initial setting up</li>
                    <li>HTML styling using Tailwind and CSS</li>
                    <li>Project architecture</li>
                    <li>File and directory management</li>
                </ul>
            </div>

            <div>
                <h3>What I Learned</h3>

                <ul>
                    <li>Basics of file and directory management</li>
                    <li>React Router setup and routing</li>
                    <li>React Router navigation</li>
                    <li>CSS and Tailwind styling</li>
                    <li>Designing project architecture</li>
                    <li>Setting navbar and sidebar</li>
                </ul>
            </div>
        </ProjectContentsContainer>
    )
}