import inputHandler from "../../hook/input.handler";
import { createSchool } from "./schoolOnboardingAPI";
const SchoolOnboarding = () => {
  const [inputValue, setUserInput] = inputHandler({
    name: "",
    email: "",
    mobileNo: "",
    schoolName: "",
    description: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    cost: "",
    studentCount: "",
    teacherCount: "",
    language: "",
    board: "",
    status: "",
    website: false,
    domains: "",
    timeZone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      inputValue.cost = Number(inputValue.cost);
      inputValue.studentCount = Number(inputValue.studentCount);
      inputValue.teacherCount = Number(inputValue.teacherCount);
      inputValue.website = Boolean(inputValue.website);

      const data = await createSchool(inputValue);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        School Details
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Full Name <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.name}
              onChange={setUserInput}
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Email <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.email}
              onChange={setUserInput}
              name="email"
              type="email"
              placeholder="ajay.doe@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Mobile Number <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.mobileNo}
              onChange={setUserInput}
              name="mobileNo"
              type="text"
              placeholder="+919876543220"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* School Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              School Name <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.schoolName}
              onChange={setUserInput}
              name="schoolName"
              type="text"
              placeholder="ABC International School"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-600">
              Description
            </label>
            <textarea
              value={inputValue.description}
              onChange={setUserInput}
              name="description"
              rows={3}
              placeholder="Math teacher at ABC International School"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Country <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.country}
              onChange={setUserInput}
              name="country"
              type="text"
              placeholder="India"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* State */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              State <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.state}
              onChange={setUserInput}
              name="state"
              type="text"
              placeholder="Karnataka"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              City <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.city}
              onChange={setUserInput}
              name="city"
              type="text"
              placeholder="Bengaluru"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Pincode */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Pincode <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.pincode}
              onChange={setUserInput}
              name="pincode"
              type="number"
              placeholder="560001"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Timezone */}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Timezone <span className="text-red-300">*</span>
            </label>
            <select
              required
              value={inputValue.timeZone}
              onChange={setUserInput}
              name="timeZone"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              <option>select</option>
              <option value="UTC +5:30">UTC +5:30</option>
              <option value="UTC +6:30">UTC +6:30</option>
            </select>
          </div>

          {/* Cost */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">Cost </label>
            <input
              value={inputValue.cost}
              onChange={setUserInput}
              name="cost"
              type="number"
              placeholder="12000"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Student Count */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Student Count <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.studentCount}
              onChange={setUserInput}
              name="studentCount"
              type="number"
              placeholder="-850"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Teacher Count */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Teacher Count <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.teacherCount}
              onChange={setUserInput}
              name="teacherCount"
              type="number"
              placeholder="45"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Language Preference */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Language Preference <span className="text-red-300">*</span>
            </label>
            <input
              required
              value={inputValue.language}
              onChange={setUserInput}
              name="language"
              type="text"
              placeholder="English"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Board */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Board <span className="text-red-300">*</span>
            </label>
            <select
              required
              value={inputValue.board}
              onChange={setUserInput}
              name="board"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              <option>select</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="State">State</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Status <span className="text-red-300">*</span>
            </label>
            <select
              required
              value={inputValue.status}
              onChange={setUserInput}
              name="status"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              <option>select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Website Enabled */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-600">
              Website Enabled <span className="text-red-300">*</span>
            </label>
            <select
              value={inputValue.website}
              onChange={setUserInput}
              name="website"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              <option>select</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          {/* Allowed Domains */}
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-medium text-slate-600">
              Allowed Domains
            </label>
            <input
              value={inputValue.domains}
              onChange={setUserInput}
              name="domains"
              type="text"
              placeholder="yet to implement"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </div>
        {/* Actions */}
        <div className="mt-8 flex justify-end gap-3">
          <button className="rounded-lg border px-5 py-2 text-sm text-slate-600 hover:bg-slate-100 cursor-pointer">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolOnboarding;
