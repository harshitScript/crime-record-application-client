import { useGetRecordsQuery } from "../store/recordApi";

const useRecords = () => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError: recordsError,
    refetch: recordsRefetch,
  } = useGetRecordsQuery({ page: 1 });

  const recordsData = data?.records;
  const recordsExits = !recordsData;
  const recordsLoading = isLoading || isFetching || isUninitialized;

  return {
    recordsData,
    recordsLoading,
    recordsExits,
    recordsError,
    recordsRefetch,
  };
};
export default useRecords;
