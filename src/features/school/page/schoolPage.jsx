import { IoSearchOutline } from "react-icons/io5";
import SchoolList from "../components/schoolList";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getSchool } from "../api/SchoolAPI";
const School = () => {
  const [schools, setSchool] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getSchool();

        setSchool(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="">
      <div className="flex justify-between p-6">
        <h1 className="text-2xl">Schools</h1>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="h-10 rounded-l-lg border border-slate-300 px-3 text-sm focus:outline-none"
          />

          <button className="h-10 border border-l-0 border-slate-300 rounded-r-lg px-3 flex items-center justify-center">
            <IoSearchOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
      <SchoolList schools={schools} />
    </div>
  );
};

export default School;
