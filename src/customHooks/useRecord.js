import {
  useDeleteRecordImageMutation,
  useDeleteRecordMutation,
  useGetRecordInfoQuery,
  useUploadRecordImageMutation,
} from "../store/recordApi";

const useRecord = ({ recordId }) => {
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError: recordDataError,
    refetch: recordDataRefetch,
  } = useGetRecordInfoQuery({ recordId }, { skip: !recordId });

  const [triggerDeleteRecord, deleteRecordQuery] = useDeleteRecordMutation();

  const [triggerDeleteImage, { isLoading: deleteRecordImageLoading }] =
    useDeleteRecordImageMutation();

  const [triggerUploadImage, { isLoading: uploadRecordImageLoading }] =
    useUploadRecordImageMutation();

  const recordData = data?.record;
  const recordDataExist = !!recordData;
  const recordDataLoading = isLoading || isFetching || isUninitialized;

  return {
    recordData,
    recordDataExist,
    recordDataLoading,
    recordDataError,
    recordDataRefetch,
    triggerDeleteRecord,
    deleteRecordQuery,
    triggerDeleteImage,
    deleteRecordImageLoading,
    triggerUploadImage,
    uploadRecordImageLoading,
  };
};
export default useRecord;
