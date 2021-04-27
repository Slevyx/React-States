import "./styles.css";
import CloseOperation from "./CloseOperation";
export default function State({ index, element, elementDeletion, getDetails }) {
  return (
    <li
      className={index % 2 === 0 ? "element_one" : "element_two"}
      key={element.key}
    >
      <table cellSpacing="20px">
        <tr className="fields">
          <td>Name</td>
          <td>Region</td>
          <td>Get Details</td>
        </tr>
        <tr>
          <td>{element.name}</td>
          <td>{element.region}</td>
          <td>
            <input
              className="details_button"
              type="button"
              onClick={() => getDetails(element)}
            />
          </td>
        </tr>
      </table>
      <CloseOperation element={element} elementDeletion={elementDeletion} />
    </li>
  );
}
