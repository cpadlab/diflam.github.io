import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export const pauseScrolling = () => {
    if (lenisInstance) {
        lenisInstance.stop();
    }
};

export const resumeScrolling = () => {
    if (lenisInstance) {
        lenisInstance.start();
    }
};


export const SmoothScroll = ({ _lerp=0.07 }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({ lerp: _lerp });
        lenisInstance = lenis;
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
            lenis.destroy();
            lenisInstance = null;
        };
    }, [_lerp]);

    return null;
};
