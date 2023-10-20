<script setup>
import useStudents from '@/composables/students';
import { reactive } from 'vue';

const { createStudent, errors } = useStudents();

const form = reactive({
  first_name: '',
  last_name: '',
  sign: '',
  group: '',
  age: '',
});
</script>

<template>
  <div class="mt-12">
    <form
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      @submit.prevent="createStudent(form)"
    >
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >First name</label
          >
          <input
            type="text"
            v-model="form.first_name"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="John"
          />
          <div v-if="errors.first_name">
            <span class="text-sm text-red-400">{{ errors.first_name[0] }}</span>
          </div>
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Last name</label
          >
          <input
            type="text"
            v-model="form.last_name"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="Doe"
          />
          <div v-if="errors.last_name">
            <span class="text-sm text-red-400">{{ errors.last_name[0] }}</span>
          </div>
        </div>
        <div>
          <label for="sign" class="block mb-2 text-sm font-medium text-gray-900"
            >Sign</label
          >
          <input
            type="text"
            v-model="form.sign"
            id="sign"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="Circle"
          />
          <div v-if="errors.sign">
            <span class="text-sm text-red-400">{{ errors.sign[0] }}</span>
          </div>
        </div>
        <div>
          <label
            for="group"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Group</label
          >
          <input
            type="text"
            v-model="form.group"
            id="group"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="Small Group"
          />
          <div v-if="errors.group">
            <span class="text-sm text-red-400">{{ errors.group[0] }}</span>
          </div>
        </div>
        <div>
          <label for="age" class="block mb-2 text-sm font-medium text-gray-900">
            Age</label
          >
          <input
            type="number"
            v-model="form.age"
            id="age"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            placeholder="5"
          />
          <div v-if="errors.age">
            <span class="text-sm text-red-400">{{ errors.age[0] }}</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Create
      </button>
    </form>
  </div>
</template>
