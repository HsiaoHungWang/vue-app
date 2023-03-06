<script setup>
import { onMounted, reactive } from "vue";
import axios from 'axios';
const employee = reactive({ "data": {}, "datas": [] });
onMounted(async () => {
  const response = await fetch("https://localhost:7226/api/Employees/1");
  const data = await response.json();
  employee.data = data;
  const response1 = await fetch("https://localhost:7226/api/Employees");
  const datas = await response1.json();
  employee.datas = datas;
  console.log(employee.datas.length);
})
</script>

<template>
  <h3>Employee Page</h3>
  <hr />
  <h3>{{ employee.data.lastName }}</h3>
  <table class="table table-brodered mt-3">
    <thead>
      <tr>
        <th>EmployeeID</th>
        <th>LastName</th>
        <th>FirstName</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, index) in employee.datas" :key="index">
        <td>{{ emp.employeeId }}</td>
        <td>{{ emp.lastName }}</td>
        <td>{{ emp.firstName }}</td>
        <td>{{ emp.title }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>