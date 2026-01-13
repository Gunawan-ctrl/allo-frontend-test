// define store with pinia ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Rocket {
  id: string;
  name: string;
  type: string;
  description: string;
  first_flight: string;
  country: string;
  cost_per_launch: number;
  flickr_images: string[];
}

interface RocketDetail {
  name: string;
  type: string;
  description: string;
  country: string;
  firstFlight: string;
  costPerLaunch: number;
  flickrImages: string[];
}

export const useDataRocketStore = defineStore('dataRocket', {
  state: () => ({
    rockets: [] as Rocket[],
    detailRocket: null as RocketDetail | null,
    isLoading: false
  }),
  actions: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await  axios.get('https://api.spacexdata.com/v4/rockets');
        this.rockets = response.data;
      } catch (error) {
        console.error('Error fetching rocket data:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchRocketById(id: string) {
      this.isLoading = true;
      try {
        const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`);
        const datas = response.data
        this.detailRocket = {
          name: datas.name,
          type: datas.type,
          description: datas.description,
          costPerLaunch: datas.cost_per_launch,
          flickrImages: datas.flickr_images,
          country: datas.country,
          firstFlight: datas.first_flight,
        }
        console.log("🚀 ~ this.detailRocket:", this.detailRocket)
      } catch (error) {
        console.error(`Error fetching rocket data for ID ${id}:`, error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
    addRocket(rocket: Rocket) {
      this.rockets.push({
        ...rocket,
        id: Date.now().toString(),
        // add static array for flickr_images
        flickr_images: rocket.flickr_images
      });
      console.log("🚀 ~ this.rockets:", this.rockets)
    }
  }
});


