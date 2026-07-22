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

const size = "h-15 w-15" 

export const langLogos = {
    python: mapLogo(<PythonLogo title="Python" className={size} />),
    typescript: mapLogo(<TSLogo title="TypeScript" className={size} />),
    javascript: mapLogo(<JSLogo title="JavaScript" className={size} />),
    sql: mapLogo(<SqlLogo title="SQL" className={size} />),
}

export const frontendLogos = {
    react: mapLogo(<ReactLogo title="React" className={size} />),
    nextjs: mapLogo(<NextJsLogo title="Next.js" className={size} />),
    html: mapLogo(<HtmlLogo title="HTML" className={size} />),
    css: mapLogo(<CssLogo title="CSS" className={size} />),
}

export const backendLogos = {
    authjs: mapLogo(<NextAuthLogo title="Auth.js" className={size} />),
    flask: mapLogo(<FlaskLogo title="Flask" className={size} />),
    fastapi: mapLogo(<FastApiLogo title="FastAPI"  className={size} /> ),
    prisma: mapLogo(<PrismaLogo title="Prisma"  className={size} />),
    sqlalchemy: mapLogo(<SqlAlchemyLogo title="SQLAlchemy"  className={size} />),
}

export const databaseLogos = {
    mysql: mapLogo(<MySqlLogo title="MySQL"  className={size} />),
    postgresql: mapLogo(<PostgresqlLogo title="PostgreSQL" className="h-10 w-30" />),
    sqlite: mapLogo(<SqliteLogo title="SQLite"  className={size} />),
}

export const toolsLogo = {
    git: mapLogo(<GitLogo title="Git" />),
    github: mapLogo(<GitHubLogo title="GitHub" className={size} />),
    vercel: mapLogo(<VercelLogo title="Vercel" className="h-10 w-30" />),
    vscode: mapLogo(<VsCodeLogo title="VS Code" className={size} />),
}

export const dataToolsLogo = {
    pandas: mapLogo(<PandasLogo title="Pandas" className={`text-[rgb(99,62,246)] ${size}`} />),
    numpy: mapLogo(<NumpyLogo title="NumPy" className={size} />),
    matplotlib: mapLogo(<MatplotlibLogo title="Matplotlib" className={size} />),
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