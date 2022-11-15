import { useSelector, useDispatch } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  setValue,
} from "./store/slices/counter";
import { useForm } from "./hooks/useForm";

function App() {
  const amountField = 'amount';
  const { counter } = useSelector((state) => state.counter);
  const { amount, onInputChange, onResetForm } = useForm({ [amountField]: "" });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {counter}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Drecrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <button onClick={() => dispatch(onResetForm())}>Reset formfield</button>
        <div className="form-field">
          <label htmlFor="amount">Value</label>
          <input
            type="number"
            id={amountField}
            name={amountField}
            value={amount}
            onChange={onInputChange}
          />
          <button onClick={() => dispatch(setValue(amount))}>Send</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
