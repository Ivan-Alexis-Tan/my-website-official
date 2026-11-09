import CompiledTutorialNotes from "../components/app/projects/featured/CompiledTutorialNotes";
import MyWebsiteOfficial from "../components/app/projects/featured/MyWebsiteOfficial";
import PersonalFinanceManager from "../components/app/projects/featured/PersonalFinanceManager";
import StudentRecordsManager from "../components/app/projects/featured/StudentRecordsManager";
import YtKaraokeApp from "../components/app/projects/featured/YtKaraokeApp";

import type { ProjectMapType } from "../types/types";

const baseRoute = "/projects"
const projectImgRoute = "/project-img"

export const projectIdLib = {
    1: "personal-finance-manager",
    2: "student-records-manager",
    3: "compiled-tutorial-notes",
    4: "my-website-official",
    5: "yt-karaoke-app",
} as const

export const projectIds = Object.values(projectIdLib)

export const projectsMap: ProjectMapType[] = [
    {
        id: projectIdLib["5"],
        name: "YT Karaoke App",
        route: `${baseRoute}/${projectIdLib["5"]}`,
        component: YtKaraokeApp,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/finance-manager-web-app",
        liveDemoUrl: "https://yt-karaoke-app-frontend-nine.vercel.app/",
        build: ["typescript", "nextjs", "authjs", "tailwind", "postgresql", "python", "fastapi", "sqlalchemy", "vercel"],
        imgSrc: `${projectImgRoute}/${projectIdLib["5"]}/thumbnail.png`,
        class: "featured",
    },
    {
        id: projectIdLib["1"],
        name: "Personal Finance Manager",
        route: `${baseRoute}/${projectIdLib["1"]}`,
        component: PersonalFinanceManager,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/finance-manager-web-app",
        liveDemoUrl: "https://finance-manager-web-app-puce.vercel.app/",
        build: ["typescript", "nextjs", "authjs", "tailwind", "postgresql", "prisma", "vercel"],
        imgSrc: `/${projectIdLib["1"]}-thumbnail.png`,
        class: "featured",
    },
    {
        id: projectIdLib["2"],
        name: "Student Records Manager",
        route: `${baseRoute}/${projectIdLib["2"]}`,
        component: StudentRecordsManager,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/student-records-manager/tree/master/frontend",
        liveDemoUrl: "https://student-records-manager-sand.vercel.app/",
        build: ["python", "javascript", "fastapi", "react", "tailwind", "mysql", "vercel"],
        imgSrc: "/student-records-manager.png",
        class: "featured",
    },
    {
        id: projectIdLib["3"],
        name: "Compiled Tutorial Notes",
        route: `${baseRoute}/${projectIdLib["3"]}`,
        component: CompiledTutorialNotes,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/tutorial-compiled-notes",
        liveDemoUrl: "https://tutorial-compiled-notes.vercel.app/",
        build: ["javascript", "react", "tailwind", "css", "vercel"],
        imgSrc: "/tutorial-notes-thumbnail.png",
        class: "others",
    },
    {
        id: projectIdLib["4"],
        name: "My Website",
        route: `${baseRoute}/${projectIdLib["4"]}`,
        component: MyWebsiteOfficial,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/my-website-official",
        liveDemoUrl: "https://my-website-official.vercel.app/",
        build: ["javascript", "typescript", "react", "tailwind", "css", "reactRouter", "vercel"],
        imgSrc: "/my-website-thumbnail.png",
        class: "others",
    },
];