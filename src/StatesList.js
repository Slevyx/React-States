import _ from "lodash";
import State from "./State";
import "./styles.css";
export default function StatesList({
  statesList,
  elementDeletion,
  getDetails
}) {
  return (
    <>
      <div className="title">States List</div>
      <ul className="list">
        {_.map(statesList, (element, index) => {
          return (
            <State
              index={index}
              element={element}
              elementDeletion={elementDeletion}
              getDetails={getDetails}
            />
          );
        })}
      </ul>
    </>
  );
}
