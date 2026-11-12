// Data variables, helper functions, etc.
import { getProject } from "../../../../helpers/projectsDbHelpers"
import { projectIdLib } from "../../../../data/projectIds"
import { YtKaraokeImgUrls } from "../../../../data/imgUrlsYtKaraokeApp"

// Components 
import ProjectContentsContainer from "../../../helpers/ProjectContentsContainer"
import CategorizedTechStack from "../CategorizedTechStack"
import ImageCarousel from "../../../helpers/ImageCarousel"

type YtKaraokeAppProps = {
    className?: string
}

export default function YtKaraokeApp({ className }: YtKaraokeAppProps) {
    const projectId = projectIdLib["5"]
    const project = getProject(projectId)

    return (
        <ProjectContentsContainer projectTitle="YT Karaoke App" 
            projectDetails={project}
            buildCustomStyle={{
                vercel: { className: "w-15!" },
                postgresql: { className: "w-15!" },
                sqlalchemy: { className: "w-10! h-10!" }
            }}
            className={className ?? ""}
        >
            <div className="flex flex-col gap-3">
                <p>A full-stack web-based karaoke application that allows users to search for karaoke songs, create playback queues, and sing along using YouTube's embedded player.</p>

                <p>The application supports both local database searches and direct YouTube searches, allowing users to find songs that haven't yet been stored in the application's database. It also includes user authentication, role-based access, and an administrative moderation system for managing videos and channels.</p>
            </div>

            {/* Project image gallery */}
            <ImageCarousel imgUrls={YtKaraokeImgUrls} />

            <div>
                <h3>Features</h3>
               
                <ul>
                    <li><strong>Karaoke Playback</strong>: Play songs through YouTube's embedded player.</li>
                    <li><strong>Video Search</strong>: Search locally stored videos or retrieve additional results through the YouTube Data API.</li>
                    <li><strong>Playback Queue</strong>: Add and manage songs in a queue maintained per browser/device.</li>
                    <li><strong>Authentication</strong>: Sign in using Google or GitHub, with support for anonymous visitors.</li>
                    <li><strong>Role-based Access</strong>: Separate permissions for regular users and administrators.</li>
                    <li><strong>Content Moderation</strong>: Submit video ban requests, review submissions, and manage banned videos and channels.</li>
                    <li><strong>Admin Moderation UI</strong>: Easier moderation operation</li>
                </ul>
            </div>

            <div>
                <h3>Tech Stack</h3>

                <CategorizedTechStack logos={[...project.build, "git", "reactRouter"]} 
                    custom={{
                        vercel: { className: "w-17!" },
                        postgresql: { className: "w-25!" },
                        sqlalchemy: { className: "w-10! h-10!" }
                    }} 
                />
            </div>
            
            <div>
                <h3>Technical Implementation</h3>

                <ul>
                    <li><strong>Frontend and Backend Separation</strong>: Built as separate Next.js and FastAPI applications, communicating through authenticated API requests.</li>
                    <li><strong>Authentication and Authorization</strong>: Implemented Google and GitHub sign-in through Auth.js. Used JOSE to generate signed JWTs for backend communication, which FastAPI verifies before performing authorization checks.</li>
                    <li><strong>Database Management</strong>: Used SQLAlchemy for database operations and Alembic for managing schema migrations.</li>
                    <li><strong>Background Processing</strong>: Online search results are returned without waiting for database persistence. Retrieved video information is saved through background tasks for future local searches.</li>
                    <li><strong>Search Optimization</strong>: Implemented search caching to reduce repeated YouTube Data API requests and database lookups.</li>
                    <li><strong>Content Moderation</strong>: Developed a request and review workflow with separate permissions for users and administrators.</li>
                </ul>
            </div>

            <div>
                <h3>Development Experience</h3>
                <p className="mb-3">This project involved integrating multiple technologies across the frontend, backend, authentication, and database layers.</p>
                
                <p>Some of the main areas I worked on included:</p>
                <ul>
                    <li>Structuring a full-stack application with separate frontend and backend codebases.</li>
                    <li>Integrating OAuth authentication with frontend JWT authentication and backend JWT authorization.</li>
                    <li>Implementing role-based authorization across API endpoints and frontend interfaces.</li>
                    <li>Managing relational database models, foreign keys, and schema migrations.</li>
                    <li>Integrating an external API while handling caching and asynchronous database persistence.</li>
                    <li>Building administrative interfaces and workflows for content moderation.</li>
                </ul>
            </div>

            <div>
                <h3>Challenges and Learning</h3>

                <ul>
                    <li>Utilizing external API (YouTube Data API v3).</li>
                    <li>Processing external API then storing it to app's database.</li>
                    <li>Make Next.js frontend communicate JWT authentication to FastAPI backend.</li>
                    <li>Designing moderation system of what YouTube videos to inlclude in the app.</li>
                    <li>Encountering slow loading duration when searching Youtube videos then returning those results.</li>
                    <li>Deploying backend to vercel (new to me) and creating Neon serverless database</li>
                </ul>
            </div>
        </ProjectContentsContainer>
    )
}