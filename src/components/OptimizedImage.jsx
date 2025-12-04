/**
 * OptimizedImage Component
 * 
 * A performance-optimized image component that:
 * - Uses lazy loading for below-the-fold images
 * - Preserves layout space to prevent CLS
 * - Uses async decoding for non-blocking rendering
 */
import React from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    aspectRatio,
    objectFit = 'cover',
    ...props
}) => {
    // Calculate aspect ratio for layout preservation
    const paddingTop = aspectRatio
        ? `${(1 / aspectRatio) * 100}%`
        : height && width
            ? `${(height / width) * 100}%`
            : undefined;

    const imageStyle = {
        objectFit,
        ...(aspectRatio || (width && height)
            ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
            : {}),
    };

    const wrapperStyle = paddingTop
        ? { position: 'relative', paddingTop, overflow: 'hidden' }
        : {};

    const imgElement = (
        <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            width={width}
            height={height}
            className={className}
            style={imageStyle}
            {...props}
        />
    );

    // If we have dimensions, wrap in a container to preserve layout
    if (paddingTop) {
        return (
            <div style={wrapperStyle} className="overflow-hidden">
                {imgElement}
            </div>
        );
    }

    return imgElement;
};

export default OptimizedImage;
