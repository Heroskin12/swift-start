import BaseModal from "./BaseModal";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { useState } from "react";
import Google from "../../../assets/google.png";

export default function SignupModal() {
  const { closeModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <BaseModal onClose={closeModal}>
      <div className="flex flex-col items-center justify-between">
        <div>
          <h2 className="text-[24px] font-sans font-semibold text-dark-primary text-center">
            Signup
          </h2>
          <div className="flex justify-center">
            <p className="text-[14px] font-sans font-normal text-[#A5A5A5]">
              It only takes a minute!
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
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            className="rounded-[8px] bg-text-field px-4 py-2 w-full"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className="rounded-[8px] bg-text-field px-4 py-2 w-full"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className="rounded-[8px] bg-text-field px-4 py-2 w-full"
            onChange={handleChange}
          />
          <div className="flex justify-end px-1">
            <p className="font-sans text-dark-primary text-[14px]">
              Already a member?
              <a href="" className="underline pl-1">
                Login
              </a>
            </p>
          </div>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-[#A5A5A5]" />
            <span className="mx-2 text-[#A5A5A5] font-sans text-[14px]">
              or sign up with a service
            </span>
            <hr className="flex-grow border-[#A5A5A5]" />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <button className="flex justify-center bg-white rounded-[10px] cursor-pointer px-4 py-2 w-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
              <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
              <span className="text-[14px] font-sans font-normal text-dark-primary">
                Sign up with Google
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <button
              type="submit"
              className="bg-orange-accent text-light-primary rounded-[10px] cursor-pointer px-4 py-2 font-sans text-[16px] font-normal w-full"
            >
              Sign Me Up!
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
}
