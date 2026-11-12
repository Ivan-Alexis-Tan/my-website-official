// Next.js imports
import { useEffect, useRef, useState } from "react"

// Types
import type { ProjectImgUrls } from "../../types/types"

// Components
import IconArrowHeadLeft from "../svgs/icons/IconArrowHeadLeft"
import IconArrowHeadRight from "../svgs/icons/IconArrowHeadRight"
import IconClose from "../svgs/icons/IconClose"

type ImageCarouselProps = {
    imgUrls: ProjectImgUrls[]
    className?: string
}

export default function ImageCarousel({ imgUrls, className }: ImageCarouselProps) {
    // Component: Creates gallery of images that the projects may need as a sample view of the app

    const [showImage, setShowImage] = useState<number | null>(null)
    const [isScrollable, setIsScrollable] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null)

    const checkScrollable = () => {
        const container = containerRef.current;
        if (!container) return;

        setIsScrollable(container.scrollWidth > container.clientWidth);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(checkScrollable);

        observer.observe(container);
        checkScrollable();

        return () => observer.disconnect();
    }, [imgUrls]);

    function scroll(direction: "left" | "right") {
        const container = containerRef.current

        if (!container) return;

        container.scrollBy({
            left: direction === "right" ? 300 : -300,
            behavior: "smooth",
        });
    };
    
    return (
        <div className={`${className ?? ""} img-carousel min-w-0 w-full`}>
            {/* Image gallery */}
            <div className="relative min-w-0 w-full max-w-250 mx-auto">

                {/* Left navigation button */}
                {isScrollable
                    && <button
                        className="absolute left-0 top-0 bottom-0 z-(--z-intract) hover:bg-(--accent-border) hover:*:text-white rounded-tl-xl"
                        onClick={_ => scroll("left")}
                    >
                        <IconArrowHeadLeft className="w-7" />
                    </button>
                }

                {/* Scrollable image gallery */}
                <div
                    ref={containerRef}
                    className={`${!isScrollable && "justify-center"} carousel-gallery min-w-0 w-full flex items-start overflow-auto bg-(--social-bg) rounded-xl`}
                >
                    {/* Image cards */}
                    {imgUrls.map((img, idx) => (
                        <div
                            key={idx}
                            className="carousel-img-card max-w-100 my-1 mx-3 pb-1 shrink-0 flex flex-col border bg-(--bg-lucent) border-(--bg-lucent) hover:border-(--accent-border) rounded-xl hover:cursor-pointer"
                            onClick={_ => setShowImage(idx)}
                        >
                            <img src={img.src} className="w-100 h-50.5 rounded-xl mb-1" />

                            {img.caption && (
                                <p className="px-1 ">{img.caption}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right navigation button */}
                {isScrollable
                    && <button
                        className="absolute right-0 top-0 bottom-0 z-(--z-intract) hover:bg-(--accent-border) hover:*:text-white rounded-tr-xl"
                        onClick={_ => scroll("right")}
                    >
                        <IconArrowHeadRight className="w-7" />
                    </button>
                }
            </div>

            {/* Popup to open and show image */}
            {showImage !== null
                && (
                    // Popup Container
                    <OpenImagePopup imgUrls={imgUrls} showImage={showImage} showImageFn={setShowImage} />
                )
            }
        </div>
    )
}

type OpenImagePopupProps = {
    imgUrls: ImageCarouselProps["imgUrls"]
    showImage: number
    showImageFn: React.Dispatch<React.SetStateAction<number | null>>
}

const OpenImagePopup = ({ imgUrls, showImage, showImageFn }: OpenImagePopupProps) => {
    // Component: A popup view of opening an image

    function nextImage() {
        showImageFn(p => {
            const nextIdx = (p as number) + 1

            if (nextIdx % imgUrls.length !== 0) return nextIdx
            return 0
        })
    }

    function prevImage() {
        showImageFn(p => {
            const prevIdx = (p as number) - 1
            
            if (prevIdx < 0) return (imgUrls.length - 1)
            return prevIdx
        })
    }
    return (
        <div className="fixed w-full h-full top-0 left-0 z-(--z-popup) flex items-center justify-center bg-(--bg-lucent)">
            {/* Clickable container to close the popup image */}
            <div className="w-full h-full" 
                onClick={_ => showImageFn(null)}
            />
            
            {/* Popup image contents container */}
            <div className="fixed min-w-[320px] max-w-250 max-h-155 w-full h-[90%] [&>:not(:first-child)]:mx-1 bg-black rounded-xl overflow-auto">
                {/* Close button */}
                <div className="pl-3 sticky top-0 z-70 flex bg-(--bg-lucent) justify-between">
                    <p>{showImage + 1}/{imgUrls.length}</p>

                    <button className="hover:*:text-red-400"
                        onClick={_ => showImageFn(null)}
                    >
                        <IconClose kind="small" className="w-7 text-white" />
                    </button>
                </div>
                
                {/* Image UI */}
                <div className="relative">
                    <button
                        className="absolute left-0 top-0 bottom-0 z-(--z-intract) hover:bg-(--accent-border) hover:*:text-white rounded-l-xl"
                        onClick={prevImage}
                    >
                        <IconArrowHeadLeft className="w-7" />
                    </button>

                    <img 
                        src={imgUrls[showImage].src} 
                        alt={imgUrls[showImage].caption ?? "Project image"} 
                        className="rounded-xl"
                    />

                    <button
                        className="absolute right-0 top-0 bottom-0 z-(--z-intract) hover:bg-(--accent-border) hover:*:text-white rounded-r-xl"
                        onClick={nextImage}
                    >
                        <IconArrowHeadRight className="w-7" />
                    </button>
                </div>

                {/* Caption Display */}
                {imgUrls[showImage].caption 
                    && <p className="mt-3">{imgUrls[showImage].caption}</p>
                }
            </div>
        </div>
    )
}