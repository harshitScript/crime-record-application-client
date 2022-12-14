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
