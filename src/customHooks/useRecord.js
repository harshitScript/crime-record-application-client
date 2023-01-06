import { useGetRecordInfoQuery } from "../store/recordApi";

const useRecord = ({ recordId }) => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError: recordDataError,
    refetch: recordDataRefetch,
  } = useGetRecordInfoQuery({ recordId });

  const recordData = data?.record;
  const recordDataExist = !!recordData;
  const recordDataLoading = isLoading || isFetching || isUninitialized;

  return {
    recordData,
    recordDataExist,
    recordDataLoading,
    recordDataError,
    recordDataRefetch,
  };
};
export default useRecord;
