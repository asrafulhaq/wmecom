import { useSelector } from "react-redux";

const useAuthUser = () => {
  const { user } = useSelector((state) => state.auth);

  return { user };
};

export default useAuthUser;
