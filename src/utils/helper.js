export const envUtility = () => {
  const theme = {
    primaryColor: process.env.REACT_APP_PRIMARY_COLOR,
    secondaryColor: process.env.REACT_APP_SECONDARY_COLOR,
    primaryShade: process.env.REACT_APP_PRIMARY_SHADE,
    secondaryShade: process.env.REACT_APP_SECONDARY_SHADE,
  };
  return {
    tenant: process.env.REACT_APP_TENANT,
    phase: process.env.REACT_APP_PHASE,
    baseURI: process.env.REACT_APP_BASE_URI,
    theme,
  };
};

export const copyToClipBoard = ({
  text = "",
  success = () => {},
  failure = () => {},
}) => {
  navigator.clipboard.writeText(text).then(success).catch(failure);
};

export const sizeInMB = (sizeInBytes) =>
  (sizeInBytes / (1024 * 1024)).toFixed(2);

export const permissions = [
  {
    code: "root",
    label: "Root",
    description: "Administrator level permission.",
  },
  {
    code: "read",
    label: "Read",
    description:
      "Read access permissions to the confidential data e.g. users data.",
  },
  {
    code: "write",
    label: "Write",
    description:
      "Write access permissions to create/edit records of criminals.",
  },
];

export const urlToObject = async ({ imageURL, fileName }) => {
  const response = await fetch(imageURL);
  // here imageURL is url/location of image
  const blob = await response.blob();
  const file = new File([blob], fileName, { type: blob.type });
  return file;
};
