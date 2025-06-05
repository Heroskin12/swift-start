import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useEmployee } from "../context/EmployeeProvider.jsx";
import Header from "../components/Reusables/Headers/AltHeader/Header";
import dummyData from "../dummyData";

export default function User() {
  const navigate = useNavigate();
  const { setName, name: contextName } = useEmployee();

  // Find the person based on the entered BRID
  const [form, setForm] = useState({
    brid: "",
    tc: "",
    businessUnit: "",
    teamName: "",
    role: "",
  });
  const [showSections, setShowSections] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const timerRef = useRef();

  // Find the person in dummyData by BRID
  const matchedPerson = dummyData.find((d) => d.brid === form.brid);

  // Override statuses to "pending" if this is the context employee
  let adGroupList = matchedPerson?.adGroupList || [];
  let softwareNames =
    matchedPerson?.applicationName?.map((a) => a.appName).join("\n") || "";

  if (matchedPerson && matchedPerson.name === contextName) {
    adGroupList = adGroupList.map((g) => ({
      ...g,
      requestStatus: "pending",
      attestation: "no",
      statusLabel: "Pending",
    }));
    softwareNames =
      matchedPerson.applicationName
        ?.map((a) => `${a.appName} (Pending)`)
        .join("\n") || "";
  }

  // Simulate autofill when correct brid is typed
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "brid") {
      const person = dummyData.find((d) => d.brid === value);
      if (person) {
        setForm({
          brid: value,
          tc: String(person.tc || ""),
          businessUnit: String(person.businessUnit || ""),
          teamName: String(person.teamName || ""),
          role: String(person.role || ""),
        });
      } else {
        setForm({
          brid: value,
          tc: "",
          businessUnit: "",
          teamName: "",
          role: "",
        });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
    setConfirmed(false); // Reset confirmation if any field changes
  }

  // Only allow confirm if all fields are filled AND brid matches a real user
  const allFilled = Object.values(form).every((v) => v.trim() !== "");
  const canConfirm = allFilled && !!matchedPerson;

  // Only run spinner after confirmation
  useEffect(() => {
    if (!confirmed) return;

    setLoading(true);
    timerRef.current = setTimeout(() => {
      setShowSections(true);
      setLoading(false);
    }, 1200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [confirmed]);

  return (
    <div className="bg-light-primary">
      <Header />
      <div className="p-4">
        <h1 className="text-[18px] font-sans font-semibold">
          Raise Requests for Your New Joiner
        </h1>
        <p className="text-text-secondary text-[14px] font-sans">
          Fill out the employee details and the requests will be automatically
          filled!
        </p>
        <hr className="border-[#A5A5A5] my-2" />
        <div className="flex flex-col">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-4 w-[50%]">
              <div className="flex flex-col">
                <label className="text-secondary py-2">Employee Brid</label>
                <input
                  type="text"
                  name="brid"
                  value={form.brid}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                />
                {form.brid && !matchedPerson && (
                  <span className="text-red-500 text-sm mt-1">
                    Please enter a valid BRID for this data set.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">TC</label>
                <input
                  type="text"
                  name="tc"
                  value={form.tc}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                  disabled={!!form.brid}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Business Unit</label>
                <input
                  type="text"
                  name="businessUnit"
                  value={form.businessUnit}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                  disabled={!!form.brid}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={form.teamName}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                  disabled={!!form.brid}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-secondary py-2">Role</label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="rounded-[8px] bg-text-field px-4 py-2 border-1"
                  disabled={!!form.brid}
                />
              </div>
            </div>
            {/* Show confirm button if all fields filled, brid is correct, and not yet confirmed */}
            {canConfirm && !confirmed && (
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="p-2 bg-blue-600 text-white rounded-md text-[16px] font-sans font-semibold"
                  onClick={() => setConfirmed(true)}
                >
                  Confirm Info
                </button>
              </div>
            )}
            {(loading || showSections) && confirmed && (
              <div className="flex flex-col py-3 mt-5">
                {loading ? (
                  <div className="flex items-center gap-2 text-blue-600 py-6">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Loading recommendations...
                  </div>
                ) : (
                  <>
                    {/* AD Group List */}
                    <div className="flex flex-col w-[50%] mb-6">
                      <label className="text-secondary py-2">
                        AD Group List
                      </label>
                      <div className="rounded-[8px] bg-text-field px-4 py-2 border-1 whitespace-pre-line">
                        {adGroupList.map((g, idx) => (
                          <div key={g.adGroupName + idx} className="mb-4">
                            <div>{g.adGroupName}</div>
                            <div className="text-sm text-gray-700">
                              {g.entitlementData}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col w-[50%] mb-6">
                      <label className="text-secondary py-2">
                        Software Name
                      </label>
                      <textarea
                        name="softwareName"
                        value={softwareNames}
                        readOnly
                        rows={Math.max(3, softwareNames.split("\n").length)}
                        className="rounded-[8px] bg-text-field px-4 py-2 border-1 resize-y"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        className="p-2 bg-orange-accent text-light-primary rounded-md text-[16px] font-sans font-semibold w-50"
                        onClick={() => {
                          setName(matchedPerson?.name || "");
                          navigate("/progress");
                        }}
                      >
                        Confirm Changes
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
