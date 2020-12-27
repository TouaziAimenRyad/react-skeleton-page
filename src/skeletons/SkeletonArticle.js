import React from 'react'
import { Shemer } from './Shemer';
import SkeletonElement from "./SkeletonElement";
 const SkeletonArticle = ({theme}) => {
     const themeClass=theme||'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>

            </div>
            <Shemer></Shemer>
        </div>
    )
}
export default SkeletonArticle;