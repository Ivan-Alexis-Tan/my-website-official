import { 
    allLogos,
    backendLogos, 
    categorizedLogos, 
    databaseLogos, 
    dataToolsLogo, 
    frontendLogos, 
    langLogos, 
    toolsLogo
} from "../helpers/logoMaps"

export type LanguagesList = (keyof typeof langLogos)[]
export type FrontendList = (keyof typeof frontendLogos)[]
export type BackendList = (keyof typeof backendLogos)[]
export type DatabaseList = (keyof typeof databaseLogos)[]
export type ToolsList = (keyof typeof toolsLogo)[]
export type DataToolsList = (keyof typeof dataToolsLogo)[]

export const langLogoKeys = Object.keys(langLogos) as LanguagesList
export const frontendLogoKeys = Object.keys(frontendLogos) as FrontendList
export const backendLogoKeys = Object.keys(backendLogos) as BackendList
export const databaseLogoKeys = Object.keys(databaseLogos) as DatabaseList
export const toolsLogoKeys = Object.keys(toolsLogo) as ToolsList
export const dataToolsLogoKeys = Object.keys(dataToolsLogo) as DataToolsList

export type LogoKey = keyof typeof allLogos
export type LogoCategories = keyof typeof categorizedLogos

export type CategorizedLogos = Partial<Record<LogoCategories, LogoKey[]>>