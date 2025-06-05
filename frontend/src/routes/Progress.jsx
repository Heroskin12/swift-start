import { useState, useEffect, useMemo } from "react";
import { useEmployee } from "../context/EmployeeProvider.jsx";
import dummyData from "../dummyData";

// Helper to get a random status string
function getRandomStatusString() {
  const statuses = ["pending", "approved", "rejected"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export default function Progress() {
  const { name: contextName } = useEmployee();
  const [selectedName, setSelectedName] = useState(contextName || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openAdIndex, setOpenAdIndex] = useState(null);
  const [openSoftwareIndex, setOpenSoftwareIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get all names from dummyData
  const names = dummyData.map((d) => d.name);

  // Find the selected person in dummyData
  const person = dummyData.find((d) => d.name === selectedName) || dummyData[0];

  // Memoize random statuses so they change on refresh or name change
  const { adGroups, software } = useMemo(() => {
    if (person.name === contextName) {
      return {
        adGroups: person.adGroupList.map((g) => ({
          ...g,
          requestStatus: "pending",
        })),
        software: person.applicationName.map((a) => ({
          ...a,
          requestStatus: "pending",
        })),
      };
    }
    return {
      adGroups: person.adGroupList.map((g) => ({
        ...g,
        requestStatus: getRandomStatusString(),
      })),
      software: person.applicationName.map((a) => ({
        ...a,
        requestStatus: getRandomStatusString(),
      })),
    };
  }, [person, contextName]);

  function getStatusProps(status) {
    if (status === "approved")
      return { color: "bg-green-500", label: "Approved" };
    if (status === "rejected")
      return { color: "bg-red-500", label: "Rejected" };
    return { color: "bg-orange-400", label: "Pending" };
  }

  useEffect(() => {
    if (contextName) {
      setSelectedName(contextName);
    }
  }, [contextName]);

  // Spinner logic: show spinner for 2s when a new name is selected
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Show spinner for 2s when arriving with a selectedName (e.g., from User page)
  useEffect(() => {
    if (selectedName && !loading) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [selectedName]);

  const handleDropdownSelect = (nameOption) => {
    setLoading(true);
    setDropdownOpen(false);
    setOpenAdIndex(null);
    setOpenSoftwareIndex(null);
    setTimeout(() => {
      setSelectedName(nameOption);
    }, 0); // setSelectedName after closing dropdown for smoothness
  };

  return (
    <div className="box-border max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between sm:px-4 px-2">
        <h1 className="font-sans font-bold text-[48px]">Status</h1>
      </div>

      {/* Name Dropdown */}
      <div className="relative w-[220px] mt-6 pl-4 mb-8">
        <button
          type="button"
          className={`w-full flex justify-between items-center px-4 py-2 rounded border border-gray-300 transition-colors
            ${selectedName ? "bg-orange-500 text-white" : "bg-white text-black"}
            focus:outline-none`}
          onClick={() => setDropdownOpen((open) => !open)}
        >
          {selectedName || "Select a name"}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded shadow">
            {names.map((nameOption) => (
              <li
                key={nameOption}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleDropdownSelect(nameOption)}
              >
                {nameOption}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Placeholder if no employee selected */}
      {!selectedName && !loading && (
        <div className="text-center text-gray-500 mt-12 text-lg">
          Please select an employee's data to view.
        </div>
      )}

      {/* Spinner */}
      {loading && (
        <div className="flex flex-col items-center justify-center mt-20 mb-20">
          <svg
            className="animate-spin h-12 w-12 text-orange-500 mb-4"
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
          <div className="text-orange-500 text-lg font-semibold">
            Loading employee data...
          </div>
        </div>
      )}

      {/* Only show data if a name is selected and not loading */}
      {selectedName && !loading && (
        <>
          {/* AD Groups Accordion */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">AD Groups</h2>
            <div className="divide-y divide-gray-200 border rounded bg-white">
              {adGroups.map((group, idx) => {
                const statusProps = getStatusProps(group.requestStatus);
                return (
                  <div key={group.adGroupName}>
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
                      onClick={() =>
                        setOpenAdIndex(openAdIndex === idx ? null : idx)
                      }
                    >
                      <span className="font-medium">{group.adGroupName}</span>
                      <span className="flex items-center gap-2">
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${statusProps.color}`}
                        ></span>
                        <span className="text-sm">{statusProps.label}</span>
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform ${
                            openAdIndex === idx ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {openAdIndex === idx && (
                      <div className="px-6 pb-4 text-gray-700">
                        <div>
                          <span className="font-semibold">Entitlement:</span>{" "}
                          {group.entitlementData}
                        </div>
                        <div>
                          <span className="font-semibold">
                            Business Justification:
                          </span>{" "}
                          {group.businessJustification}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Software Accordion */}
          <div>
            <h2 className="font-semibold text-xl mb-2">Software</h2>
            <div className="divide-y divide-gray-200 border rounded bg-white">
              {software.map((app, idx) => {
                const statusProps = getStatusProps(app.requestStatus);
                return (
                  <div key={app.appName}>
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
                      onClick={() =>
                        setOpenSoftwareIndex(
                          openSoftwareIndex === idx ? null : idx
                        )
                      }
                    >
                      <span className="font-medium">{app.appName}</span>
                      <span className="flex items-center gap-2">
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${statusProps.color}`}
                        ></span>
                        <span className="text-sm">{statusProps.label}</span>
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform ${
                            openSoftwareIndex === idx ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {openSoftwareIndex === idx && (
                      <div className="px-6 pb-4 text-gray-700">
                        <div>
                          <span className="font-semibold">Request Status:</span>{" "}
                          {app.requestStatus === "approved"
                            ? "Granted"
                            : app.requestStatus === "rejected"
                            ? "Rejected"
                            : "Pending"}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
