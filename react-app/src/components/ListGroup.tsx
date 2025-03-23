import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let [exponent, setExponent] = useState(0);

  return (
    <div className="container">
      <h1>List</h1>
      <div className="row">
        <div className="col-6 ">
          <h2
            onClick={() => {
              console.log("sem kliknjen");
              setExponent(8);
            }}
          >
            {exponent}
          </h2>
        </div>
      </div>
      {items.length === 0 && <p>No Items Found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
