export default function Calculator({ onValueEntered, updateResults }) {
  function handleChange(event) {
    onValueEntered(event.target.id, event.target.value);
    updateResults();
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          id={"initialInvestment"}
          label={"INITIAL INVESTMENT"}
          onChange={handleChange}
        />
        <InputField
          id={"annualInvestment"}
          label={"ANNUAL INVESTMENT"}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <InputField
          id={"expectedReturn"}
          label={"EXPECTED RETURN"}
          onChange={handleChange}
        />
        <InputField
          id={"duration"}
          label={"DURATION"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function InputField({ label, id, onChange }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="number" min={0} id={id} onChange={onChange} />
    </p>
  );
}
