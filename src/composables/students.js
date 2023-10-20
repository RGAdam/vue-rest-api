import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default function useStudents() {
  const students = ref([]);
  const student = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getStudents = async (page = 1) => {
    const response = await axios.get(`students?page=${page}`);

    students.value = response.data;
  };

  const getStudent = async (id) => {
    const response = await axios.get(`students/${id}`);

    student.value = response.data;
  };

  const createStudent = async (data) => {
    try {
      await axios.post('students', data);

      await router.push({ name: 'StudentIndex' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateStudent = async (id) => {
    try {
      await axios.put(`students/${id}`, student.value);

      await router.push({ name: 'StudentIndex' });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    await axios.delete(`students/${id}`);
    await getStudents();
  };

  return {
    students,
    student,
    errors,
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
  };
}
