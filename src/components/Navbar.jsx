import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/video-camera.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/authSlice";
import { auth } from "../constants/firebase";
auth;

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-screen h-[5rem] px-12 flex justify-between items-center bg-gradient-to-b from-black bg-transparent fixed top-0 z-50 max-sm:px-4">
      <Link to="/">
        <img src={logo} width={45} alt="logo" className="max-sm:w-8" />
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <button
              className="px-4 py-2 rounded-md border-none font-semibold text-white max-sm:text-xs"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md border-none font-semibold bg-white max-sm:text-xs"
            >
              Register
            </Link>
            <Link
              to="/signin"
              className="px-4 py-2 rounded-md border-none font-semibold text-white max-sm:text-xs"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
