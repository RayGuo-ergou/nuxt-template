<template>
  <div>
    <div v-for="user in users" :key="user.email">
      {{ user.name }}
    </div>
    <h1 class="text-indigo">
      User
    </h1>
    <input v-model="name" type="text">
    <input v-model="email" type="email">
    <button @click="submit">
      submit
    </button>
  </div>
</template>

<script setup lang="ts">
const name = ref('John Doe')
const email = ref('example@abc.com')

const users = await useHttp().user.getUsers()

const submit = async () => {
  await useHttp().user.addUser({
    name: name.value,
    email: email.value,
  })
}
</script>

<style scoped></style>
