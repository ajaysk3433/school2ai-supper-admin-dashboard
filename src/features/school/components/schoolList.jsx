import { useNavigate } from "react-router";
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
              State
            </th>
            <th className="border border-slate-300 px-4 py-2 text-left">
              Cost
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
  const navigate = useNavigate();
  return (
    <tr className="hover:bg-slate-50 ">
      <td className="border-b border-slate-300 px-4 py-4 text-center">
        {school.school_id}
      </td>

      <td
        onClick={() => navigate(`/school/view/${school.school_id}`)}
        className="border-b border-slate-300 px-4 py-4 underline cursor-pointer"
      >
        {school.school_name}
      </td>

      <td className="border-b border-slate-300 px-4 py-4 text-center">
        {school.state}
      </td>

      <td className="border-b border-slate-300 px-4 py-4 text-center">
        {school.cost}
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
