import { useEffect } from "react";
import { toast } from "react-hot-toast";
import useUser from "./useUser";

const useGreetings = () => {
  const {
    userData: { name },
  } = useUser();

  useEffect(() => {
    toast.success(`Welcome ${name}.`);
  }, [name]);
};

export default useGreetings;
