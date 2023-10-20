<script setup>
import useAddresses from '@/composables/addresses';
import { onMounted } from 'vue';

const { address, getAddress, updateAddress, errors } = useAddresses();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  getAddress(props.id);
});
</script>

<template>
  <div class="mt-12">
    <form
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      @submit.prevent="updateAddress($route.params.id)"
    >
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="student_id"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Student ID</label
          >
          <input
            type="text"
            v-model="address.student_id"
            id="student_id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="123"
          />
          <div v-if="errors.student_id">
            <span class="text-sm text-red-400">{{ errors.student_id[0] }}</span>
          </div>
        </div>
        <div>
          <label
            for="street_name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Street Name</label
          >
          <input
            type="text"
            v-model="address.street_name"
            id="street_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="Masons Street"
          />
          <div v-if="errors.street_name">
            <span class="text-sm text-red-400">{{
              errors.street_name[0]
            }}</span>
          </div>
        </div>
        <div>
          <label
            for="street_number"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Street Number</label
          >
          <input
            type="number"
            v-model="address.street_number"
            id="street_number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="235"
          />
          <div v-if="errors.street_number">
            <span class="text-sm text-red-400">{{
              errors.street_number[0]
            }}</span>
          </div>
        </div>
        <div>
          <label for="zip" class="block mb-2 text-sm font-medium text-gray-900"
            >Zip Code</label
          >
          <input
            type="number"
            v-model="address.zip"
            id="zip"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="5678"
          />
          <div v-if="errors.zip">
            <span class="text-sm text-red-400">{{ errors.zip[0] }}</span>
          </div>
        </div>
        <div>
          <label
            for="city"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            City</label
          >
          <input
            type="text"
            v-model="address.city"
            id="New York"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="5"
          />
          <div v-if="errors.city">
            <span class="text-sm text-red-400">{{ errors.city[0] }}</span>
          </div>
        </div>
        <div>
          <label
            for="sibling_num"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Number of Siblings</label
          >
          <input
            type="text"
            v-model="address.sibling_num"
            id="sibling_num"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="2"
          />
          <div v-if="errors.sibling_num">
            <span class="text-sm text-red-400">{{
              errors.sibling_num[0]
            }}</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Update
      </button>
    </form>
  </div>
</template>
