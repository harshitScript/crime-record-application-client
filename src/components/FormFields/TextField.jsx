import useTheme from "../../customHooks/useTheme";
import { Input } from "./FormFields.style";
import { forwardRef } from "react";

const TextField = forwardRef(({ ...props }, ref) => {
  const { theme } = useTheme();
  return <Input {...props} {...theme} auto />;
});

export default TextField;
