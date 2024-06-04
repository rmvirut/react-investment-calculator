import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ results, invested }) {
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
          {results.map((result, index) => {
            return (
              <TableRow
                key={index}
                result={result}
                invested={() => formatter.format(invested)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ result, invested }) {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.interest)}</td>
      <td>{formatter.format(result.valueEndOfYear)}</td>
      <td>{formatter.format(result.annualInvestment)}</td>
      <td>{invested}</td>
    </tr>
  );
}
