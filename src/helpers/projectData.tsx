import { mapFeaturedProj } from "../components/helpers/ProjectCard";

import CssLogo from "../components/svgs/logos/CssLogo";
import FastApiLogo from "../components/svgs/logos/FastApiLogo";
import JSLogo from "../components/svgs/logos/JSLogo";
import MySqlLogo from "../components/svgs/logos/MySqlLogo";
import NextAuthLogo from "../components/svgs/logos/NextAuthLogo";
import NextJsLogo from "../components/svgs/logos/NextJsLogo";
import PostgresqlLogo from "../components/svgs/logos/PostgresqlLogo";
import PrismaLogo from "../components/svgs/logos/PrismaLogo";
import PythonLogo from "../components/svgs/logos/PythonLogo";
import ReactLogo from "../components/svgs/logos/ReactLogo";
import TailwindLogo from "../components/svgs/logos/TailwindLogo";
import TSLogo from "../components/svgs/logos/TSLogo";
import VercelLogo from "../components/svgs/logos/VercelLogo";

export const featuredProj = [
    mapFeaturedProj({
        imgSrc: "/personal-finance-manager-thumbnail.png",
        title: "Personal Finance Manager",
        repoUrl: "https://github.com/Ivan-Alexis-Tan/finance-manager-web-app",
        liveDemoUrl: "https://finance-manager-web-app-puce.vercel.app/",
        build: [
            <TSLogo />,
            <NextJsLogo className="w-10!" />,
            <NextAuthLogo />,
            <TailwindLogo />,
            <PostgresqlLogo className="w-15!" />,
            <PrismaLogo />,
            <VercelLogo className="w-13!" />,
        ],
    }),

    mapFeaturedProj({
        imgSrc: "/student-records-manager.png",
        title: "Student Records Manager",
        repoUrl: "https://github.com/Ivan-Alexis-Tan/student-records-manager/tree/master/frontend",
        liveDemoUrl: "https://student-records-manager-sand.vercel.app/",
        build: [
            <PythonLogo />,
            <JSLogo />,
            <FastApiLogo />,
            <ReactLogo />,
            <TailwindLogo />,
            <MySqlLogo className="w-8!" />,
            <VercelLogo className="w-13!"/>,
        ]
    }),

    mapFeaturedProj({
        imgSrc: "/tutorial-notes-thumbnail.png",
        title: "Compiled Tutorial Notes",
        repoUrl: "https://github.com/Ivan-Alexis-Tan/tutorial-compiled-notes",
        liveDemoUrl: "https://tutorial-compiled-notes.vercel.app/",
        build: [
            <JSLogo />,
            <ReactLogo />,
            <TailwindLogo />,
            <CssLogo />,
            <VercelLogo className="w-13!"/>,
        ]
    })
]