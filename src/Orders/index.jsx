import { getOrders,getNewOrders, updateApprovalRequest, updateOrderStatus, getBookedService } from "api/orders"
import { useEffect } from "react"
import { useState } from "react"
import DataTable from "./DataTable"
import OrderRequests from "./OrderRequests"
import OrderService from "./OrderService"

export default function Orders() {
    const [activeComp, setActiveComp] = useState("orders")
    const [orders, setOrders] = useState([])
    const [counts, setCounts] = useState([])
    const [newOrders, setNewOrders] = useState([])
    const [bookedServices, setBookedServices] = useState([])

    const getNewOrderss = async (e) =>{
        console.log(e,"neworder")
        const res = await getNewOrders(e)
        if (res.status === "success") {
            setNewOrders(res.data)
        }else if(res.message === "Record Not Found") {
            setNewOrders([])
          }
    }
    const makeCall = async (e) => {
        console.log("sssss" , e)
        const res = await getOrders(e)
        if (res.status === "success") {
            setOrders(res.data)
            setCounts(res.counts)
        }else if(res.message === "Record Not Found") {
            setOrders([])
            setCounts(0)
          }
    }
    const getBookedServices = async (e) =>{
        console.log(e,"newServices")
        const res = await getBookedService()
        if (res.status === "success") {
            setBookedServices(res.data)
        }
    }
    useEffect(() => {
        makeCall("alltime")
        getNewOrderss("alltime")
        getBookedServices()
    }, [])
    const acceptOrders = async (e) =>{
        console.log("accept",e)
        const res = await updateApprovalRequest({orderproductsId: e ,isVendorApproval : "1"})
        if (res.status === "success") {
            setOrders(res.data)
            setActiveComp("orders")
            getNewOrderss("alltime")
            makeCall("alltime")
        }
    }
    const updateStatus = async (e ,v ) =>{
        console.log("status update",e)
        const res = await updateOrderStatus({id: e,status : v})
        if (res.status === "active") {
        makeCall("alltime")
        }
    }
    const filtersOrderByDate = async date => {
        try {
          console.log(date)
          makeCall(date)
        } catch (error) { }
      }
      const filtersNewOrderByDate = async date => {
        try {
            console.log(date)
          getNewOrderss(date)
        } catch (error) { }
      }
    switch (activeComp) {
        case "orders":
            return <DataTable handleDateFilter={filtersOrderByDate} setActiveComp={setActiveComp} orders={orders} counts={counts} UpdateStatus={updateStatus} />
        case "requests":
            return <OrderRequests setActiveComp={setActiveComp} handleDateFilter={filtersNewOrderByDate} newOrders={newOrders} acceptOrders={acceptOrders}/>
        case "orderService":
            return <OrderService setActiveComp={setActiveComp} newOrders={bookedServices} acceptOrders={acceptOrders} />
                
    }
}
