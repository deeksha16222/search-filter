import React, { useState } from "react";

export default function Search() {
  const list = [
    "Tomato",
    "Potato",
    "Carrot",
    "Raddish",
    "Cauliflower",
    "Brinjal",
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div>
      <input name="query" type="text" onChange={handleSearch} />
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}
