// Type
import { mapImgUrl } from "../helpers/generalHelpers";
import { projectIdLib } from "./projectIds";

const projectId = projectIdLib["5"]

export const YtKaraokeImgUrls = [
    mapImgUrl(
        projectId,
        `thumbnail`,
        "YT Karaoke App home page"
    ),
    mapImgUrl(
        projectId,
        `player-page`,
        "The player page has recommended karaoke videos for next song to sing"
    ),
    mapImgUrl(
        projectId,
        "player-page-search-tab",
        "The player page has searching tab (for both local and online search) to avoid leaving from currently playing karaoke video"
    ),
    mapImgUrl(
        projectId,
        "player-page-ban-request",
        "Users can send ban request as long as they're logged in"
    ),
    mapImgUrl(
        projectId,
        "song-queue-feat",
        "Song queue for song reservations"
    ),
    mapImgUrl(
        projectId,
        "song-searching",
        "Song search to play the song in mind"
    ),
    mapImgUrl(
        projectId,
        `admin-page`,
        "Admin page for app content moderation"
    ),
    mapImgUrl(
        projectId,
        "sign-in-page",
        "Sign-in page for personalized experience"
    ),
]