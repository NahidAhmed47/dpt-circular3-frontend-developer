<template>
 <select
  v-model="selectedOption"
  @change="handleSelectChange"
  class="border rounded p-2 w-full outline-none">
  <option value="#" class="text-black" disabled>Select an option</option>
  <option v-for="(option, index) in options" :key="index" :value="option.value">
   {{ option.label }}
  </option>
 </select>
</template>

<script>
export default {
 name: "DropdownSelect",
 props: {
  options: {
   type: Array,
   default: () => [],
  },
  onSelect: {
   type: Function,
   default: () => {},
  },
 },
 data() {
  return {
   selectedOption: "default",
  };
 },
 methods: {
  handleSelectChange(event) {
   const value = event.target.value;
   this.selectedOption = value;
   this.onSelect(value);
  },
 },
};
</script>
