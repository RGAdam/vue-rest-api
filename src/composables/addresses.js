import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default function useAddresses() {
  const addresses = ref([]);
  const address = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getAddresses = async (page = 1) => {
    const response = await axios.get(`addresses?page=${page}`);

    addresses.value = response.data;
  };

  const getAddress = async (id) => {
    const response = await axios.get(`addresses/${id}`);

    address.value = response.data;
  };

  const createAddress = async (data) => {
    try {
      await axios.post('addresses', data);

      await router.push({ name: 'AddressIndex' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateAddress = async (id) => {
    try {
      await axios.put(`addresses/${id}`, address.value);

      await router.push({ name: 'AddressIndex' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const deleteAddress = async (id) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    await axios.delete(`addresses/${id}`);
    await getAddresses();
  };

  return {
    addresses,
    address,
    errors,
    getAddresses,
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress,
  };
}
