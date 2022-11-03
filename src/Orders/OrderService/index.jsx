import { useState } from "react"

import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { Table, PlusButton, Button, ColorSvg } from "ant"

import { columns, data } from "./data"

import { DataTable } from "./styles"

import { ReactComponent as ArchiveIcon } from "assets/icons/Archive.svg"
import { useEffect } from "react"

export default function DT({ setActiveComp ,newOrders,acceptOrders}) {
    const [active, setActive] = useState(0)
  
    usePage("Booked Services")
    return (
        <Container>
            <div>
                <TopBar
                    activeItem={active}
                    breadcrumb={{
                        Orders: () => setActiveComp("orders"),
                        "Order Requests": () => {},
                    }}
                    menus={[
                        {
                            title: "Day",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Week",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Month",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "Year",
                            onChange: i => {
                                setActive(i)
                            },
                        },
                        {
                            title: "All Time",
                            onChange: i => {
                                setActive(i)
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
                />
                <DataTable>
                    <Table
                        pagination={{
                            pageSize: data.length + 1,
                            hideOnSinglePage: true,
                        }}
                        columns={columns(acceptOrders)}
                        dataSource={newOrders}
                    />
                </DataTable>
            </div>
            <div></div>
        </Container>
    )
}
