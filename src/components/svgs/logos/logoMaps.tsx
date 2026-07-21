import JSLogo from "../../svgs/logos/JSLogo"
import PythonLogo from "../../svgs/logos/PythonLogo"
import SqlLogo from "../../svgs/logos/SqlLogo"
import TSLogo from "../../svgs/logos/TSLogo"
import CssLogo from "./CssLogo"
import FastApiLogo from "./FastApiLogo"
import FlaskLogo from "./FlaskLogo"
import GitHubLogo from "./GitHubLogo"
import GitLogo from "./GitLogo"
import HtmlLogo from "./HtmlLogo"
import MatplotlibLogo from "./MatplotlibLogo"
import MySqlLogo from "./MySqlLogo"

import NextAuthLogo from "./NextAuthLogo"
import NextJsLogo from "./NextJsLogo"
import NumpyLogo from "./NumpyLogo"
import PandasLogo from "./PandasLogo"
import PostgresqlLogo from "./PostgresqlLogo"
import PrismaLogo from "./PrismaLogo"
import ReactLogo from "./ReactLogo"
import SqlAlchemyLogo from "./SqlAlchemyLogo"
import SqliteLogo from "./SqliteLogo"
import VercelLogo from "./VercelLogo"
import VsCodeLogo from "./VsCodeLogo"

type LanguagesList = (keyof typeof langLogos)[]
type FrontendList = (keyof typeof frontendLogos)[]
type BackendList = (keyof typeof backendLogos)[]
type DatabaseList = (keyof typeof databaseLogos)[]
type ToolsList = (keyof typeof toolsLogo)[]
type DataToolsList = (keyof typeof dataToolsLogo)[]

export const langLogos = {
    python: mapLogo(<PythonLogo title="Python" />),
    typescript: mapLogo(<TSLogo title="TypeScript" />),
    javascript: mapLogo(<JSLogo title="JavaScript" />),
    sql: mapLogo(<SqlLogo title="SQL" />),
}

export const frontendLogos = {
    react: mapLogo(<ReactLogo title="React" />),
    nextjs: mapLogo(<NextJsLogo title="Next.js" />),
    html: mapLogo(<HtmlLogo title="HTML" />),
    css: mapLogo(<CssLogo title="CSS" />),
}

export const backendLogos = {
    authjs: mapLogo(<NextAuthLogo title="Auth.js" />),
    flask: mapLogo(<FlaskLogo title="Flask" />),
    fastapi: mapLogo(<FastApiLogo title="FastAPI" /> ),
    prisma: mapLogo(<PrismaLogo title="Prisma" />),
    sqlalchemy: mapLogo(<SqlAlchemyLogo title="SQLAlchemy" />),
}

export const databaseLogos = {
    mysql: mapLogo(<MySqlLogo title="MySQL" />),
    postgresql: mapLogo(<PostgresqlLogo title="PostgreSQL" />),
    sqlite: mapLogo(<SqliteLogo title="SQLite" />),
}

export const toolsLogo = {
    git: mapLogo(<GitLogo title="Git" />),
    github: mapLogo(<GitHubLogo title="GitHub" />),
    vercel: mapLogo(<VercelLogo title="Vercel" />),
    vscode: mapLogo(<VsCodeLogo title="VS Code" />),
}

export const dataToolsLogo = {
    pandas: mapLogo(<PandasLogo title="Pandas" className="text-[rgb(99,62,246)]" />),
    numpy: mapLogo(<NumpyLogo title="NumPy" />),
    matplotlib: mapLogo(<MatplotlibLogo title="Matplotlib" />),
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