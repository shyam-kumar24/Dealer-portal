const orders = [
  {
    id: 101,
    date: "2024-01-15",
    items: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 }
    ],
    total: 5400,
    status: "Delivered"
  },
  {
    id: 102,
    date: "2024-02-10",
    items: [
      { productId: 2, quantity: 1 }
    ],
    total: 2999,
    status: "Shipped"
  }
];

export default orders;
