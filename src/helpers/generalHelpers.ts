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

export function mapDateCreated(from: Date, until?: Date) {
    // Helps map created date and completed date via object

    return { from, until: until ?? "Present" }
}

export function alphanumericDate(date: Date | string, includeDay: boolean = true) {
    // Converts an object into date "month day, year"
    // Example: "2001/01/20" turns to "January 1, 2001"

    return new Intl.DateTimeFormat("en-US", {
        month: "long", 
        ...(includeDay && {day: "numeric"}),
        year: "numeric"
    }).format(date instanceof Date ? date : new Date(date))
}