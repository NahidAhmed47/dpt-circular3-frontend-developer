import { useState } from "react";
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

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = {};
    // Loop through form elements and collect their values
    for (let i = 0; i < e.target.elements.length; i++) {
      const element = e.target.elements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    const filteredData = flightAllData?.flightOffer?.filter((flight) => {
      const segments = flight?.itineraries?.[0]?.segments?.[0];
      const arrival = segments?.arrival?.iataCode;
      const departure = segments?.departure?.iataCode;
      if (
        departure === formData?.departureRoute &&
        arrival === formData?.arrivalRoute
      ) {
        return flight;
      }
    });
    if (filteredData) {
      setFlightData(filteredData);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold py-1.5'>Master Price</h1>
      <hr className='absolute w-full left-0' />

      {/* Flight search form section  */}
      <form onSubmit={handleSubmitForm}>
        <section className='mt-2'>
          <div className='py-6 flex justify-center items-center'>
            <button className='font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white transition-all duration-300'>
              Round Trip
            </button>
            <button className='font-bold px-6 text-sm py-1 border border-violet-800 text-white bg-violet-800 hover:bg-white hover:text-black transition-all duration-300'>
              One Way
            </button>
            <button className='font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white transition-all duration-300'>
              Multi City
            </button>
          </div>
          {/* Dropdown buttons section  */}
          <div>
            <hr className='border border-b-indigo-500' />
            <div className='py-4 flex items-center space-x-2'>
              <div className='w-4/5'>
                <Dropdown options={options1?.data} name={options1?.name} />
              </div>
              <div className='w-4/5'>
                <Dropdown options={options2?.data} name={options2?.name} />
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
                    className='w-6 h-6'
                  >
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
                <Dropdown options={options5?.data} name={options5?.name} />
              </div>
              <button className='px-1 py-1 hover:bg-violet-600 hover:text-white font-bold'>
                +
              </button>
              <div className='w-4/6'>
                <Dropdown options={options6?.data} name={options6?.name} />
              </div>
              <div className='w-4/6'>
                <Dropdown options={options7?.data} name={options7?.name} />
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
              id='extraOption'
            />
            <label className='ml-2 font-bold' htmlFor='extraOption'>
              Extra Options
            </label>
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
          <button className='bg-violet-800 text-white uppercase rounded-md font-bold px-8 py-3 border border-violet-800 hover:bg-white hover:text-black transition-all duration-300'>
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
            {flightsData?.map((item, index) => (
              <FlightDataRow
                key={index}
                index={index}
                totalItem={item}
              ></FlightDataRow>
            ))}
          </tbody>
        </table>
        {flightsData?.length === 0 && (
          <div className='mt-20 text-center text-lg font-medium italic text-gray-500'>
            No flight found!
          </div>
        )}
      </section>
    </div>
  );
};

export default MasterPrice;
