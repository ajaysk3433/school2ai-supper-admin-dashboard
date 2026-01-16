export default function UserForm() {
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        User & School Details
      </h2>

      <form className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Email</label>
          <input
            type="email"
            placeholder="ajay.doe@example.com"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="+919876543220"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Password */}
        {/* <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div> */}

        {/* Role ID */}
        {/* <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Role ID</label>
          <input
            type="number"
            placeholder="2"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div> */}

        {/* School ID */}
        {/* <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            School ID
          </label>
          <input
            type="number"
            placeholder="101"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div> */}

        {/* School Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            School Name
          </label>
          <input
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
            rows={3}
            placeholder="Math teacher at ABC International School"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Country</label>
          <input
            type="text"
            placeholder="India"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">State</label>
          <input
            type="text"
            placeholder="Karnataka"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">City</label>
          <input
            type="text"
            placeholder="Bengaluru"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Pincode */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Pincode</label>
          <input
            type="text"
            placeholder="560001"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Timezone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Timezone</label>
          <input
            type="text"
            placeholder="Asia/Kolkata"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Cost */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Cost</label>
          <input
            type="number"
            placeholder="12000"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Student Count */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Student Count
          </label>
          <input
            type="number"
            placeholder="-850"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Teacher Count */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Teacher Count
          </label>
          <input
            type="number"
            placeholder="45"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Language Preference */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Language Preference
          </label>
          <input
            type="text"
            placeholder="English"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Board */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Board</label>
          <input
            type="text"
            placeholder="CBSE"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">Status</label>
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Website Enabled */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-600">
            Website Enabled
          </label>
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option>true</option>
            <option>false</option>
          </select>
        </div>

        {/* Allowed Domains */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-600">
            Allowed Domains
          </label>
          <input
            type="text"
            placeholder="yet to implement"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </form>

      {/* Actions */}
      <div className="mt-8 flex justify-end gap-3">
        <button className="rounded-lg border px-5 py-2 text-sm text-slate-600 hover:bg-slate-100">
          Cancel
        </button>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  );
}
