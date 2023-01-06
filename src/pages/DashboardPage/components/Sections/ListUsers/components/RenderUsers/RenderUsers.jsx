import { useNavigate } from "react-router-dom";
import FullScreenError from "../../../../../../../components/FullScreenError/FullScreenErrorPage";
import FullScreenLoader from "../../../../../../../components/FullScreenLoader/FullScreenLoader";
import useUsers from "../../../../../../../customHooks/useUsers";
import UserCard from "../UserCard/UserCard";
import { Outer } from "./RenderUsers.style";

const RenderUsers = () => {
  const { usersData, usersDataLoading, usersDataError, usersDataRefetch } =
    useUsers();
  const navigate = useNavigate();

  if (usersDataLoading) return <FullScreenLoader />;
  if (usersDataError)
    return (
      <FullScreenError
        refetch={usersDataRefetch}
        back={navigate.bind(null, "/dashboard")}
        title="Failed To fetch Users."
      />
    );

  return (
    <Outer>
      {usersData.map((user) => (
        <UserCard key={user._id} user={user} id={user._id} />
      ))}
    </Outer>
  );
};
export default RenderUsers;
