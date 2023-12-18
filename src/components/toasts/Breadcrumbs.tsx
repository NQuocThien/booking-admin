import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface CustomBreadcrumbsProps {
  paths: BreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ paths }) => {
  const location = useLocation();

  return (
    <Breadcrumb>
      {paths.map((path, index) => (
        <Breadcrumb.Item
          key={index}
          active={index === paths.length - 1}
          as={index === paths.length - 1 ? "span" : undefined}>
          {index === paths.length - 1 ? (
            path.label
          ) : (
            <Link to={path.url}>{path.label}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
