import inputHandler from "../../../hook/input.handler";
import { updateSchoolField } from "../api/SchoolAPI";
import { useState } from "react";

const BOARD_OPTIONS = ["CBSE", "ICSE", "State Board", "IB"];

const EditFieldModal = ({ isOpen, onClose, id }) => {
  const [inputValue, setUserInput] = inputHandler();
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation: Pincode must be numeric
    if (name === "value" && inputValue.field === "pincode") {
      if (!/^\d*$/.test(value)) {
        setError("only number are allowed");
        return;
      } // ignore non-numeric input
    }

    // Validation: City/State/Country only letters and spaces
    if (
      name === "value" &&
      ["city", "state", "country"].includes(inputValue.field)
    ) {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setError(" number are not allowed");
        return;
      } // ignore numbers or symbols
    }

    setUserInput(e);
    setError("");
  };

  const onSave = async () => {
    if (!inputValue.field || !inputValue.value) {
      setError("Field and value are required.");
      return;
    }

    try {
      await updateSchoolField(id, inputValue);
      onClose(false);
    } catch (err) {
      console.error(err);
      setError("Failed to update field.");
    }
  };

  const renderValueInput = () => {
    switch (inputValue.field) {
      case "board":
        return (
          <select
            value={inputValue.value}
            onChange={handleInputChange}
            name="value"
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">Select a board</option>
            {BOARD_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        );
      case "pincode":
      case "cost":
        return (
          <input
            type="number"
            value={inputValue.value}
            onChange={handleInputChange}
            name="value"
            placeholder="Enter pincode"
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        );
      case "city":
      case "state":
      case "country":
        return (
          <input
            type="text"
            value={inputValue.value}
            onChange={handleInputChange}
            name="value"
            placeholder={`Enter ${inputValue.field}`}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        );
      default:
        return (
          <input
            type="text"
            value={inputValue.value}
            onChange={handleInputChange}
            name="value"
            placeholder={`Enter ${inputValue.field}`}
            className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Edit School Detail
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {/* Select Field */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase tracking-wide">
              Select Field
            </label>
            <select
              value={inputValue.field}
              onChange={handleInputChange}
              name="field"
              className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="">Select a field</option>
              <option value="school_name">School Name</option>
              <option value="board">Board</option>
              <option value="country">Country</option>
              <option value="state">State</option>
              <option value="city">City</option>
              <option value="pincode">Pincode</option>
              <option value="language_preference">Language Preference</option>
              <option value="timezone">Timezone</option>
              <option value="student_count">Students</option>
              <option value="teacher_count">Teachers</option>
              <option value="cost">Cost</option>
              <option value="allowed_domains">Allowed Domains</option>
            </select>
          </div>

          {/* Edit Value */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase tracking-wide">
              New Value
            </label>
            {renderValueInput()}
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 text-sm text-gray-700 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-900"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFieldModal;
