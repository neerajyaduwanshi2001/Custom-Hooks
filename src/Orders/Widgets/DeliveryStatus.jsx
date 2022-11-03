import styled from "styled-components"

import WidgetBox from "components/WidgetBox"
import ProgressBar from "../../../components/ProgressBar"
export default function DeliveryStatus({orders}) {
    console.log("orders DeliveryStatus",orders)
    console.log(orders)
    let TotalOrder = orders.TotalCOunt
    let PendingOrder = orders.PlacedCount
    let DeliveryOrder = orders.DeliverCount
    let CancelledOrder = orders.CanceledCount
    
    console.log(TotalOrder)
    console.log(parseInt(TotalOrder))
    let PercentPendingOrder = parseInt(PendingOrder)  * 100 / parseInt(TotalOrder)  
    let PercentCancelledOrder = parseInt(CancelledOrder) * 100 / parseInt(TotalOrder)  
    let PercentDeliveryOrder = parseInt(DeliveryOrder) * 100 / parseInt(TotalOrder)  

    console.log(parseInt(PercentCancelledOrder),PercentDeliveryOrder,PercentPendingOrder)

    return (
        <WidgetBox heading='Deliveries Status'>
            <Wrapper>
                <ProgressBar
                    bgcolor={"assetSun"}
                    completed={PercentPendingOrder}
                    items={PendingOrder}
                    title={"Pendings"}
                />
                <ProgressBar
                    bgcolor={"assetTeal"}
                    completed={PercentDeliveryOrder}
                    items={DeliveryOrder}
                    title={"Delivered"}
                />
                <ProgressBar
                    bgcolor={"assetRed"}
                    completed={PercentCancelledOrder}
                    items={CancelledOrder}
                    title={"Canceled"}
                />
            </Wrapper>
        </WidgetBox>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
