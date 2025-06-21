import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherApp } from "./components/WeatherApp";
import { ConfigProvider } from "antd";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ token: { colorText: "white", fontFamily: "'Noto Sans', sans-serif" } }}>
        <WeatherApp />
      </ConfigProvider>
    </QueryClientProvider>
  );
}
