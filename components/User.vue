<template>
  <div>
    <div v-if="hello">
      {{ hello }}
    </div>
    <div v-for="user in users" :key="user.email">
      {{ user.name }}
    </div>
    <h1 class="text-indigo blue-shadow">
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
const hello = ref('')

const { data: users, refresh } = await useHttp().user.getUsers()
async function submit() {
  await useHttp().user.addUser({
    name: name.value,
    email: email.value,
  })
  const { data: helloMessage } = await useHttp().hello.getHello(name.value)
  hello.value = helloMessage.value!.greeting

  await refresh()
}
</script>

<style scoped></style>
