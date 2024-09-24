import { useEffect, useState } from "react";
import { getGifs } from "../helpers/get-gifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const syncGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };
  useEffect(() => {
    syncGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
