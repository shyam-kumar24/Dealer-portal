import { useContext, useState } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import validate from "../utils/validate";

export default function LoginPage() {
  const { userDetail, setUserDetail } = useContext(GlobalContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();


  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(userDetail);

    const validationError = validate(userDetail);

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    } else {
      setError({});
      
      localStorage.setItem('persistedName', userDetail.name);

    // to retrieve : const persistedName = localStorage.getItem('persistedName');
    // to delete on logout: localStorage.removeItem('persistedName');

      setUserDetail({
        name: "", // Keep the name
        email: "",
        password: "",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-violet-300 max-w-fit m-auto mt-[100px] p-5 rounded-xl">
      <form onSubmit={handleSubmitLogin} className="flex gap-5 flex-col">
        <div>
          <label htmlFor="name" className=" text-sm md:text-base">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            className="w-full border border-violet-800 p-2 rounded-md"
            type="text"
            placeholder="Enter your name"
            value={userDetail.name}
            onChange={(e) =>
              setUserDetail((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className=" text-sm md:text-base">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            className="w-full border border-violet-800 p-2 rounded-md"
            type="email"
            placeholder="Enter email"
            value={userDetail.email}
            onChange={(e) =>
              setUserDetail((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className=" text-sm md:text-base">
            Password<span className="text-red-600">*</span>
          </label>
          <input
            className="w-full border border-violet-800 p-2 rounded-md"
            type="password"
            placeholder="Enter password"
            value={userDetail.password}
            onChange={(e) =>
              setUserDetail((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <p className="text-xs text-gray-500 mt-1">
            Password must contain at least 8 characters, including uppercase,
            lowercase, and numbers
          </p>
          {error.password && (
            <p className="text-red-600 text-sm">{error.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-violet-900 text-white rounded-md h-10 flex items-center justify-center cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
