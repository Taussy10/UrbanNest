import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}





// so this above function is like above one

export const useAppwrite = <T, P extends Record<string, string | number>>({
    // accepting three params 
    // function , params as an object and skip variable maybe
  // fn as param for getting data 
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  // data for storing data 
  const [data, setData] = useState<T | null>(null);
  // loading for checking whether data came or not ?
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  // useCallback: to prevent unncessary re-renders
  const fetchData = useCallback(
    // usecallback is taking a function
    async (fetchParams: P) => {
      // accepts params as fetchParams
      setLoading(true);
      setError(null);

      try {
        // store the result in setData by by fn(real fn will get by
        //  calling useAppwrite hook)
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        Alert.alert("Error", errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  const refetch = async (newParams: P) => await fetchData(newParams);

  // data , loading error are just varialbes and function so to use them 
  // return it 
  return { data, loading, error, refetch };
};