import "styled-components/macro";

const InvisibleBackdrop = ({ zIndex = 0, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      css={`
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: ${zIndex};
      `}
    />
  );
};

export default InvisibleBackdrop;
