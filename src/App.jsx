import { useState } from "react";

import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

import { calculateInvestmentResults, formatter } from "./util/investment";

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

  function handleResults() {
    setResults(() => {
      let newResult = deriveResults(investInfo);
      return newResult;
    });
  }

  function handleInvestInfo(key, value) {
    setInvestInfo((oldInvestInfo) => {
      oldInvestInfo[key] = value;
      return oldInvestInfo;
    });
  }

  return (
    <>
      <Header />
      <main>
        <Calculator
          onValueEntered={handleInvestInfo}
          updateResults={handleResults}
        />
        <Results results={results} invested={investInfo.initialInvestment} />
      </main>
    </>
  );
}

export default App;
