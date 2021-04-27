import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'

const SkeletonRecommends = ({theme}) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-wrapper-recommends">
                <SkeletonElement type="thumbnail-quad" />
                <SkeletonElement type="thumbnail-quad" />
                <SkeletonElement type="thumbnail-quad" />
                <SkeletonElement type="thumbnail-quad" />
            </div>
            <Shimmer />
        </div>
    )
}



export default SkeletonRecommends
