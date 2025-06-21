import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherApp } from "./components/WeatherApp";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
}
