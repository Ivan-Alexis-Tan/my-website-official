import type { ProjectImgUrls, ProjectMapType } from "../types/types"

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function mapImgUrl(projId: ProjectMapType["id"], fileName: ProjectImgUrls['src'], caption?: ProjectImgUrls['caption']) {
    return { 
        src: `/project-img/${projId}/${fileName}.png`, 
        caption
    }
}