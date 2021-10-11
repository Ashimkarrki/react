import { useState } from "react";
import React from "react";
import Cards from "./Component/Cards";
import data from "./data/Data";
const Test = () => {
  const [Data, setData] = useState(data);
  const [isEmpty, setisEmpty] = useState(false);
  function clicked() {
    setData([]);
    setisEmpty(true);
  }
  function print(s) {
    return (
      <div>
        <Cards id={s.id} name={s.name} age={s.age} image={s.image} />
      </div>
    );
  }
  return (
    <div className={isEmpty ? "llll" : "hell"} id="hell2">
      {Data.map(print)}
      <div className="he">
        {!isEmpty && <button onClick={clicked}>Clear all</button>}
        {isEmpty && <h1>cleared</h1>}
      </div>
    </div>
  );
};

export default Test;
