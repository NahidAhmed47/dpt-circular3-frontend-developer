import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/global/Dropdown";
import {
 options1,
 options2,
 options3,
 options4,
 options5,
 options6,
 options7,
} from "../constants/filterOptions";
import FlightDataRow from "../components/flightDataRow/FlightDataRow";
import { flightAllData } from "../constants/flightData";

const MasterPrice = () => {
 const [isLoading, setIsLoading] = useState(true);
 const [flightsData, setFlightData] = useState(flightAllData?.flightOffer);
 const [selectedDate, setSelectedDate] = useState(new Date());
 const [isChecked, setIsChecked] = useState(false);
 const [selectedOption, setSelectedOption] = useState("dummy");

 const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
 };

 const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
 };

 console.log(flightsData);

 const handleSubmitForm = (e) => {
  e?.preventDefault();
  //  const formData = new
 };

 return (
  <div>
   <h1 className='text-3xl font-bold'>Master Price</h1>
   <hr className='absolute w-full left-0' />

   {/* Flight search form section  */}
   <form onSubmit={handleSubmitForm}>
    <section className='mt-2'>
     <div className='py-6 flex justify-center items-center'>
      <button className='font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white'>
       Round Trip
      </button>
      <button className='font-bold px-6 text-sm py-1 border border-violet-800 text-white bg-violet-800 hover:bg-white hover:text-black'>
       One Way
      </button>
      <button className='font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white'>
       Multi City
      </button>
     </div>
     {/* Dropdown buttons section  */}
     <div>
      <hr className='border border-b-indigo-500' />
      <div className='py-4 flex items-center space-x-2'>
       <div className='w-4/5'>
        <Dropdown options={options1} />
       </div>
       <div className='w-4/5'>
        <Dropdown options={options2} />
       </div>
       <div className='relative w-4/5 rounded-sm'>
        <DatePicker
         className='w-full border border-gray-400  py-1.5 rounded-sm text-center bg-transparent'
         selected={selectedDate}
         onChange={(date) => setSelectedDate(date)}
         dateFormat='dd-MM-yyyy'
         minDate={new Date()}
        />
        <div className='absolute top-1.5 right-1.5 -z-10'>
         <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'>
          <path
           strokeLinecap='round'
           strokeLinejoin='round'
           d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
          />
         </svg>
        </div>
       </div>
       <div className='w-4/6'>
        <Dropdown options={options3} />
       </div>
       <div className='w-4/6'>
        <Dropdown options={options4} />
       </div>
       <div className='w-11/12'>
        <Dropdown options={options5} />
       </div>
       <button className='px-1 py-1 hover:bg-violet-600 hover:text-white font-bold'>
        +
       </button>
       <div className='w-4/6'>
        <Dropdown options={options6} />
       </div>
       <div className='w-4/6'>
        <Dropdown options={options7} />
       </div>
       <button className='px-1 py-1 hover:bg-violet-600 hover:text-white font-bold'>
        +
       </button>
      </div>
      <hr className='border border-b-indigo-500' />
     </div>
    </section>
    <section className='flex justify-between items-center py-3'>
     <div>
      <input
       type='checkbox'
       checked={isChecked}
       onChange={handleCheckboxChange}
      />
      <label className='ml-2 font-bold'>Extra Options</label>
     </div>
     <div className='flex space-x-2'>
      <p className='font-bold'>Environment:</p>
      <div className='flex space-x-2'>
       <label>
        <input
         type='radio'
         value='dummy'
         checked={selectedOption === "dummy"}
         onChange={handleOptionChange}
         className='mr-2'
        />
        Dummy
       </label>
       <label>
        <input
         type='radio'
         value='pdf'
         checked={selectedOption === "pdf"}
         onChange={handleOptionChange}
         className='mr-2'
        />
        PDF
       </label>
      </div>
     </div>
     <button className='bg-violet-800 text-white uppercase rounded-md font-bold px-8 py-3 border border-violet-800 hover:bg-white hover:text-black '>
      Search
     </button>
    </section>
    <hr className='border border-b-indigo-500' />
   </form>
   {/* Search result section  */}

   <section className='py-2 mb-9'>
    <p>{flightsData?.message}</p>
    <table className='table-auto mt-4 w-full text-center'>
     <thead className='bg-gray-300'>
      <tr className='text-center'>
       <th className='py-2'>Flight</th>
       <th>Aircraft</th>
       <th>Class</th>
       <th>Fare</th>
       <th>Route</th>
       <th>Departure</th>
       <th>Arrival</th>
       <th>Duration</th>
       <th>Price</th>
      </tr>
     </thead>
     <tbody>
      {flightsData?.flightOffer?.map((item, index) => (
       <FlightDataRow
        key={index}
        index={index}
        totalItem={item}></FlightDataRow>
      ))}
     </tbody>
    </table>
   </section>
  </div>
 );
};

export default MasterPrice;
