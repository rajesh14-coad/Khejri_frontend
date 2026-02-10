import { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * LazyLoadWrapper - Uses IntersectionObserver to lazy load heavy components
 * Only loads the component when it's about to enter the viewport
 * 
 * @param {React.Component} component - The component to lazy load
 * @param {Object} props - Props to pass to the component
 * @param {string} fallback - Optional custom fallback component
 * @param {number} rootMargin - Distance before viewport to trigger load (default: 200px)
 */
const LazyLoadWrapper = ({
  component: Component,
  fallback = null,
  rootMargin = '200px',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true); // Ensure it only loads once
          }
        });
      },
      {
        rootMargin, // Load component 200px before it enters viewport
        threshold: 0.01, // Trigger when even 1% is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasLoaded, rootMargin]);

  const defaultFallback = (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-8 h-8 text-brand-neon animate-spin" />
      <span className="ml-3 text-gray-300">Loading component...</span>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-[200px]">
      {isVisible ? <Component {...props} /> : (fallback || defaultFallback)}
    </div>
  );
};

export default LazyLoadWrapper;
