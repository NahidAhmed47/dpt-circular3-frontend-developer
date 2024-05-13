/* eslint-disable react/prop-types */

const Dropdown = ({ options, name }) => {
  return (
    <select
      className='border rounded p-2 w-full outline-none border-gray-400'
      name={name}
    >
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
