/**
 * useQuery and query have the different return types
 * useQuery returns AsyncData
 * query returns Promise
 * This matters when frontend handles the error
 * Promise uses try catch
 * AsyncData uses error property
 * NOTICE:
 * useMutation has not implemented in nuxt/trpc yet
 * So every POST request uses try catch
 * wait for useMutation to be implemented
 * @see https://github.com/wobsoriano/trpc-nuxt
 * @see https://github.com/wobsoriano/trpc-nuxt/issues/119
 * @see https://github.com/wobsoriano/trpc-nuxt/issues/57
 * @see https://github.com/wobsoriano/trpc-nuxt/pull/65
 */

interface User {
  name: string
  email: string
}

export function useHttp() {
  const { $client } = useNuxtApp()

  const user = {
    async addUser(input: User) {
      return await $client.user.addUser.mutate(input)
    },
    async getUsers() {
      return await $client.user.user.useQuery()
    },
  }

  const hello = {
    async getHello(name: string) {
      return await $client.hello.hello.useQuery({ name })
    },
  }

  return {
    user,
    hello,
  }
}
