import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ results, inputData }) {
  //calculate results
  const resultsArr = calculateInvestmentResults({ ...inputData });
  const initialInvestment =
    resultsArr[0].valueEndOfYear -
    resultsArr[0].interest -
    resultsArr[0].annualInvestment;

  return (
    <div className="center">
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {resultsArr.map((result, index) => {
            return (
              <TableRow
                key={index}
                result={result}
                initialInvestment={initialInvestment}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ result, initialInvestment }) {
  const totalInterest =
    result.valueEndOfYear -
    result.annualInvestment * result.year -
    initialInvestment;

  const totalAmountInvested = result.valueEndOfYear - totalInterest;

  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.valueEndOfYear)}</td>
      <td>{formatter.format(result.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}
