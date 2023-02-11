import { useGetRecordsIdQuery } from "../store/recordApi";

const useRecords = ({ creator = "all" }) => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError: recordsIdError,
    refetch: recordsIdRefetch,
  } = useGetRecordsIdQuery({ page: 1, creator });

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
