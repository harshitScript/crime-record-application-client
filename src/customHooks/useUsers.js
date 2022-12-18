import { useListUserQuery } from "../store/userApi";

const useUsers = () => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    error: usersDataError,
    refetch: usersDataRefetch,
  } = useListUserQuery({
    page: 1,
  });

  const usersDataLoading = isLoading || isFetching || isUninitialized;
  const usersData = data?.users;
  const usersDataExists = !!usersData;

  return {
    usersData,
    usersDataExists,
    usersDataLoading,
    usersDataError,
    usersDataRefetch,
  };
};

export default useUsers;
