import rates from "../assets/rates";

const options = Object.keys(rates);

const Field = ({ field, setField }) => {
  return (
    <div className="field">
      <input
        type="number"
        value={field.value}
        onChange={(e) => {
          const newValue = e.target.valueAsNumber;
          setField({ ...field, value: newValue >= 0 ? newValue : 0 });
        }}
      />

      <select
        value={field.currency}
        onChange={(e) => setField({ ...field, currency: e.target.value })}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Field;
