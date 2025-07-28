import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  lazy = true,
  placeholder = 'blur',
  quality = 85,
  sizes,
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate WebP and fallback sources
  const generateSources = (originalSrc) => {
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop().toLowerCase();
    
    return {
      webp: `${basePath}.webp`,
      original: originalSrc,
      isOptimizable: ['jpg', 'jpeg', 'png'].includes(extension)
    };
  };

  const sources = generateSources(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority) {
      setCurrentSrc(src);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [src, lazy, priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Placeholder component
  const Placeholder = () => (
    <div 
      className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
      style={{ width, height }}
    >
      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    </div>
  );

  // Error component
  const ErrorFallback = () => (
    <div 
      className={`${className} bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300`}
      style={{ width, height }}
    >
      <span className="text-gray-500 text-sm">Image failed to load</span>
    </div>
  );

  if (hasError) {
    return <ErrorFallback />;
  }

  if (!currentSrc) {
    return <Placeholder />;
  }

  return (
    <picture>
      {sources.isOptimizable && (
        <source srcSet={sources.webp} type="image/webp" />
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
