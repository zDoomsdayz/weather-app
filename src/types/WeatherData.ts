export interface WeatherData {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: { speed: number; deg: number; gust?: number };
    clouds: { all: number };
    dt: number;
    sys: { country: string; sunrise: number; sunset: number };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export type FieldType = {
    country?: string;
    timestamp?: string;
    countryCode?: string;
};

interface AxiosErrorResponse {
    data?: {
        message?: string;
    };
}

export interface AxiosError extends Error {
    code: string;
    status: number;
    response?: AxiosErrorResponse;
}