import { useState } from "react";

import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";
import Results from "./components/Results.jsx";

import { calculateInvestmentResults } from "./util/investment";

const INVEST_INFO = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function deriveResults(paramObject) {
  return calculateInvestmentResults({ ...paramObject });
}

function App() {
  const [investInfo, setInvestInfo] = useState(INVEST_INFO);
  const [results, setResults] = useState([]);

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annnualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investInfo.duration > 0;
  function handleInput(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      // return a copy of the object instead of object itself to avoid passing by reference
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  function handleResults() {
    setResults(() => {
      let newResult = deriveResults(investInfo);
      return newResult;
    });
  }

  function handleInvestInfo(key, value) {
    setInvestInfo((oldInvestInfo) => {
      oldInvestInfo[key] = +value;
      return { ...oldInvestInfo };
    });
  }

  return (
    <>
      <Header />
      <main>
        <Calculator
          onValueEntered={handleInvestInfo}
          updateResults={handleResults}
          userInput={investInfo}
        />
        {inputIsValid ? (
          <Results
            inputData={investInfo}
            results={results}
            invested={investInfo.initialInvestment}
          />
        ) : (
          <p className="center">Please enter a duration greater than 0</p>
        )}
      </main>
    </>
  );
}

export default App;
