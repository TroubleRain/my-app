export const booksFetching = () => {
    return {
        type: 'BOOKS_FETCHING'
    }
}

export const booksFetched = (heroes) => {
    return {
        type: 'BOOKS_FETCHED',
        payload: heroes
    }
}

export const booksFetchingError = () => {
    return {
        type: 'BOOKS_FETCHING_ERROR'
    }
}