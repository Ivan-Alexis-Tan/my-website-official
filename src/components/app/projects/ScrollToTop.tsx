import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Auto scrolling to the top in projects page each time project to view changes

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname])

    return null;
}