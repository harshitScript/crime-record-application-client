import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsClipboardCheck } from "react-icons/bs";
import { GrCopy } from "react-icons/gr";
import LogoutButton from "../../../../../../../../components/LogoutButton/LogoutButton";
import useAuth from "../../../../../../../../customHooks/useAuth";
import useUser from "../../../../../../../../customHooks/useUser";
import {
  copyToClipBoard,
  stringLengthCutter,
} from "../../../../../../../../utils/helper";
import ImageSection from "./components/ImageSection/ImageSection";
import UserEditForm from "./components/UserEditForm/UserEditForm";
import {
  Outer,
  PlaceMiddleLink,
  SubTitle,
  Title,
} from "./ProfileSection.style";

const ProfileSection = () => {
  const { userData } = useUser();
  const { getAuthData } = useAuth();
  const [copy, setCopy] = useState(false);
  const [userEditForm, setUserEditForm] = useState(false);
  const toggleUserEditForm = () => setUserEditForm((current) => !current);

  return (
    <Outer>
      <ImageSection
        imageURL={userData?.imageData?.url}
        userId={getAuthData()?.userId}
      />
      {userEditForm ? (
        <UserEditForm onDiscard={toggleUserEditForm} initialUser={userData} />
      ) : (
        <>
          <Title title={userData?.name}>
            {stringLengthCutter(userData?.name, 8)}
          </Title>
          <PlaceMiddleLink onClick={toggleUserEditForm}>Edit</PlaceMiddleLink>
          <SubTitle>
            {getAuthData()?.userId}
            {copy ? (
              <BsClipboardCheck />
            ) : (
              <GrCopy
                onClick={copyToClipBoard.bind(null, {
                  text: getAuthData()?.userId,
                  success: setCopy.bind(null, true),
                  failure: () => {
                    toast.error("Failed to copy UID.", {
                      position: "top-center",
                    });
                  },
                })}
              />
            )}
          </SubTitle>
          <br />
          <LogoutButton hard={true} fullWidth={true} />
        </>
      )}
    </Outer>
  );
};
export default ProfileSection;
