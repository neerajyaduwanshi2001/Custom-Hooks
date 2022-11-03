import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import { setUserData } from 'redux/user'

import { CallGet } from 'api'
import { getUserDetails } from 'api/user'

export default function useAuth() {
// console.log(token)
    const token = useSelector(state => state.login.token);
    const [isLoading, setLoading] = useState(true)
    const { push: redirectTo } = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        const uid = localStorage.getItem('uid')

        console.log("token",token)
        console.log("uid",uid)
        const getInfo = async () => {
            const info = await getUserDetails(uid)
            if (info.status === "inactive") {
                redirectTo('/vendor/login')
            }
            else {
                const data = info.data[0]
                console.log("data",data)
                console.log("info",info)
                dispatch(setUserData({ role: data.role, name: data.name, email: data.email, phone: data.number, id: uid, avatar: data.profile_picture }))
                setLoading(false)
            }
        }
        getInfo()
    }, [])

    return isLoading
}