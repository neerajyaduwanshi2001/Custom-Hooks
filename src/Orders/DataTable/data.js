import { Image, StatusColor } from "./styles"
import { ColorSvg } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"

function getOrderStatus(status) {
    if (status === 0) return "Canceled"
    else if (status === 1) return "Pending"
    else if (status === 2) return "Delivered"
}

export const columns = [
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
        title: "Coupon",
        dataIndex: "coupon",
        key: "coupon",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: status => {
            return (
                <StatusColor className='allow-background' status={status}>
                    {getOrderStatus(status)}
                </StatusColor>
            )
        },
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Edit",
        dataIndex: "edit",
        key: "edit",
        render: orderId => {
            return (
                <ColorSvg>
                    <DownArrowIcon />
                </ColorSvg>
            )
        },
    },
]

export const data = [
    {
        key: "1",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 1,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "2",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 2,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "3",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 0,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "4",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 2,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "5",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 1,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "6",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 1,
        price: "QAR 120",
        edit: 1,
    },
    {
        key: "7",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        coupon: "CD012",
        status: 2,
        price: "QAR 120",
        edit: 1,
    },
]
