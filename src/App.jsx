import { useState } from "react";

import "./App.css";
import Field from "./components/Field";
import { convert, getRateFromCurrency } from "./utils/convert";

function App() {
  const [field1, setField1] = useState({ value: 0, currency: "EUR" });
  const [field2, setField2] = useState({ value: 0, currency: "USD" });

  const convert1to2 = () => {
    const result = convert(
      field1.value,
      getRateFromCurrency(field1.currency),
      getRateFromCurrency(field2.currency)
    );
    setField2({ ...field2, value: result.toFixed(2) });
  };

  const convert2to1 = () => {
    const result = convert(
      field2.value,
      getRateFromCurrency(field2.currency),
      getRateFromCurrency(field1.currency)
    );
    setField1({ ...field1, value: result.toFixed(2) });
  };

  return (
    <div className="app">
      <header>
        <h1>💵 Currency Converter 💵</h1>
        <p>
          {field1.currency} vs. {field2.currency}
        </p>
      </header>

      <main>
        <Field field={field1} setField={setField1} />

        <div className="buttons">
          <button onClick={convert1to2}>1 to 2</button>
          <button onClick={convert2to1}>2 to 1</button>
        </div>

        <Field field={field2} setField={setField2} />
      </main>
    </div>
  );
}

export default App;
