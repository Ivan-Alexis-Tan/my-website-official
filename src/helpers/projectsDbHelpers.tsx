import { projectsMap } from "../database/projectsData"

import type { ProjectId, ProjectMapType, SVGComponentProps } from "../types/types"

export function getProject(projectId: ProjectId) {
    return projectsMap.find(proj => proj.id === projectId) as ProjectMapType
}

export function projectRoutes(projects: ProjectMapType[]) {
    return projects.map(proj => (
        {
            id: proj.id,
            name: proj.name,
            link: proj.route,
        }
    ))
}

export function DisplayProject(
    projectId: ProjectMapType['id'], 
    props?: Pick<SVGComponentProps, "className">
) {
    const project = projectsMap.find(proj => proj.id === projectId)

    if (!project?.component) return null

    const ProjectComponent = project.component;
    return <ProjectComponent {...props} />
}


export function searchProject<K extends keyof ProjectMapType>(
    colName: K, 
    colVal: ProjectMapType[K]
) {
    return projectsMap.filter(proj => proj[colName] === colVal)
}