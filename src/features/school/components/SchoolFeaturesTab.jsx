import { toggleFeature } from "../api/SchoolAPI";
import { useState } from "react";
const SchoolFeaturesTab = ({ features, schoolId }) => {
  const [localFeatures, setLocalFeatures] = useState(features);
  const toggle = async (featureId) => {
    // optimistic update
    setLocalFeatures((prev) =>
      prev.map((f) =>
        f.feature_id === featureId ? { ...f, is_enabled: !f.is_enabled } : f,
      ),
    );

    try {
      await toggleFeature({ schoolId, featureId });
    } catch (error) {
      // rollback on failure
      setLocalFeatures((prev) =>
        prev.map((f) =>
          f.feature_id === featureId ? { ...f, is_enabled: !f.is_enabled } : f,
        ),
      );
      console.error(error);
    }
  };
  return (
    <div className="px-8 py-6">
      <div className="bg-white border rounded-lg divide-y">
        {localFeatures.map((feature, index) => (
          <div
            key={`${feature.feature_id}-${index}`}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
          >
            {/* Feature Name */}
            <span className="text-sm font-medium text-gray-800">
              {feature.feature_name}
            </span>

            {/* Toggle (UI only) */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={() => toggle(feature.feature_id)}
                checked={feature.is_enabled}
                type="checkbox"
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                              peer-checked:bg-green-500
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                              after:bg-white after:border after:rounded-full after:h-5 after:w-5 
                              after:transition-all peer-checked:after:translate-x-full"
              ></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolFeaturesTab;
