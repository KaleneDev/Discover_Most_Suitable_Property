import { useState, useEffect } from "react";
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
        } else {
            media.addListener(listener);
        }

        return () => {
            if (typeof media.removeEventListener === "function") {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(listener);
            }
        };
    }, [matches, query]);

    return matches;
}
export const useIsSmall = () => useMediaQuery("(min-width: 480px)");
export const useIsMedium = () => useMediaQuery("(min-width: 768px)");
export const useIsLarge = () => useMediaQuery("(min-width: 1024px)");