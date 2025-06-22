import { useEffect, useRef, useState } from "react";
import { Alert, Flex, Form, Spin } from "antd";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherApi";
import { WeatherForm } from "./WeatherForm";
import { WeatherDisplay } from "./WeatherDisplay";
import type { AxiosError, FieldType, WeatherData } from "../types/WeatherData";
import CustomText from "../custom/CustomText/CustomText";
import { toSentenceCase } from "../utils/utils";
export const WeatherApp = () => {
  const [form] = Form.useForm();
  const [weatherList, setWeatherList] = useState<FieldType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("Singapore");
  const [lastValidData, setLastValidData] = useState<WeatherData | null>(null);
  const isFirstLoad = useRef(true);

  const { data, isError, isLoading, error } = useQuery<WeatherData, AxiosError>({
    queryKey: ["weather", country],
    queryFn: () => fetchWeather(country),
    enabled: !!country,
    retry: false,
  });

  useEffect(() => {
    // when the fetch is unsuccessful
    if (isError && error) {
      // try to extract message from error.response if it exists
      const errMsg = error?.response?.data?.message || "Not found";
      setErrorMessage(toSentenceCase(errMsg));
    }
  }, [isError, error]);

  useEffect(() => {
    // when the fetch is successful
    if (data) {
      setLastValidData(data);

      // add into search history after the first load
      if (!isFirstLoad.current) {
        const timestamp = dayjs().format("DD-MM-YYYY hh:mma");
        setWeatherList((prev) => [{ country: data.name, timestamp, countryCode: data.sys.country }, ...prev]);
        setErrorMessage(null);
      } else {
        isFirstLoad.current = false;
      }
    }
  }, [data]);

  const onFinish = (values: FieldType) => {
    // make sure the form is not empty
    if (values.country?.trim()) setCountry(values.country);
    else setErrorMessage("The country field cannot be empty.");
  };

  const handleDelete = (index: number) => {
    // update weather list by filtering out the item at the specified index.
    setWeatherList((list) => list.filter((_, i) => i !== index));
  };

  const handleSearch = (item: FieldType) => {
    form.setFieldsValue({ country: item.country });
    form.submit();
  };

  return (
    <Flex vertical className="weather-app-container">
      <WeatherForm form={form} onFinish={onFinish} />
      {errorMessage && <Alert message={<CustomText text={errorMessage} style={{ color: "black" }} />} type="error" showIcon />}
      {isLoading ? (
        <Flex justify="center" align="center">
          <Spin tip="Loading weather data..." size="large" aria-label="Loading weather data" />
        </Flex>
      ) : lastValidData ? (
        <WeatherDisplay data={lastValidData} weatherList={weatherList} handleSearch={handleSearch} handleDelete={handleDelete} />
      ) : null}
    </Flex>
  );
};
