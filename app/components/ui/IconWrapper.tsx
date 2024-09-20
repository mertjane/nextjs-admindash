import React from "react";

interface IconWrapperProps {
  openSidebar: boolean;
  IconComponent: React.ComponentType<{ openSidebar: boolean }>;
  text: string;
  onClick: () => void;
}

const IconWrapper = ({
  openSidebar,
  IconComponent,
  text,
  onClick,
}: IconWrapperProps) => {
  return (
    <li
      onClick={onClick}
      title={text}
      className={`siderbar-list-item ${
        openSidebar ? "list-opened" : "list-closed"
      }`}
    >
      <IconComponent openSidebar={openSidebar} />
      {text}
    </li>
  );
};

export default IconWrapper;
