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
  </div>
 </div>
</template>

<script>
import HeaderNav from "@/components/shared/HeaderNav.vue";
export default {
 name: "HomeView",
 components: {
  HeaderNav,
 },
};
</script>
