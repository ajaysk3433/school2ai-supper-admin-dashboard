const SchoolHeaderUI = ({ setTabs, tabs, school }) => {
  const firstLetter = school?.school_name?.[0]?.toUpperCase();
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-6 px-8 py-6 border-b">
        {/* Avatar */}
        <img
          src={`https://placehold.co/50x50?text=${firstLetter}`}
          alt="User"
          className="w-20 h-20 rounded-full bg-gray-300"
        />

        {/* Info */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-gray-800">
              {school.school_name}
            </h1>
            <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              Active
            </span>
          </div>

          <div className="text-sm text-gray-500">
            <span className="mr-4">Teachers {school.teacher_count}</span>
            <span>Students {school.student_count}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-8">
        <div className="flex gap-10  text-sm text-gray-500">
          <button
            onClick={() => setTabs("details")}
            className={`py-4 ${tabs === "details" ? "text-gray-800 border-b-2 border-gray-800 font-medium" : "hover:text-gray-800"}`}
          >
            Details
          </button>
          <button
            onClick={() => setTabs("features")}
            className={`py-4 ${tabs === "features" ? "text-gray-800 border-b-2 border-gray-800 font-medium" : "hover:text-gray-800"}`}
          >
            Features
          </button>
          <button className="py-4 hover:text-gray-800">Permissions</button>
          <button className="py-4 hover:text-gray-800">Limit</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolHeaderUI;
