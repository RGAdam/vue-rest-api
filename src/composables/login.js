import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

axios.defaults.withCredentials = true;

export default function useLogin() {
  const loginData = ref({});
  const errors = ref({});
  const router = useRouter();

  const login = async (data) => {
    try {
      await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
      const response = await axios.post('login', data);

      router.push({ name: 'home' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
      console.log(error);
    }
  };

  return {
    login,
    loginData,
    errors,
  };
}
