import { CallGet, CallPost } from "api"

export async function getOrders(data) {
  const res = await CallGet(`/api/vendor-orders/${data}`)
  return res
}
export async function getNewOrders(data) {
  const res = await CallGet(`/api/vendor-approval0/${data}`)
  return res
}
export async function getBookedService() {
  const res = await CallGet("/api/vendor-orders-service")
  return res
}

export async function updateApprovalRequest(data) {
  const res = await CallPost("/api/update-approval0",data)
  return res
}
export async function updateOrderStatus(data) {
  const res = await CallPost("/api/update-order-status",data)
  return res
}
