import { useEffect, useMemo } from "react";
import { useGetUserInfoQuery } from "../store/userApi";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const { getAuthData } = useAuth();
  const navigate = useNavigate();

  const { data, isError, isFetching, isUninitialized, isLoading, refetch } =
    useGetUserInfoQuery({ userId: getAuthData()?.userId });

  const userData = data?.user;
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

  const allActions = useMemo(
    () => [
      {
        title: "List Users",
        onClick: navigate.bind(null, `/dashboard/list-users`),
        required: ["root", "read"],
        active: true,
        description: "A suitable one line description.",
      },
      {
        title: "Create User",
        onClick: navigate.bind(null, `/dashboard/create-user`),
        required: ["root"],
        active: true,
        description: "A suitable one line description.",
      },
      {
        title: "List Records",
        onClick: navigate.bind(null, `/dashboard/list-records`),
        required: [],
        active: true,
        description: "A suitable one line description.",
      },
      {
        title: "Create Record",
        onClick: navigate.bind(null, `/dashboard/create-record`),
        required: ["root", "write"],
        active: true,
        description: "A suitable one line description.",
      },
      {
        title: "Send Alert",
        onClick: navigate.bind(null, `/dashboard/send-alert`),
        required: ["root"],
        active: false,
        description: "A suitable one line description.",
      },
      {
        title: "Update Tenant",
        onClick: navigate.bind(null, `/dashboard/update-tenant`),
        required: ["root"],
        active: false,
        description: "A suitable one line description.",
      },
    ],
    [navigate]
  );

  const actions = allActions
    .filter((action) => action.active) //? Filtering out active actions.
    .filter((action) => {
      //? Checking permission access.
      if (action?.required?.length) {
        return userData?.permissions?.some((permission) =>
          action.required?.includes(permission)
        );
      } else {
        return true;
      }
    });

  return {
    userData,
    userDataError,
    userDataExist,
    userDataLoading,
    userDataRefetch,
    actions,
  };
};
export default useUser;
