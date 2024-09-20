import React from "react";
import {
  AnalyticsIcon,
  BuoyIcon,
  CalenderIcon,
  ComponentIcon,
  DashIcon,
  DBIcon,
  SalesIcon,
  SeoIcon,
  SettingsIcon,
  TasksIcon,
  UsersIcon,
} from "./Icons";
import IconWrapper from "./IconWrapper";

interface SidebarProps {
  openSidebar: boolean;
  navigate: (pageName: string) => void;
}

const AdminSidebar = ({ openSidebar, navigate }: SidebarProps) => {
  
  const iconData = [
    { id: 1, IconComponent: DashIcon, text: "Dashboard" },
    { id: 2, IconComponent: UsersIcon, text: "Users" },
    { id: 3, IconComponent: DBIcon, text: "Databases" },
    { id: 4, IconComponent: ComponentIcon, text: "Components" },
    { id: 5, IconComponent: AnalyticsIcon, text: "Analytics" },
    { id: 6, IconComponent: SeoIcon, text: "SEO" },
    { id: 7, IconComponent: SalesIcon, text: "Sales" },
    { id: 8, IconComponent: TasksIcon, text: "Tasks" },
    { id: 9, IconComponent: CalenderIcon, text: "Calendar" },
  ];

  const bottomIconData = [
    { id: 10, IconComponent: BuoyIcon, text: "Help" },
    { id: 11, IconComponent: SettingsIcon, text: "Settings" },
  ];

  return (
    <div className={`sidebar ${openSidebar ? "open" : "closed"}`}>
      <ul className="flex-col items-center py-6 mx-5">
        {iconData.map(({ id, IconComponent, text }) => (
          <IconWrapper
            key={id}
            openSidebar={openSidebar}
            IconComponent={IconComponent}
            text={text}
            onClick={() => navigate(text)}
          />
        ))}
        <hr className={`hr ${openSidebar ? "hr-open" : "hr-closed"}`} />
        {bottomIconData.map(({ id, IconComponent, text }) => (
          <IconWrapper
            key={id}
            openSidebar={openSidebar}
            IconComponent={IconComponent}
            text={text}
            onClick={() => navigate(text)}
          />
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
