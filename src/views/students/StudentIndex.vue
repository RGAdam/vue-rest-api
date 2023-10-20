<script setup>
import useStudents from '@/composables/students';
import { TailwindPagination } from 'laravel-vue-pagination';
import { onMounted } from 'vue';

const { students, getStudents, deleteStudent } = useStudents();

onMounted(() => {
  getStudents();
});
</script>

<template>
  <div class="mt-12">
    <div class="flex justify-between m-2 p-2">
      <div class="text-2xl">Students List</div>
      <RouterLink
        :to="{ name: 'StudentCreate' }"
        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded text-white"
        >New Student</RouterLink
      >
    </div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Sign</th>
            <th scope="col" class="px-6 py-3">Group</th>
            <th scope="col" class="px-6 py-3">Age</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="student in students.data"
            :key="student.id"
            class="bg-white border-b"
          >
            <td class="px-6 py-4">{{ student.first_name }}</td>
            <td class="px-6 py-4">{{ student.last_name }}</td>
            <td class="px-6 py-4">{{ student.sign }}</td>
            <td class="px-6 py-4">{{ student.group }}</td>
            <td class="px-6 py-4">{{ student.age }}</td>
            <td class="px-6 py-4 space-x-2">
              <RouterLink
                class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                :to="{ name: 'StudentEdit', params: { id: student.id } }"
                >Edit</RouterLink
              >
              <button
                @click="deleteStudent(student.id)"
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
          :data="students"
          :limit="2"
          :keepLength="true"
          @pagination-change-page="getStudents"
        />
      </div>
    </div>
  </div>
</template>
