export interface Rocket {
  id: number;
  image_url: string | null;
  full_name: string;
  family: string | null;
  description: string | null;
  launch_cost: number | null;
  maiden_flight: string | null;
  manufacturer?: {
    country_code?: string | null;
  } | null;
}

export interface RocketForm {
  full_name: string;
  description: string;
  image_url: string;
}

export interface RocketApiResponse {
  results: Rocket[];
  count: number;
  next: string | null;
  previous: string | null;
}
