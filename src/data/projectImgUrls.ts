// Type
import { mapImgUrl } from "../helpers/generalHelpers";
import { projectIdLib } from "./projectIds";

export const YtKaraokeImgUrls = [
    mapImgUrl(
        projectIdLib["5"],
        `thumbnail`,
        "YT Karaoke App home page"
    ),
    mapImgUrl(
        projectIdLib["5"],
        `player-page`,
        "The player page has recommended karaoke videos for next song to sing"
    ),
    mapImgUrl(
        projectIdLib["5"],
        "player-page-search-tab",
        "The player page has searching pane to avoid exiting from on going karaoke video"
    ),
    mapImgUrl(
        projectIdLib["5"],
        `admin-page`,
        "Admin page for app content moderation"
    ),
    mapImgUrl(
        projectIdLib["5"],
        "sign-in-page",
        "Sign-in page for those who want personalized experience"
    )
]