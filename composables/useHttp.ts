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
 * @link https://github.com/wobsoriano/trpc-nuxt
 */

interface IUser {
  name: string
  email: string
}

export function useHttp() {
  const { $client } = useNuxtApp()

  const user = {
    async addUser(input: IUser) {
      return await $client.user.addUser.mutate(input)
    },
    async getUsers() {
      return await $client.user.user.query()
    },
  }

  return {
    user,
  }
}
