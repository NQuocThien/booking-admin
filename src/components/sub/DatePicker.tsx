import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "date-fns/locale/vi";
import viLocale from "date-fns/locale/vi";
import { Button } from "react-bootstrap";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Locale, format } from "date-fns";
interface IPorps {
  onChange: (date: Date) => void;
  filterDate?: (date: Date) => boolean;
  currentValue?: string;
}
const DatePickerCpn: React.FC<IPorps> = (props) => {
  const { filterDate, onChange, currentValue = undefined } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    (currentValue && new Date(currentValue)) || new Date()
  );
  useEffect(() => {
    if (currentValue) setSelectedDate(new Date(currentValue));
  }, [currentValue]);
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => {
        if (date) {
          const formattedDate = format(date, "yyyy-MM-dd");
          onChange(date);
        }
        setSelectedDate(date);
      }}
      dateFormat="dd/MM/yyyy"
      todayButton="Hôm nay"
      locale={viLocale as unknown as Locale}
      filterDate={filterDate}
      customInput={
        <Button variant="success" className="d-flex align-items-center gap-1">
          <MdOutlineCalendarMonth /> {selectedDate?.getFullYear()}-
          {selectedDate && selectedDate?.getMonth() + 1}-
          {selectedDate?.getDate()}
        </Button>
      }
    />
  );
};

export default DatePickerCpn;
