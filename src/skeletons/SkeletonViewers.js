import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'

const SkeletonViewers = ({theme}) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-wrapper-viewers">
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
            </div>
            <Shimmer />
        </div>
    )
}



export default SkeletonViewers
