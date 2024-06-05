export default function Calculator({
  onValueEntered,
  updateResults,
  userInput,
}) {
  function handleChange(event) {
    onValueEntered(event.target.id, event.target.value);
    updateResults();
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          id={"initialInvestment"}
          label={"INITIAL INVESTMENT"}
          onChange={handleChange}
          value={userInput.initialInvestment}
        />
        <InputField
          id={"annualInvestment"}
          label={"ANNUAL INVESTMENT"}
          onChange={handleChange}
          value={userInput.annualInvestment}
        />
      </div>
      <div className="input-group">
        <InputField
          id={"expectedReturn"}
          label={"EXPECTED RETURN"}
          onChange={handleChange}
          value={userInput.expectedReturn}
        />
        <InputField
          id={"duration"}
          label={"DURATION"}
          onChange={handleChange}
          value={userInput.duration}
        />
      </div>
    </section>
  );
}

function InputField({ label, id, onChange, value }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        min={0}
        id={id}
        onChange={onChange}
        value={value}
        required
      />
    </p>
  );
}
