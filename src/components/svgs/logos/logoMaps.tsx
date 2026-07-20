import JSLogo from "../../svgs/logos/JSLogo"
import PythonLogo from "../../svgs/logos/PythonLogo"
import SqlLogo from "../../svgs/logos/SqlLogo"
import TSLogo from "../../svgs/logos/TSLogo"
import CssLogo from "./CssLogo"
import HtmlLogo from "./HtmlLogo"
import NextAuthLogo from "./NextAuthLogo"
import NextJsLogo from "./NextJsLogo"
import ReactLogo from "./ReactLogo"

type LanguagesList = (keyof typeof langLogos)[]
type FrontendList = (keyof typeof frontendLogos)[]
type BackendList = (keyof typeof backendLogos)[]

export const langLogos = {
    python: mapLogo(<PythonLogo title="Python" />),
    typescript: mapLogo(<TSLogo title="TypeScript" />),
    javascript: mapLogo(<JSLogo title="JavaScript" />),
    sql: mapLogo(<SqlLogo title="SQL" />),
}

export const langKeys = Object.keys(langLogos) as LanguagesList

export const frontendLogos = {
    react: mapLogo(<ReactLogo title="React" />),
    nextjs: mapLogo(<NextJsLogo title="NextJS" />),
    html: mapLogo(<HtmlLogo title="HTML" />),
    css: mapLogo(<CssLogo title="CSS" />),
}

export const frontendLogoKeys = Object.keys(frontendLogos) as FrontendList

export const backendLogos = {
    authjs: mapLogo(<NextAuthLogo title="Auth.js" />),
}

export const backendLogoKeys = Object.keys(backendLogos) as BackendList

function mapLogo(comp: React.ReactNode) {
    return {
        comp,
    }
}