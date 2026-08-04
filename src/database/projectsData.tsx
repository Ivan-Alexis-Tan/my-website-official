import CompiledTutorialNotes from "../components/app/projects/featured/CompiledTutorialNotes";
import MyWebsiteOfficial from "../components/app/projects/featured/MyWebsiteOfficial";
import PersonalFinanceManager from "../components/app/projects/featured/PersonalFinanceManager";
import StudentRecordsManager from "../components/app/projects/featured/StudentRecordsManager";

import type { ProjectMapType } from "../types/types";

const baseRoute = "/projects"

export const projectIds = [
    "personal-finance-manager",
    "student-records-manager",
    "compiled-tutorial-notes",
    "my-website-official",
] as const 

export const projectsMap: ProjectMapType[] = [
    {
        id: "personal-finance-manager",
        name: "Personal Finance Manager",
        route: `${baseRoute}/personal-finance-manager`,
        component: PersonalFinanceManager,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/finance-manager-web-app",
        liveDemoUrl: "https://finance-manager-web-app-puce.vercel.app/",
        build: ["typescript", "nextjs", "authjs", "tailwind", "postgresql", "prisma", "vercel"],
        imgSrc: "/personal-finance-manager-thumbnail.png",
        class: "featured",
    },
    {
        id: "student-records-manager",
        name: "Student Records Manager",
        route: `${baseRoute}/student-records-manager`,
        component: StudentRecordsManager,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/student-records-manager/tree/master/frontend",
        liveDemoUrl: "https://student-records-manager-sand.vercel.app/",
        build: ["python", "javascript", "fastapi", "react", "tailwind", "mysql", "vercel"],
        imgSrc: "/student-records-manager.png",
        class: "featured",
    },
    {
        id: "compiled-tutorial-notes",
        name: "Compiled Tutorial Notes",
        route: `${baseRoute}/compiled-tutorial-notes`,
        component: CompiledTutorialNotes,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/tutorial-compiled-notes",
        liveDemoUrl: "https://tutorial-compiled-notes.vercel.app/",
        build: ["javascript", "react", "tailwind", "css", "vercel"],
        imgSrc: "/tutorial-notes-thumbnail.png",
        class: "featured",
    },
    {
        id: "my-website-official",
        name: "My Website",
        route: `${baseRoute}/my-website-official`,
        component: MyWebsiteOfficial,
        repoUrl: "https://github.com/Ivan-Alexis-Tan/my-website-official",
        liveDemoUrl: "https://my-website-official.vercel.app/",
        build: ["javascript", "typescript", "react", "tailwind", "css", "reactRouter", "vercel"],
        imgSrc: "/my-website-thumbnail.png",
        class: "featured",
    },
];