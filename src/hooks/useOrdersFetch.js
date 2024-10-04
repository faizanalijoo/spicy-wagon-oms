// useOrdersFetch.js
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { apiEndpoints } from "../services/apiEndpoints";
import * as moment from "moment";
import api from "../services/api";

export const useOrdersFetch = (outletId, latestOrderId = 0, count) => {
  const [newOrdersCount, setNewOrdersCount] = React.useState(0);
  const { speak } = useSpeechSynthesis();

  const fetchOrdersSinceLatest = React.useCallback(
    async (sinceId) => {
      const url =
        apiEndpoints.getOrdersDate(
          outletId,
          moment(new Date()).format("YYYY-MM-DD")
        ) + `?since_id=${sinceId}`;
      try {
        const response = await api.get(url);
        const data = response.data;
        setNewOrdersCount(data.count);
          if (data.count > 0) {
            speak({
              text: `${data.count} new order${data.count > 1 ? "s" : ""} received`,
            });
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    [outletId, newOrdersCount, speak]
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      fetchOrdersSinceLatest(latestOrderId);
    }, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [fetchOrdersSinceLatest, latestOrderId]);

  return { newOrdersCount, fetchOrdersSinceLatest, setNewOrdersCount };
};
