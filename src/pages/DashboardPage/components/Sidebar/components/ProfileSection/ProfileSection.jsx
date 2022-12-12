import { ImageOuter, Outer, SubTitle, Title } from "./ProfileSection.style";
import useTheme from "../../../../../../customHooks/useTheme";
import { GrCopy } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import { useState } from "react";
import { copyToClipBoard } from "../../../../../../utils/helper";
import { toast } from "react-hot-toast";
import useUser from "../../../../../../customHooks/useUser";
import useAuth from "../../../../../../customHooks/useAuth";

const ProfileSection = () => {
  const { theme } = useTheme();
  const { userData } = useUser();
  const { getAuthData } = useAuth();

  const [copy, setCopy] = useState(false);

  return (
    <Outer>
      <ImageOuter {...theme}>
        <img
          src={userData?.imageData?.url}
          alt="user"
          width="100%"
          loading="lazy"
        />
      </ImageOuter>
      <Title>{userData?.name}</Title>
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
    </Outer>
  );
};
export default ProfileSection;
