import { useForm } from "react-hook-form";
import BorderedButton from "../../../../../../../components/Buttons/BorderedButton";
import Button from "../../../../../../../components/Buttons/Button";
import { useState } from "react";
import { ButtonGroup } from "./CreateUserForm.style";
import PersonalDetails from "./Sections/PersonalDetails";
import AuthenticationDetails from "./Sections/AuthenticationDeatils";
import Permissions from "./Sections/Permissions";

const CreateUserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [sectionsUtility, setSectionsUtility] = useState({
    personal_details: { open: true, status: "pending" },
    authentication_details: { open: false, status: "close" },
    permissions: { open: false, status: "close" },
  });

  const [viewOnly, setViewOnly] = useState(false);

  const saveClickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setViewOnly(true);
    setSectionsUtility({
      personal_details: { open: true, status: "done" },
      authentication_details: { open: true, status: "done" },
      permissions: { open: true, status: "done" },
    });
  };

  const backClickHandler = () => {
    setViewOnly(false);
  };

  return (
    <form>
      <PersonalDetails
        utility={sectionsUtility["personal_details"]}
        register={register}
      />
      <AuthenticationDetails
        utility={sectionsUtility["authentication_details"]}
        register={register}
      />
      <Permissions
        utility={sectionsUtility["permissions"]}
        register={register}
      />
      <ButtonGroup>
        {viewOnly ? (
          <>
            <BorderedButton onClick={backClickHandler}>Back</BorderedButton>
            <Button type="submit">Submit</Button>
          </>
        ) : (
          <>
            <span />
            <Button onClick={saveClickHandler}>Save</Button>
          </>
        )}
      </ButtonGroup>
    </form>
  );
};

export default CreateUserForm;
