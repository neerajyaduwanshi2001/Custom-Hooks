import { Image, ActionButtons } from "./styles"
import { Button } from "ant"

export const columns = (acceptOrders) => [
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: path => <Image src={path} />,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
    },
    {
        title: "Delivery",
        dataIndex: "free",
        key: "free",
        render: free=>{
            return(
                <p> Free Delivery</p>
            )
        }
    },
    // {
    //     title: "",
    //     dataIndex: "orderproductsId",
    //     key: "orderproductsId",

    //     render: orderproductsId => {
    //         return (
    //             <ActionButtons>
    //                 <Button
    //                 type='primary' 
    //                 style={{color:"green"}} 
    //                 onClick={ v => acceptOrders(orderproductsId)}
    //                 >Accept
    //                 </Button>
    //                 <Button type='primary' danger>
    //                     Decline
    //                 </Button>
    //             </ActionButtons>
    //         )
    //     },
    // },
]

export const data = [
    {
        key: "1",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Free",
        action: 1,
    },
    {
        key: "2",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Charges",
        action: 1,
    },
    {
        key: "3",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Charges",
        action: 1,
    },
    {
        key: "4",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Charges",
        action: 1,
    },
    {
        key: "5",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Charges",
        action: 1,
    },
    {
        key: "6",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        price: "QAR 120",
        delivery: "Charges",
        action: 1,
    },
]
