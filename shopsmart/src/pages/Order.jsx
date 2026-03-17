
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Orders() {
  const { userInfo } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `${API}/api/orders`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userInfo) {
      fetchOrders();
    }
  }, [userInfo]);

  if (!userInfo) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Please login to view your orders.
      </div>
    );
  }

  return (
    <div className="p-6 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p>No orders yet 🧾</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="bg-white p-4 rounded shadow mb-4">
            <p className="font-semibold">
              Order ID: {order._id}
            </p>
            <p>Total: ₹{order.totalAmount}</p>
            <p>
              Items: {order.items.length}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;