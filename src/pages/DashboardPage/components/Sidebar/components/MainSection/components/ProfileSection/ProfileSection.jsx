import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsClipboardCheck } from "react-icons/bs";
import { GrCopy } from "react-icons/gr";
import useAuth from "../../../../../../../../customHooks/useAuth";
import useTheme from "../../../../../../../../customHooks/useTheme";
import useUser from "../../../../../../../../customHooks/useUser";
import {
  copyToClipBoard,
  stringLengthCutter,
} from "../../../../../../../../utils/helper";
import { ImageOuter, Outer, SubTitle, Title } from "./ProfileSection.style";

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
    </Outer>
  );
};
export default ProfileSection;
