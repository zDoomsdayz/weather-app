# Weather App

A modern, responsive weather application built with **React**, **TypeScript**, and **Ant Design**. It fetches real-time weather data for user-specified locations, displays search history, and provides a clean, mobile-friendly user interface with reusable custom components.

## Features

- **Real-Time Weather Data**  
  Search for current weather by country or city using an external API (e.g., OpenWeatherMap). Displays temperature, humidity, wind speed, and more.
- **Responsive Design**  
  Seamlessly adapts to desktop and mobile screens with flexible layouts and touch-friendly inputs, utilizing **react-responsive** for enhanced mobile support.

- **Custom Components**  
  Reusable components located in `src/custom/` ensure consistent styling and modularity.

- **Search History**  
  Tracks and displays previous searches with options to re-search or delete entries.

- **Error Handling**  
  Handles invalid inputs (e.g., `!1237uasdAIO`) gracefully by displaying the last valid weather data along with error alerts.

- **Modern UI**  
  Implements a clean and intuitive interface using **Ant Design**, ensuring accessibility and ease of use.

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Enforces type safety across the application.
- **Ant Design**: Provides robust and customizable UI components.
- **TanStack Query**: Efficient data fetching, caching, and state management.
- **Day.js**: Lightweight library for date and time formatting.
- **react-responsive**: Enhances mobile responsiveness.
- **Vite**: Fast build tool and development server for modern web projects.
