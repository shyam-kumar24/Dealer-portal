import orders from "../store/orderData"; // or define inside component

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      <div className="space-y-4">
        {orders.map(order => (
          <div
            key={order.id}
            className="p-4 border rounded-xl shadow-sm bg-white"
          >
            <p><strong>Order ID:</strong> #{order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
