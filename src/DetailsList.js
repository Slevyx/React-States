import "./styles.css";
export default function DetailsList({ elementDetails }) {
  return (
    <>
      <div className="title">Details</div>
      <ul className="list">
        <li className="details">
          <table cellSpacing="20px">
            <tr className="fields">
              <td>Name</td>
              <td>Alpha2Code</td>
              <td>Alpha3Code</td>
            </tr>
            <tr>
              <td>{elementDetails.name}</td>
              <td>{elementDetails.alpha2Code}</td>
              <td>{elementDetails.alpha3Code}</td>
            </tr>
          </table>
        </li>
      </ul>
    </>
  );
}
