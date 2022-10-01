import { useSelector } from "react-redux";
import { isLoggedIn, selectAuth } from "../../../store/slices/user/selectors";
import { Navigate } from "react-router-dom";

const WithAuth = (props) => {
  const { roles, children } = props;
  const isSignedIn = useSelector((state) => isLoggedIn(state));
  const userRole = useSelector((state) => selectAuth(state));

  const auth = isSignedIn && roles.includes(userRole);

  return auth ? children : <Navigate to="/signin" />;
};

export default WithAuth;
