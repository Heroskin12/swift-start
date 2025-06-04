import Google from "../../../assets/google.png";
import { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import BaseModal from "./BaseModal";

export default function LoginModal() {
  const { closeModal } = useContext(ModalContext);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    persistentLogin: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    const isValid = handleErrors();
    isValid && closeModal(); // Close the modal after submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleErrors = () => {
    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return false;
    }
    // If email not found.
    // If password does not match the email.
    setError("");
    return true;
  };

  return (
    <BaseModal onClose={closeModal}>
      <div className="flex flex-col items-center justify-between">
        <div>
          <h2 className="text-[24px] font-sans font-semibold text-dark-primary text-center">
            Welcome back!
          </h2>
          <div className="flex justify-center">
            <p className="text-[14px] font-sans font-normal text-[#A5A5A5]">
              New here?
              <span className="pl-1">
                <a
                  href="Signup"
                  className="text-[14px] font-sans font-normal text-[#A5A5A5] underline"
                >
                  Signup
                </a>
              </span>
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-4 w-full max-w-sm p-4"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded-[8px] bg-text-field px-4 py-2 w-full"
            required
            aria-required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="rounded-[8px] bg-text-field px-4 py-2 w-full"
            required
            aria-required
          />
          <div className="flex justify-between px-1">
            <label className="flex items-center font-sans text-dark-primary text-[14px]">
              <input
                type="checkbox"
                className="mr-2"
                name="persistentLogin"
                value={formData.persistentLogin}
                onChange={handleChange}
              />
              Stay Signed In
            </label>
            <p className="font-sans text-dark-primary text-[14px] underline">
              <a href="">Forgot Password?</a>
            </p>
          </div>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-[#A5A5A5]" />
            <span className="mx-2 text-[#A5A5A5] font-sans text-[14px]">
              or sign in with a service
            </span>
            <hr className="flex-grow border-[#A5A5A5]" />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <button className="flex justify-center bg-white rounded-[10px] cursor-pointer px-4 py-2 w-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
              <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
              <span className="text-[14px] font-sans font-normal text-dark-primary">
                Sign in with Google
              </span>
            </button>
            <button
              type="submit"
              className="bg-orange-accent text-light-primary rounded-[10px] cursor-pointer px-4 py-2 font-sans text-[16px] font-normal w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
}
