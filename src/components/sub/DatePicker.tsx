import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "date-fns/locale/vi";
import viLocale from "date-fns/locale/vi";
import { Button } from "react-bootstrap";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Locale, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
interface IPorps {
  onChange: (date: Date) => void;
  filterDate?: (date: Date) => boolean;
}
const DatePickerCpn: React.FC<IPorps> = (props) => {
  const { filterDate, onChange } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => {
        if (date) {
          const formattedDate = format(date, "yyyy-MM-dd");
          console.log("Formatted Date:", formattedDate);
          onChange(date);
        }
        setSelectedDate(date);
      }}
      dateFormat="dd/MM/yyyy"
      todayButton="Hôm nay"
      locale={viLocale as unknown as Locale}
      filterDate={filterDate}
      customInput={
        <Button size="sm" className="d-flex align-items-center gap-1">
          <MdOutlineCalendarMonth /> {selectedDate?.getFullYear()}-
          {selectedDate && selectedDate?.getMonth() + 1}-
          {selectedDate?.getDate()}
        </Button>
      }
    />
  );
};

export default DatePickerCpn;
