
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { rocketService } from '@/services/rocket.service'
import type { Rocket, RocketForm } from '@/types/rocket'

export const useRocketStore = defineStore('rocket', () => {
  const rockets = ref<Rocket[]>([])
  const selectedRocket = ref<Rocket | null>(null)

  const loading = ref(false)
  const error = ref<string | null>(null)

  const detailLoading = ref(false)
  const detailError = ref<string | null>(null)

  const hasFetched = ref(false)

  // Fetch rocket list
  const fetchRockets = async () => {
    loading.value = true
    error.value = null

    try {
      const localRockets = rockets.value.filter(
        (rocket) => rocket.id < 0,
      )

      const apiRockets = await rocketService.getRockets()

      rockets.value = [
        ...localRockets,
        ...apiRockets,
      ]

      hasFetched.value = true
    } catch (err) {
      console.error('Failed to fetch rockets:', err)

      error.value =
        'Unable to load rocket data. Please try again.'
    } finally {
      loading.value = false
    }
  }

  // Fetch rocket detail
  const fetchRocketById = async (id: number) => {
    detailLoading.value = true
    detailError.value = null
    selectedRocket.value = null

    try {
      const localRocket = rockets.value.find((rocket) => rocket.id === id)

      if (localRocket) {
        selectedRocket.value = localRocket
        return
      }

      const rocket = await rocketService.getRocketById(id)
      selectedRocket.value = rocket
    } catch (err) {
      console.error('Failed to fetch rocket detail:', err)

      detailError.value =
        'Unable to load rocket details. Please try again.'
    } finally {
      detailLoading.value = false
    }
  }

  // Add local rocket
  const addRocket = (form: RocketForm) => {
    const newRocket: Rocket = {
      id: -Date.now(),
      full_name: form.full_name.trim(),
      description: form.description.trim() || null,
      family: null,
      image_url: form.image_url.trim() || null,
      launch_cost: null,
      maiden_flight: null,
      manufacturer: {
        country_code: null,
      },
    }

    rockets.value.unshift(newRocket)

    return newRocket
  }

  // Reset selected rocket
  const clearSelectedRocket = () => {
    selectedRocket.value = null
    detailError.value = null
  }

  return {
    rockets,
    selectedRocket,
    loading,
    error,
    detailLoading,
    detailError,
    hasFetched,

    fetchRockets,
    fetchRocketById,
    addRocket,
    clearSelectedRocket,
  }
})
