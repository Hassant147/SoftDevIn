import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazySection = ({ children, threshold = 0.1, triggerOnce = true, minHeight = '50vh' }) => {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce,
        rootMargin: '200px 0px', // Pre-load 200px before viewport
    });

    return (
        <div ref={ref} style={{ minHeight }}>
            {inView ? children : null}
        </div>
    );
};

export default LazySection;
