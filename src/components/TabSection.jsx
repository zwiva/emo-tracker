import { useState } from "react";
import Calendar from "./Calendar";
import BasicCycleDescription from "./Description";
import RecommendedActivities from "./Activities";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Description", component: <BasicCycleDescription /> },
    { id: 1, label: "Calendar", component: <Calendar /> },
    { id: 2, label: "Activities", component: <RecommendedActivities /> },
  ];

  return (
    <div className="w-90" style={{ maxWidth: '600px' }}>

      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-05 px-1 ${activeTab === tab.id ? "text-pink" : "text-gray"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="border rounded bg-gray-100">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabSection;