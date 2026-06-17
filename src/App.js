import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [coupon, setCoupon] = useState("");

  const addItem = () => {
    if (
      name.trim() === "" ||
      Number(price) <= 0 ||
      Number(quantity) <= 0
    ) {
      alert("Please enter valid details");
      return;
    }

    const newItem = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    setItems([...items, newItem]);

    setName("");
    setPrice("");
    setQuantity("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter(
      (_, i) => i !== index
    );
    setItems(updatedItems);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let discount =
    subtotal > 1000 ? subtotal * 0.1 : 0;

  if (coupon === "SAVE10") {
    discount += subtotal * 0.1;
  }

  const taxableAmount = subtotal - discount;

  const gst = taxableAmount * 0.18;

  const finalAmount = taxableAmount + gst;

  return (
    <div className="container">
      <h1>Smart Checkout Billing System</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={addItem}>
          Add Item
        </button>

        <button onClick={() => setItems([])}>
          Clear Cart
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td>

              <td>
                <button
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h2>Bill Summary</h2>

        <input
          type="text"
          placeholder="Coupon Code (SAVE10)"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        <p>
          Subtotal: ₹{subtotal.toFixed(2)}
        </p>

        <p>
          Discount: ₹{discount.toFixed(2)}
        </p>

        <p>
          GST (18%): ₹{gst.toFixed(2)}
        </p>

        <h3>
          Final Amount: ₹{finalAmount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default App;