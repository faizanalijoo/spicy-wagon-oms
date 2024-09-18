# Data binding 

Here data used in each of page. Apis used etc., will be documents. 

## template 
### Page name 
description: `Manage Orders Page`
apis: 
- [api1 ](https://engine.spicywagon.in/dashboard/vendor/215/orders/2024-09-18/)
Give image of the view in images/ folder and use markdown image tag to dispaly 

Datatabinding 
- orderId : api1.data.results[0].order_id
- name : api1.data.results[0].data.customerDetails.customerName
- amount : api1.data.results[0].data.customerDetails.priceDetails.totalAmount
- paymentType : api1.data.results[0].payment_type
- customerMobile : api1.data.results[0].customer_mobile
- seat 1st half : api1.data.results[0].data.deliveryDetails.coach
- seat 2nd half : api1.data.results[0].data.deliveryDetails.berth
- train 1st half : api1.data.results[0].data.deliveryDetails.trainNo
- train 2nd half : api1.data.results[0].data.deliveryDetails.trainName
- station 1st half : api1.data.results[0].data.deliveryDetails.station
- station 2nd half : api1.data.results[0].station_code
- bookingDate : api1.data.results[0].data.bookingDate
- updatedAt : api1.data.results[0].updated_at
- status : api1.data.results[0].status
- remarks : api1.data.results[0].data.remarks
