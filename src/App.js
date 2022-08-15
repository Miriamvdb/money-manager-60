import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, reset, withdraw } from "./store/balance/slice";
import { selectBalance } from "./store/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={(event) => setCustomAmount(parseInt(event.target.value))}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(deposit(customAmount));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
