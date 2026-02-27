import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    // Use useLayoutEffect for instant scrolling before the browser paints
    // or useEffect for a slight delay (less visual jank with useLayoutEffect)
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Scrolls to the top left corner of the document
        // window.scrollTo(0, 0);
        // Or, for smooth scrolling:
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]); // This effect runs whenever the pathname changes

    return null; // This component doesn't render anything to the DOM
}

export default ScrollToTop;
