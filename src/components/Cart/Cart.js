import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //   const cartItems = (
  //     <ul className={classes["cart-items"]}>
  //       {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
  //         return <li>{item.name}</li>;
  //       })}
  //     </ul>
  //   );

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeCartItemHandler.bind(null, item.id)}
            onAdd={addCartItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems ? <button className={classes.button}>Order</button> : null}
      </div>
    </Modal>
  );
};

export default Cart;
