# Data binding 

Here data used in each of page. Apis used etc., will be documents. 

## template 
### Page name 
description: `Manage Orders Page`
apis: 
- [ordersByDate](https://engine.spicywagon.in/dashboard/vendor/215/orders/2024-09-18/)
Give image of the view in images/ folder and use markdown image tag to dispaly 

Data Binding for Orders By Date
- orderId : ordersByDate.data.results[0].order_id
- name : ordersByDate.data.results[0].data.customerDetails.customerName
- amount : ordersByDate.data.results[0].data.customerDetails.priceDetails.totalAmount
- paymentType : ordersByDate.data.results[0].payment_type
- customerMobile : ordersByDate.data.results[0].customer_mobile
- seat 1st half : ordersByDate.data.results[0].data.deliveryDetails.coach
- seat 2nd half : ordersByDate.data.results[0].data.deliveryDetails.berth
- train 1st half : ordersByDate.data.results[0].data.deliveryDetails.trainNo
- train 2nd half : ordersByDate.data.results[0].data.deliveryDetails.trainName
- station 1st half : ordersByDate.data.results[0].data.deliveryDetails.station
- station 2nd half : ordersByDate.data.results[0].station_code
- bookingDate : ordersByDate.data.results[0].data.bookingDate
- updatedAt : ordersByDate.data.results[0].updated_at
- status : ordersByDate.data.results[0].status
- remarks : ordersByDate.data.results[0].data.remarks


- [orderDetails](https://engine.spicywagon.in/dashboard/vendor/215/order/1815140564/details)

Data Binding for Order Details
- orderId: orderDetails.order_id
- outletName: orderDetails.outlet_name
- restaurantContact: orderDetails.data?.aggregatorDetails?.customerCareNumbers[0] -- this might be wrong
- gstNumber: Need this field
- aggregatorName: orderDetails.data?.aggregatorDetails?.name
- aggregatorContact: orderDetails.data?.aggregatorDetails?.customerCareNumbers[0]
- deliveryDate: orderDetails.data?.deliveryDate
- customerName: orderDetails.data?.customerDetails?.customerName
- customerContact: orderDetails.customer_mobile
- deliveryStation: orderDetails.data?.deliveryDetails?.station
- coach: orderDetails.data?.deliveryDetails?.coach
- berth: orderDetails.data?.deliveryDetails?.berth
- trainNo: orderDetails.data?.deliveryDetails?.trainNo
- trainname: orderDetails.data?.deliveryDetails?.trainName
- totalAmount: orderDetails.data?.priceDetails?.totalAmount
- gst: orderDetails.data?.priceDetails?.gst
- deliveryCharges: orderDetails.data?.priceDetails?.deliveryCharges
- discountAmount: orderDetails.data?.priceDetails?.discountAmount
- amountPayable: orderDetails.data?.priceDetails?.amountPayable