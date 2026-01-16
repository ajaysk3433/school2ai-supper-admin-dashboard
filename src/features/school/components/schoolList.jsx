// const schools = [
//   { id: 1, name: "Green Valley High School", status: "Active" },
//   { id: 2, name: "Sunrise Public School", status: "Inactive" },
//   { id: 3, name: "Riverdale Academy", status: "Active" },
// ];

const SchoolList = ({ schools }) => {
  return (
    <div className="p-6">
      <table className="w-full border border-slate-300 rounded-lg overflow-hidden ">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-300 px-4 py-2 text-left">ID</th>
            <th className="border border-slate-300 px-4 py-2 text-left">
              School
            </th>
            <th className="border border-slate-300 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {schools.map((school) => (
            <SchoolItem key={school.school_id} school={school} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolList;

const SchoolItem = ({ school }) => {
  return (
    <tr className="hover:bg-slate-50 ">
      <td className="border-b border-slate-300 px-4 py-4 text-center">
        {school.school_id}
      </td>

      <td className="border-b border-slate-300 px-4 py-4">
        {school.school_name}
      </td>

      <td className="border-b border-slate-300 px-4 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            school.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {school.status}
        </span>
      </td>
    </tr>
  );
};
