import { useGetRecordsIdQuery } from "../store/recordApi";

const useRecords = () => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError: recordsIdError,
    refetch: recordsIdRefetch,
  } = useGetRecordsIdQuery({ page: 1 });

  const recordsIdData = data?.recordsId;
  const recordsIdExits = !recordsIdData;
  const recordsIdLoading = isLoading || isFetching || isUninitialized;

  return {
    recordsIdData,
    recordsIdLoading,
    recordsIdExits,
    recordsIdError,
    recordsIdRefetch,
  };
};
export default useRecords;
