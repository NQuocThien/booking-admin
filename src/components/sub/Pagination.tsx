import { ReactNode, useState } from "react";
import { Pagination } from "react-bootstrap";

interface IProps {
  totalPage: number;
  size?: "sm" | "lg";
  setPageActive: (pageNumber: number) => void;
}
function PaginationCpn(props: IProps) {
  const { setPageActive, size = "sm", totalPage } = props;
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  const [active, setAcive] = useState<number>(1);
  const handleClick = (pageClicked: number) => {
    setAcive(pageClicked);
    setPageActive(pageClicked);
  };
  const handleClickNext = () => {
    if (active !== pageNumbers[pageNumbers.length - 1]) {
      setPageActive(active + 1);
      setAcive((pre) => pre + 1);
    }
  };
  const handleClickPrevious = () => {
    if (active !== pageNumbers[0]) {
      setPageActive(active - 1);
      setAcive((pre) => pre - 1);
    }
  };
  const handleClickStart = () => {
    if (active !== pageNumbers[0]) {
      setAcive(pageNumbers[0]);
      setPageActive(pageNumbers[0]);
    }
  };
  const handleClickEnd = () => {
    if (active !== pageNumbers[pageNumbers.length - 1]) {
      setAcive(pageNumbers[pageNumbers.length - 1]);
      setPageActive(pageNumbers[pageNumbers.length - 1]);
    }
  };
  const renderPagination = (): ReactNode => {
    return pageNumbers.map((page, index) => {
      if (index === 0 || index === totalPage - 1) {
        return (
          <Pagination.Item
            key={index}
            active={active === page}
            onClick={() => handleClick(page)}>
            {page}
          </Pagination.Item>
        );
      } else {
        if (page <= active + 2 && page >= active - 2) {
          return (
            <Pagination.Item
              key={index}
              active={active === page}
              onClick={() => handleClick(page)}>
              {page}
            </Pagination.Item>
          );
        } else if (page === active - 3 || page === active + 3) {
          return <Pagination.Ellipsis />;
        }
      }
      return <span></span>;
    });
  };
  return (
    <Pagination>
      <Pagination.First onClick={handleClickStart} />
      <Pagination.Prev onClick={handleClickPrevious} />
      {renderPagination()}
      <Pagination.Next onClick={handleClickNext} />
      <Pagination.Last onClick={handleClickEnd} />
    </Pagination>
  );
}
export default PaginationCpn;
