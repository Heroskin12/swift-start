import { useState } from "react";
import Header from "../components/Reusables/Headers/AltHeader/Header";
import ModalButton from "../components/Reusables/Buttons/ModalButton";

export default function User() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errors = {};

    if (form.email !== "jamiefurlong16@gmail.com") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (form.oldPassword || form.newPassword || form.confirmPassword) {
      if (!form.oldPassword) {
        errors.oldPassword = "Please enter your old password.";
      }
      if (!form.newPassword) {
        errors.newPassword = "Please enter a new password.";
      }
      if (form.newPassword !== form.confirmPassword) {
        errors.confirmPassword = "New passwords do not match.";
      }
    }

    return errors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (window.confirm("Are you sure you want to update your settings?")) {
        // Submit logic here
        alert("Settings updated!");
      }
    }
  }

  return (
    <div className="bg-light-primary">
      <Header />
      <div className="p-4">
        <h1 className="text-[18px] font-sans font-semibold">Settings</h1>
        <p className="text-text-secondary text-[14px] font-sans">
          Change the settings you want below and click submit!
        </p>
        <hr className="border-[#A5A5A5] my-2" />
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 w-[50%]">
              <div className="flex flex-col">
                <label className="text-secondary py-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Your Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={form.oldPassword}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
                {errors.oldPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.oldPassword}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Your New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
                {errors.newPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.newPassword}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">
                  Confirm Your New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="p-2 bg-orange-accent text-light-primary rounded-md text-[16px] font-sans font-semibold w-50"
                >
                  Confirm Changes
                </button>
              </div>
            </div>
          </form>
          <div>
            <ModalButton type="deleteAccount">Delete Account? </ModalButton>
          </div>
        </div>
      </div>
    </div>
  );
}
