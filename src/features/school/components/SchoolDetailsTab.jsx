import { useState } from "react";
import EditFieldModal from "./schoolDetailsEdit";
const SchoolDetailsTab = ({ school }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Left column */}
        <DetailItem label="School Name" value={school?.school_name} />
        <DetailItem label="Board" value={school?.board} />

        <DetailItem label="Country" value={school?.country} />
        <DetailItem label="State" value={school?.state} />

        <DetailItem label="City" value={school?.city} />
        <DetailItem label="Pincode" value={school?.pincode} />

        <DetailItem
          label="Language Preference"
          value={school?.language_preference}
        />
        <DetailItem label="Timezone" value={school?.timezone || "—"} />

        {/* Right column */}
        <DetailItem label="Students" value={school?.student_count} />
        <DetailItem label="Teachers" value={school?.teacher_count} />

        <DetailItem label="Cost" value={`₹ ${school?.cost}`} />
        <DetailItem
          label="Onboard Date"
          value={new Date(school?.onboard_date).toLocaleDateString()}
        />

        <DetailItem
          label="Website Enabled"
          value={school?.website_enabled ? "Yes" : "No"}
        />
        <DetailItem label="Allowed Domains" value={school?.allowed_domains} />
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mt-10 text-sm text-white bg-gray-800 rounded-md cursor-pointer"
      >
        Edit Details
      </button>
      <EditFieldModal
        isOpen={isOpen}
        onClose={setIsOpen}
        id={school.school_id}
      />
    </div>
  );
};

const DetailItem = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-500 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-sm font-medium text-gray-800">{value}</span>
    </div>
  );
};

export default SchoolDetailsTab;
