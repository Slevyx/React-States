import "./styles.css";
export default function Close({ element, elementDeletion }) {
  return (
    <div className="close" onClick={() => elementDeletion(element)}>
      X
    </div>
  );
}
