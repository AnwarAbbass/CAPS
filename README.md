# CAPS

## Deployment Test
- Author: Anwar Abbass
tests report:[test]()
front-end:[heroku]()

## Setup
- .env requirements
  - STORE_NAME 

## Running the app
- node caps.js

Returns Object

```
Event {
  event: 'pickup',
  time: '2021-05-30T19:08:36.353Z',
  payload: {
    store: 'flowers',
    orderID: 'b94f8b9e-6a23-4b44-9f23-03b35be767c9',
    customer: 'Miss Clint Emmerich',
    address: 'Naderport, NJ'
  }
}
DRIVER: picked up b94f8b9e-6a23-4b44-9f23-03b35be767c9
Event {
  event: 'in-transit',
  time: '2021-05-30T19:08:37.362Z',
  payload: {
    store: 'flowers',
    orderID: 'b94f8b9e-6a23-4b44-9f23-03b35be767c9',
    customer: 'Miss Clint Emmerich',
    address: 'Naderport, NJ'
  }
}
DRIVER: delivered up b94f8b9e-6a23-4b44-9f23-03b35be767c9
VENDOR: Thank you for delivering b94f8b9e-6a23-4b44-9f23-03b35be767c9
Event  {
  event: 'delivered',
  time: '2021-05-30T19:08:37.362Z',
  payload: {
    store: 'flowers',
    orderID: 'b94f8b9e-6a23-4b44-9f23-03b35be767c9',
    customer: 'Miss Clint Emmerich',
    address: 'Naderport, NJ'
  }
}
```
## Tests
- Unit Tests: npm test

## UML
![]()