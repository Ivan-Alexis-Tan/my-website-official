import JSLogo from "../components/svgs/logos/JSLogo"
import PythonLogo from "../components/svgs/logos/PythonLogo"
import SqlLogo from "../components/svgs/logos/SqlLogo"
import TSLogo from "../components/svgs/logos/TSLogo"
import CssLogo from "../components/svgs/logos/CssLogo"
import FastApiLogo from "../components/svgs/logos/FastApiLogo"
import FlaskLogo from "../components/svgs/logos/FlaskLogo"
import GitHubLogo from "../components/svgs/logos/GitHubLogo"
import GitLogo from "../components/svgs/logos/GitLogo"
import HtmlLogo from "../components/svgs/logos/HtmlLogo"
import MatplotlibLogo from "../components/svgs/logos/MatplotlibLogo"
import MySqlLogo from "../components/svgs/logos/MySqlLogo"

import NextAuthLogo from "../components/svgs/logos/NextAuthLogo"
import NextJsLogo from "../components/svgs/logos/NextJsLogo"
import NumpyLogo from "../components/svgs/logos/NumpyLogo"
import PandasLogo from "../components/svgs/logos/PandasLogo"
import PostgresqlLogo from "../components/svgs/logos/PostgresqlLogo"
import PrismaLogo from "../components/svgs/logos/PrismaLogo"
import ReactLogo from "../components/svgs/logos/ReactLogo"
import SqlAlchemyLogo from "../components/svgs/logos/SqlAlchemyLogo"
import SqliteLogo from "../components/svgs/logos/SqliteLogo"
import TailwindLogo from "../components/svgs/logos/TailwindLogo"
import VercelLogo from "../components/svgs/logos/VercelLogo"
import VsCodeLogo from "../components/svgs/logos/VsCodeLogo"

type LanguagesList = (keyof typeof langLogos)[]
type FrontendList = (keyof typeof frontendLogos)[]
type BackendList = (keyof typeof backendLogos)[]
type DatabaseList = (keyof typeof databaseLogos)[]
type ToolsList = (keyof typeof toolsLogo)[]
type DataToolsList = (keyof typeof dataToolsLogo)[]

export const langLogos = {
    python: mapLogo(<PythonLogo  />),
    typescript: mapLogo(<TSLogo  />),
    javascript: mapLogo(<JSLogo  />),
    sql: mapLogo(<SqlLogo  />),
}

export const frontendLogos = {
    react: mapLogo(<ReactLogo  />),
    nextjs: mapLogo(<NextJsLogo  />),
    tailwind: mapLogo(<TailwindLogo  />),
    html: mapLogo(<HtmlLogo  />),
    css: mapLogo(<CssLogo  />),
}

export const backendLogos = {
    authjs: mapLogo(<NextAuthLogo  />),
    flask: mapLogo(<FlaskLogo  />),
    fastapi: mapLogo(<FastApiLogo   /> ),
    prisma: mapLogo(<PrismaLogo  />),
    sqlalchemy: mapLogo(<SqlAlchemyLogo   />),
}

export const databaseLogos = {
    mysql: mapLogo(<MySqlLogo  />),
    postgresql: mapLogo(<PostgresqlLogo className="h-10! w-30!" />),
    sqlite: mapLogo(<SqliteLogo  />),
}

export const toolsLogo = {
    git: mapLogo(<GitLogo  />),
    github: mapLogo(<GitHubLogo  />),
    vercel: mapLogo(<VercelLogo className="h-10! w-20!" />),
    vscode: mapLogo(<VsCodeLogo  />),
}

export const dataToolsLogo = {
    pandas: mapLogo(<PandasLogo className={`text-[rgb(99,62,246)]`} />),
    numpy: mapLogo(<NumpyLogo  />),
    matplotlib: mapLogo(<MatplotlibLogo  />),
}

export const langKeys = Object.keys(langLogos) as LanguagesList
export const frontendLogoKeys = Object.keys(frontendLogos) as FrontendList
export const backendLogoKeys = Object.keys(backendLogos) as BackendList
export const databaseLogoKeys = Object.keys(databaseLogos) as DatabaseList
export const toolsLogoKeys = Object.keys(toolsLogo) as ToolsList
export const dataToolsLogoKeys = Object.keys(dataToolsLogo) as DataToolsList

export const allLogos = {
    ...langLogos,
    ...frontendLogos,
    ...backendLogos,
    ...databaseLogos,
    ...toolsLogo,
    ...dataToolsLogo,
}

function mapLogo(comp: React.ReactNode) {
    return {
        comp,
    }
}