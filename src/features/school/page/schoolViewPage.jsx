import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSchoolById, getFeaturesById } from "../api/SchoolAPI";
import SchoolHeaderUI from "../components/SchoolHeaderUI";
import SchoolDetailsTab from "../components/SchoolDetailsTab";
import SchoolFeaturesTab from "../components/SchoolFeaturesTab";

const SchoolEditePage = () => {
  const [tabs, setTabs] = useState("details");
  const [school, setSchool] = useState({});
  const [features, setFeatures] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const schoolData = await getSchoolById(id);
        setSchool(schoolData);
        const featuresData = await getFeaturesById(id);

        setFeatures(featuresData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <SchoolHeaderUI setTabs={setTabs} tabs={tabs} school={school} />
      {tabs == "details" && <SchoolDetailsTab school={school} />}
      {tabs == "features" && (
        <SchoolFeaturesTab features={features} schoolId={id} />
      )}
    </>
  );
};

export default SchoolEditePage;
