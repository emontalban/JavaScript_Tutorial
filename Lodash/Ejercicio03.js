const orders = [
  { id: 1, total: 50 },
  { id: 2, total: 200 },
  { id: 3, total: 150 },
  { id: 4, total: 20 }
];

const orderMax = _.filter(orders, order => {
    return order.total > 100
})

const id = _.map(orderMax, order=>{
    return order.id
})

console.log(id)