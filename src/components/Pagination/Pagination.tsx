import React from 'react'
import style from './Pagination.module.css'

type PaginationType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    getNewUsers: (page: number) => void
}

export const Pagination = (props: PaginationType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []

    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    const mappedPages = pages.map((page) => {
        return (
            <span
                className={props.currentPage === page ? style.currentPage : ''}
                onClick={(event) => props.getNewUsers(page)}
            >
                {page}
            </span>
        )
    })

    return <div className={style.item}> {mappedPages}</div>
}
