import { Box } from "@chakra-ui/react";
import React from "react";
import ChannelPieChart from "./ChannelPieChart.js";
import Footer from "../../../Components/footer/Footer.js";
import ChannelCategoriesBarChart from "./ChannelCategoriesBarChart.js";

export const AnalyticsContent = () => {
  return (
    <>
      <ChannelPieChart/>
      <ChannelCategoriesBarChart/>
      <Footer/>
    </>
  );
};