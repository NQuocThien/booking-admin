import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export interface IBreadcrumbItem {
  label: string;
  url: string;
  back?: boolean;
}

export interface ICustomBreadcrumbsProps {
  paths: IBreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<ICustomBreadcrumbsProps> = ({ paths }) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb>
      {paths.map((path, index) => {
        if (index === paths.length - 1)
          return (
            <Breadcrumb.Item
              key={index}
              active={index === paths.length - 1}
              as={"span"}>
              {path.label}
            </Breadcrumb.Item>
          );
        return (
          <>
            {path.back && (
              <div
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => navigate(-1)}
                className="me-1 pe-auto link-opacity-75-hover">
                {path.label} /
              </div>
            )}
            {!path.back && (
              <Link key={index} to={path.url} className="me-1">
                {path.label} /
              </Link>
            )}
          </>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
