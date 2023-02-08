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
import { Outer, SubTitle, Title } from "./ProfileSection.style";

const ProfileSection = () => {
  const { userData } = useUser();
  const { getAuthData } = useAuth();
  const [copy, setCopy] = useState(false);

  return (
    <Outer>
      <ImageSection
        imageURL={userData?.imageData?.url}
        userId={getAuthData()?.userId}
      />
      <Title title={userData?.name}>
        {stringLengthCutter(userData?.name, 15)}
      </Title>
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
    </Outer>
  );
};
export default ProfileSection;
