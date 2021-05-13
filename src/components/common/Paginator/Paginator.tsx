import classes from "./Paginator.module.css"
import React from "react";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

   return  <div>
       {pages.map((p) => {
           return <span key={p} className={currentPage === p ? classes.selectedPage : ''}
                        onClick={() => {
                            onPageChanged(p)
                        }}>{p}</span>
       })}
   </div>
}
