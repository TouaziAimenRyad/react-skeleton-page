import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = ({theme}) => {
    const themeClass=theme||'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElement type='avatar'></SkeletonElement>

                </div>
                <div>
                    <SkeletonElement type="title"></SkeletonElement>
                    <SkeletonElement type="text"></SkeletonElement>
                    <SkeletonElement type="text"></SkeletonElement>
                </div>
            </div>
            
        </div>
    )
}
 
export default SkeletonProfile;