import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const baseUrl = "http://localhost:5000/";
const useAxios = (configAxios) => {
  const [resp, setResp] = useState();
  const api = useCallback(
    async ({ path = "", method = "", params = "", data = {} }) => {
      const response = await axios({
        method,
        url: `${baseUrl}${path}/${params}`,
        data,
      });
      setResp(response.data);
    },
    []
  );

  useEffect(() => {
    if (configAxios) api(configAxios);
  }, [configAxios]);

  return [resp, api];
};

export default useAxios;
