import { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
 const [selectedOption, setSelectedOption] = useState("default");

 const handleSelectChange = (event) => {
  const value = event.target.value;
  setSelectedOption(value);
  onSelect(value);
 };

 return (
  <select
   value={selectedOption}
   onChange={handleSelectChange}
   className='border rounded p-2 w-full'>
   <option value='' disabled>
    Select an option
   </option>
   {options?.map((option, index) => (
    <option key={index} value={option.value}>
     {option.label}
    </option>
   ))}
  </select>
 );
};

export default Dropdown;
