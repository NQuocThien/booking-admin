import ShowAlert from "src/components/toasts/alerts";
import {
  Customer,
  useGetCustomerQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button, Form, InputGroup, Spinner, Table } from "react-bootstrap";
import SearchInputCpn from "src/components/toasts/InputSearch";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
function ListCustomerPage() {
  const token = getToken();
  const { refetch, data, loading, error } = useGetCustomerQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: `Bearer ${token}`,
    },
  });
  const [listCustomer, setListCustomer] = useState<Customer[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<Customer[]>();
  const handleSearch = () => {
    // console.log("search", searchTerm, listCustomer);

    setFiltered(() =>
      searchTerm
        ? listCustomer?.filter((c) =>
            c.fullname?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listCustomer
    );
  };
  useLayoutEffect(() => {
    setListCustomer(data?.getcustomers);
    // console.log("test re", data);
    handleSearch();
  }, [data, listCustomer]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <div className="overflow-x-auto">
      <SearchInputCpn
        onChange={(s: string) => setSearchTerm(s)}
        onSearch={handleSearch}
        value={searchTerm}
      />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên khách hàng</th>
            <th>Hồ sơ</th>
            <th>Lịch sử khám</th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((c, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.fullname}</td>
                <td>
                  <Button variant="outline-info">
                    <FaHistory />
                  </Button>
                </td>
                <td>
                  <Button variant="outline-info">
                    <ImProfile />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ListCustomerPage;
