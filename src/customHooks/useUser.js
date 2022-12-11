import { useEffect } from "react";
import { useGetUserInfoQuery } from "../store/userApi";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const useUser = () => {
  const { getAuthData } = useAuth();

  const { data, isError, isFetching, isUninitialized, isLoading, refetch } =
    useGetUserInfoQuery({ userId: getAuthData()?.userId });

  const userData = data?.data;
  const userDataExist = !!userData;
  const userDataLoading = isFetching || isUninitialized || isLoading;
  const userDataError = isError;
  const userDataRefetch = refetch;

  useEffect(() => {
    const userId = getAuthData()?.userId;
    if (userId) {
      return;
    } else {
      toast.error("Authenticated User id not Found.", {
        position: "top-center",
      });
    }
  }, [getAuthData]);

  return {
    userData,
    userDataError,
    userDataExist,
    userDataLoading,
    userDataRefetch,
  };
};
export default useUser;
