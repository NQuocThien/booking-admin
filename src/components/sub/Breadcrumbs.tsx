import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";

export interface IBreadcrumbItem {
  label: string;
  url: string;
}

export interface ICustomBreadcrumbsProps {
  paths: IBreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<ICustomBreadcrumbsProps> = ({ paths }) => {
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
