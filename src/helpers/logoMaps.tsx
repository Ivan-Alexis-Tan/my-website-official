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
import type { SVGComponentProps } from "../types/types"
import type { CategorizedLogos, LogoCategories, LogoKey } from "../types/logosMapTypes"

export const langLogos = {
    python: PythonLogo,
    typescript: TSLogo,
    javascript: JSLogo,
    sql: SqlLogo,
}

export const frontendLogos = {
    react: ReactLogo,
    nextjs: NextJsLogo,
    tailwind: TailwindLogo,
    html: HtmlLogo,
    css: CssLogo,
}

export const backendLogos = {
    authjs: NextAuthLogo,
    flask: FlaskLogo,
    fastapi: FastApiLogo,
    prisma: PrismaLogo,
    sqlalchemy: SqlAlchemyLogo ,
}

export const databaseLogos = {
    mysql: MySqlLogo,
    postgresql: PostgresqlLogo, // className="h-10! w-30!"
    sqlite: SqliteLogo,
}

export const toolsLogo = {
    git: GitLogo,
    github: GitHubLogo,
    vercel: VercelLogo, // className="h-10! w-20!"
    vscode: VsCodeLogo,
}

export const dataToolsLogo = {
    pandas: PandasLogo, // className={`text-[rgb(99,62,246)]`},
    numpy: NumpyLogo,
    matplotlib: MatplotlibLogo,
}

export const allLogos = {
    ...langLogos,
    ...frontendLogos,
    ...backendLogos,
    ...databaseLogos,
    ...toolsLogo,
    ...dataToolsLogo,
}

export const categorizedLogos = {
    langLogos,
    frontendLogos,
    backendLogos,
    databaseLogos,
    toolsLogo,
    dataToolsLogo,
}

const logoCats = Object.entries(categorizedLogos).reduce(
    (acc, [cat, logos]) => {
        for (const logoName of Object.keys(logos)) {
            acc[logoName as LogoKey] = cat as LogoCategories
        }
        return acc
    }, 
    {} as Record<LogoKey, LogoCategories>
)

export function displayLogo(logoKey: LogoKey, props?: SVGComponentProps) {
    const Logo = allLogos[logoKey]

    return <Logo {...props} /> 
}

export function categorizeLogo(logoArr: LogoKey[]) {
    return logoArr.reduce(
    (acc, logo) => {
        const category = logoCats[logo]
        acc[category] 
            ? acc[category] = [...acc[category] as LogoKey[], logo]
            : acc[category] = [logo]
        return acc
    }, {} as CategorizedLogos)
}

export function translateLogoCat(category: keyof NonNullable<CategorizedLogos>) {
    const translation = {
        langLogos: "Language",
        frontendLogos: "Frontend",
        backendLogos: "Backend",
        databaseLogos: "Database",
        toolsLogo: "Tools",
        dataToolsLogo: "Data Tools",
    }

    return translation[category]
}