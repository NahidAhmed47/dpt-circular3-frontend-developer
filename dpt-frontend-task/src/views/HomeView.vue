<template>
 <div>
  <HeaderNav />
  <div class="max-w-7xl mx-auto py-1.5">
   <h1 className="text-3xl font-bold">Master Price</h1>
   <hr className="absolute w-full left-0" />
  </div>
  <div class="max-w-7xl mx-auto">
   <!-- Flight search form section start -->
   <section className="mt-2">
    <div className="py-6 flex justify-center items-center">
     <button
      className="font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white duration-300 transition-all  rounded-l">
      Round Trip
     </button>
     <button
      className="font-bold px-6 text-sm py-1 border border-violet-800 text-white bg-violet-800 hover:bg-white hover:text-black duration-300 transition-all">
      One Way
     </button>
     <button
      className="font-bold px-6 text-sm py-1 border border-violet-800 hover:bg-violet-800 hover:text-white duration-300 transition-all rounded-r">
      Multi City
     </button>
    </div>
   </section>
   <!-- Flight search form section end   -->
   <!-- Dropdown buttons section   -->
   <div>
    <hr className="border border-b-indigo-500" />
    <div className="py-4 flex items-center space-x-2">
     <div className="w-4/5">
      <DropdownSelect :options="options1" />
     </div>
     <div className="w-4/5">
      <DropdownSelect :options="options2" />
     </div>
     <div className="relative w-4/5 rounded-sm">
      <!-- <DatePicker
                className="w-full border border-gray-400  py-1.5 rounded-sm text-center bg-transparent"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
              /> -->
      <VueDatePicker v-model="date" />
      <div className="absolute top-1.5 right-1.5 -z-10">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6">
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
       </svg>
      </div>
     </div>
     <div className="w-4/6">
      <DropdownSelect :options="options3" />
     </div>
     <div className="w-4/6">
      <DropdownSelect :options="options4" />
     </div>
     <div className="w-11/12">
      <DropdownSelect :options="options5" />
     </div>
     <button
      className="px-1 py-1 hover:bg-violet-600 hover:text-white font-bold">
      +
     </button>
     <div className="w-4/6">
      <DropdownSelect :options="options6" />
     </div>
     <div className="w-4/6">
      <DropdownSelect :options="options7" />
     </div>
     <button
      className="px-1 py-1 hover:bg-violet-600 hover:text-white font-bold">
      +
     </button>
    </div>
    <hr className="border border-b-indigo-500" />
   </div>
  </div>
 </div>
</template>

<script>
import HeaderNav from "@/components/shared/HeaderNav.vue";
import {
 options1,
 options2,
 options3,
 options4,
 options5,
 options6,
 options7,
} from "@/constant/filterOptions";
import DropdownSelect from "../components/shared/DropdownSelect.vue";
import { VueDatePicker } from "@mathieustan/vue-datepicker";
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";

export default {
 name: "HomeView",
 components: {
  HeaderNav,
  DropdownSelect,
  VueDatePicker,
 },
 data() {
  return {
   options1,
   options2,
   options3,
   options4,
   options5,
   options6,
   options7,
   date: new Date(),
  };
 },
};
</script>
