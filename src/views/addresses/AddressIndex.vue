<script setup>
import useAddress from '@/composables/addresses';
import { TailwindPagination } from 'laravel-vue-pagination';
import { onMounted } from 'vue';

const { addresses, getAddresses, deleteAddress } = useAddress();

onMounted(() => {
  getAddresses();
});
</script>

<template>
  <div class="mt-12">
    <div class="flex justify-between m-2 p-2">
      <div class="text-2xl">Address List</div>
      <RouterLink
        :to="{ name: 'AddressCreate' }"
        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded text-white"
        >New Address</RouterLink
      >
    </div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Street Name</th>
            <th scope="col" class="px-6 py-3">Street Number</th>
            <th scope="col" class="px-6 py-3">Zip</th>
            <th scope="col" class="px-6 py-3">City</th>
            <th scope="col" class="px-6 py-3">Number of Sibling</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="address in addresses.data"
            :key="address.id"
            class="bg-white border-b"
          >
            <td class="px-6 py-4">{{ address.street_name }}</td>
            <td class="px-6 py-4">{{ address.street_number }}</td>
            <td class="px-6 py-4">{{ address.zip }}</td>
            <td class="px-6 py-4">{{ address.city }}</td>
            <td class="px-6 py-4">{{ address.sibling_num }}</td>
            <td class="px-6 py-4 space-x-2">
              <RouterLink
                class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                :to="{ name: 'AddressEdit', params: { id: address.id } }"
                >Edit</RouterLink
              >
              <button
                @click="deleteAddress(address.id)"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center mt-3">
        <TailwindPagination
          :data="addresses"
          :limit="2"
          :keepLength="true"
          @pagination-change-page="getAddresses"
        />
      </div>
    </div>
  </div>
</template>
