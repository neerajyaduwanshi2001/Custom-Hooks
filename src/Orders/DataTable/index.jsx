import { useState, useEffect } from "react"
import Heading from "ant/Heading"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button, ColorSvg } from "ant"

import { columns, data } from "./data"

import { DataTable } from "./styles"

import { ReactComponent as ArchiveIcon } from "assets/icons/Archive.svg"
import DeliveryStatus from "../Widgets/DeliveryStatus"
import OrderDetails from "../../../components/OrderDetails"
export default function DT({ handleDateFilter, setActiveComp ,orders , UpdateStatus ,counts}) {

    const [active, setActive] = useState(0)
    const [completed, setCompleted] = useState(0)

    useEffect(() => {
        setCompleted(100)
    }, [])
    usePage("Accepted Orders")
    return (
        <Container>
            <div>
            <TopBar
          activeItem={active}
          // heading='21 Sep 2022'
          menus={[
            {
              title: "Day",
              key: "daily",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Week",
              key: "weekly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Month",
              key: "monthly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "Year",
              key: "yearly",
              onChange: i => {
                handleDateFilter(i)
              },
            },
            {
              title: "All Time",
              key: "alltime",
              onChange: i => {
                handleDateFilter(i)
              },
            },
          ]}
        />
                <FiltersBar
                    onSearchChange={s => console.log(s)}
                    filters={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["New", "Old"],
                    }}
                    sortBy={{
                        defaultValue: "All",
                        onChange: f => console.log(f),
                        filters: ["All", "New", "Old"],
                    }}
                    otherFilters={
                        <>
                        <Button
                            type='secondary'
                            onClick={() => setActiveComp("requests")}
                            style={{
                                height: "54px",
                                display: "inline-flex",
                                transform: "translateY(4px)",
                            }}
                            icon={
                                <ColorSvg color='primary'>
                                    <ArchiveIcon
                                        style={{
                                            marginRight: "6px",
                                            transform: "translateY(3px)",
                                        }}
                                    />
                                </ColorSvg>
                            }>
                            Order Requests
                        </Button>
                         <Button
                         type='secondary'
                         onClick={() => setActiveComp("orderService")}
                         style={{
                             height: "54px",
                             display: "inline-flex",
                             transform: "translateY(4px)",
                         }}
                         icon={
                             <ColorSvg color='primary'>
                                 <ArchiveIcon
                                     style={{
                                         marginRight: "6px",
                                         transform: "translateY(3px)",
                                     }}
                                 />
                             </ColorSvg>
                         }>
                         Services Order
                     </Button>
                     </>
                    }
                />
                <OrderDetails data={orders} UpdateStatus={UpdateStatus} />
            </div>
            <div>
                <Heading
                    size='32px'
                    style={{ marginTop: "10px", marginBottom: "37px" }}>
                    Activity Widgets
                </Heading>
                <DeliveryStatus orders={counts} />
            </div>
        </Container>
    )
}
