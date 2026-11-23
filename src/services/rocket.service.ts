
import api from '@/boot/axios'
import type { Rocket, RocketApiResponse } from '@/types/rocket'

const getRockets = async (): Promise<Rocket[]> => {
  const { data } = await api.get<RocketApiResponse>(
    '/config/launcher/',
    {
      params: {
        manufacturer__name: 'SpaceX',
        mode: 'detailed',
        limit: 20,
      },
    },
  )

  return data.results
}

const getRocketById = async (id: number): Promise<Rocket> => {
  const { data } = await api.get<Rocket>(
    `/config/launcher/${id}/`,
  )

  return data
}

export const rocketService = {
  getRockets,
  getRocketById,
}
