import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { setPageTitle } from 'redux/app'


export default function usePage(title) {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setPageTitle({ pageTitle: title }))

    }, [title])

}