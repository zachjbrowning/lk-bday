import type { NextPage } from 'next';
import { ReactNode, useEffect } from 'react';
import styles from "./Carousel.module.scss";

type CarouselProps = {
    children : Array<ReactNode>;
}


// Apply animation to each individual slide, and inline apply a physical offset / delay to separate them
const Carousel = ({children}: CarouselProps) => {
    
    useEffect(() => {
        document.documentElement.style.setProperty("--recent-count", `${children.length}`)
    }, [])

    const delaySegment = 20 / children.length

    return <div className={styles.slider}>
        <div className={styles.slideTrack}>
            {
                children.map((child,i) => <div style={{animationDelay: `-${i * delaySegment}s` }} className={styles.slide} key={i}>
                        {child}
                    </div>)
            }
        </div>
    </div>
}

export default Carousel;