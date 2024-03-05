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
  return (
    <Breadcrumb>
      {paths.map((path, index) => {
        if (index === paths.length - 1)
          return (
            <Breadcrumb.Item
              key={index}
              active={index === paths.length - 1}
              as={"span"}>
              {/* {index === paths.length - 1 ? (
                path.label
              ) : (
                // <Link to={path.url}>{path.label}</Link>
              )} */}
              {path.label}
            </Breadcrumb.Item>
          );
        return (
          <Link key={index} to={path.url}>
            {path.label} /{" "}
          </Link>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
