import { useEffect, useRef, useState } from "react";
import { Alert, Flex, Form, Spin } from "antd";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherApi";
import { WeatherForm } from "./WeatherForm";
import { WeatherDisplay } from "./WeatherDisplay";
import type { FieldType, WeatherData } from "../types/WeatherData";

export const WeatherApp = () => {
  const [form] = Form.useForm();
  const [weatherList, setWeatherList] = useState<FieldType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("Singapore");
  const [lastValidData, setLastValidData] = useState<WeatherData | null>(null);
  const isFirstLoad = useRef(true);

  const { data, isError, isLoading, error } = useQuery<WeatherData, Error>({
    queryKey: ["weather", country],
    queryFn: () => fetchWeather(country),
    enabled: !!country,
    retry: false,
  });

  useEffect(() => {
    if (isError && error) setErrorMessage(error.message);
  }, [isError, error]);

  useEffect(() => {
    if (data && country) {
      setLastValidData(data);
      if (!isFirstLoad.current) {
        const timestamp = dayjs().format("DD-MM-YYYY hh:mma");
        setWeatherList((prev) => [{ country: data.name, timestamp }, ...prev]);
        setErrorMessage(null);
      } else {
        isFirstLoad.current = false;
      }
    }
  }, [data, country]);

  const onFinish = (values: FieldType) => {
    if (values.country?.trim()) setCountry(values.country);
    else setErrorMessage("The country field cannot be empty.");
  };

  const handleDelete = (index: number) => {
    setWeatherList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSearch = (item: FieldType) => {
    form.setFieldsValue({ country: item.country });
  };

  return (
    <Flex vertical gap={24} style={{ width: 700 }}>
      <WeatherForm form={form} onFinish={onFinish} />
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      {isLoading ? (
        <Flex justify="center" align="center" style={{ padding: 24 }}>
          <Spin tip="Loading weather data..." size="large" aria-label="Loading weather data" />
        </Flex>
      ) : lastValidData ? (
        <WeatherDisplay data={lastValidData} weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      ) : null}
    </Flex>
  );
};
