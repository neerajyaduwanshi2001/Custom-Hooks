import axios from "axios"
import { useSelector } from "react-redux";

const token = localStorage.getItem('uid');
console.log(token)
export async function CallApi(f) {
  try {
    const response = await f()
    return response.data
  } catch (e) {
    console.log(e)
    if (axios.isAxiosError(e)) {
      const res = e.response?.data || { status: "inactive" }
      return res
    } else {
      console.log(e)
      return { status: "inactive", code: "client_err" }
    }
  }
}

export async function CallPost(url, payload, headers) {
  const response = await CallApi(() =>
    axios.post(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { 
        // ...headers, "Content-Type": "application/json"
        "Authorization": `Bearer ${token}`
       },
    })
  )
console.log("response",response)
  return response
}
export async function CallPut(url, payload, headers) {
  const response = await CallApi(() =>
    axios.put(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { 
        // ...headers, "Content-Type": "application/json"
        "Authorization": `Bearer ${token}`
       },
    })
  )
  return response
}

export async function CallGet(url,_token) {
  const response = await CallApi(() =>
    axios.get(`${process.env.REACT_APP_HOST}${url}`,{
      headers: { 
        "Authorization": `Bearer ${token}`
       },
    })
  )

  return response
}