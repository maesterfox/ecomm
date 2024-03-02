function ShoppingCart({ cartItems, onRemove }) {
  return (
    <div className="shopping-cart">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
      <p>
        Total: $
        {cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
    </div>
  );
}

export default ShoppingCart;
