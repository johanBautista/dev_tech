import React, { useState } from "react";
import { leakedProducts } from "../../features/products/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const listCategories = useSelector(
    (state: RootState) => state.products.categoryFilters
  );

  const dispatch = useDispatch();

  const handleFiltrar = (event: any) => {
    dispatch(leakedProducts(event.target.value));
    setSelectedOption(event.target.value);
  };

  const options = listCategories.map((item, index) => {
    return { id: index + 1, value: item, label: item };
  });

  return (
    <select value={selectedOption} onChange={handleFiltrar}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
