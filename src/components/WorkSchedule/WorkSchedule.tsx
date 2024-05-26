import {
  EDayOfWeed,
  EStatusService,
  ExceptionInput,
  ScheduleInput,
  SessionInput,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/components/WorkSchedule.module.scss";
import { Button, Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import { FaRegCircleCheck, FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";
import ModalCpn from "../sub/Modal";
import { SiSessionize } from "react-icons/si";
import { FaSort } from "react-icons/fa";
import { getDayOfWeek, getQuickSessions } from "src/utils/getData";
import { checkSessionExist, formatDate } from "src/utils/contain";
import { EQuickAddSessions } from "src/utils/enum";
import moment from "moment";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { PiShieldWarningFill } from "react-icons/pi";
import { MdChecklist } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
interface IProp {
  workSchedule: WorkScheduleInput;
  setWorkSchedule: (workSchedule: WorkScheduleInput) => void;
}
enum ISessiongDuringDay {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Partial = "Partial",
}

function WorkScheduleCpn({ workSchedule, setWorkSchedule }: IProp) {
  const inputDateRef = useRef<HTMLInputElement>(null);
  const inputDateExcRef = useRef<HTMLInputElement>(null);
  const selectDayRef = useRef<HTMLSelectElement>(null);
  const inputTimeStartRef = useRef<HTMLInputElement>(null);
  const inputTimeEndRef = useRef<HTMLInputElement>(null);
  //use state
  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [sessionSelect, setSSessionSelect] = useState<SessionInput>();
  const [exceptions, setExceptions] = useState<ExceptionInput[]>();
  const [exception, setException] = useState<ExceptionInput>({
    dates: [],
    open: true,
    numbeSlot: 2,
  });
  const [modal, setModal] = useState<boolean>(false);
  const [modalExc, setModalExc] = useState<boolean>(false);

  //================================================================================================
  const handleAddDayOff = () => {
    if (inputDateRef.current && inputDateRef.current.value !== "") {
      if (
        inputDateRef.current.value &&
        !workSchedule.dayOff.find((day) => day === inputDateRef.current?.value)
      ) {
        setWorkSchedule({
          ...workSchedule,
          dayOff: [...workSchedule.dayOff, inputDateRef.current.value],
        });
      } else {
        alert("Ngày trùng lập chọn ngày khác !!");
      }
    } else {
      if (inputDateRef.current && inputDateRef.current.value === "") {
        alert("Vui lòng chọn ngày");
      }
    }
  };
  const handleAddDayExc = () => {
    if (inputDateExcRef.current && inputDateExcRef.current.value !== "") {
      const dateValue = inputDateExcRef.current.value;
      const dateValueFormatted = formatDate(dateValue);
      var allDate: string[] = [];
      exceptions?.map((ex) => ex.dates.map((date) => allDate.push(date)));
      if (
        inputDateExcRef.current.value &&
        !exception?.dates.find((day) => day === dateValueFormatted) &&
        !allDate.includes(dateValueFormatted)
      ) {
        setException(
          (pre) =>
            (pre && { ...pre, dates: [...pre.dates, dateValue] }) || {
              dates: [dateValue],
              open: true,
            }
        );
      } else {
        alert("Ngày trùng lập chọn ngày khác !!");
      }
    } else {
      if (inputDateRef.current && inputDateRef.current.value === "") {
        alert("Vui lòng chọn ngày");
      }
    }
  };
  const handleRemoveDayOff = (day: Date) => {
    const tpmDayOffs = workSchedule.dayOff;
    const indexDayOffRomve = tpmDayOffs.findIndex((day) => day === day);
    if (indexDayOffRomve !== -1) {
      tpmDayOffs.splice(indexDayOffRomve, 1);
      setWorkSchedule({
        ...workSchedule,
        dayOff: tpmDayOffs,
      });
    }
  };
  const handleRemoveDayExc = (day: Date) => {
    const tpmDayExcs = exception?.dates;
    if (tpmDayExcs) {
      const indexDayOffRomve = tpmDayExcs.findIndex((day) => day === day);
      if (indexDayOffRomve !== -1) {
        tpmDayExcs.splice(indexDayOffRomve, 1);
        setException(
          (pre) =>
            pre && {
              ...pre,
              dates: tpmDayExcs,
            }
        );
      }
    }
  };
  const hanldeAddSchedule = () => {
    if (selectDayRef.current) {
      if (selectDayRef.current && selectDayRef.current.value !== "") {
        if (
          !workSchedule.schedule.some(
            (sc) => sc.dayOfWeek === selectDayRef.current?.value
          )
        ) {
          const selectedDay: EDayOfWeed = selectDayRef.current
            .value as EDayOfWeed;
          setWorkSchedule({
            ...workSchedule,
            schedule: [
              ...workSchedule.schedule,
              { dayOfWeek: selectedDay, sessions: [] },
            ],
          });
        } else {
          alert("Ngày đã có !!!");
        }
      } else {
        alert("Vui lòng chọn ngày và nhập số lượng");
      }
    }
  };
  const currentDate = new Date().toISOString().split("T")[0];
  const hanldeAddSessions = (schedule: ScheduleInput) => {
    const editSchedules: ScheduleInput | undefined = workSchedule.schedule.find(
      (s) => s.dayOfWeek === schedule.dayOfWeek
    );
    setSchedule(editSchedules);
    setModal(true);
  };
  const handleAddSession = (t: ISessiongDuringDay) => {
    if (t === ISessiongDuringDay.Partial) {
      if (inputTimeStartRef.current && inputTimeEndRef.current) {
        setSchedule((pre) => {
          if (
            pre?.dayOfWeek &&
            inputTimeStartRef.current?.value &&
            inputTimeEndRef.current?.value
          ) {
            const newStart = inputTimeStartRef.current.value;
            const newEnd = inputTimeEndRef.current.value;
            const newSession: SessionInput = {
              startTime: newStart,
              endTime: newEnd,
            };
            if (
              schedule &&
              !checkSessionExist(newSession, schedule?.sessions)
            ) {
              return {
                ...pre,
                sessions: [
                  ...pre.sessions,
                  {
                    startTime: inputTimeStartRef.current?.value,
                    endTime: inputTimeEndRef.current?.value,
                  },
                ],
              };
            } else {
              return pre;
            }
          } else return pre;
        });
      }
    }
  };

  const handleRemoveSession = (session: SessionInput) => {
    if (schedule?.sessions) {
      const indexToRemove: number = schedule?.sessions.findIndex(
        (ss) =>
          ss.startTime === session.startTime && ss.endTime === session.endTime
      );
      if (indexToRemove !== -1) {
        const tpmSession: SessionInput[] | undefined = schedule?.sessions;
        tpmSession?.splice(indexToRemove, 1);
        setSchedule((pre) => {
          if (pre?.dayOfWeek) {
            return {
              ...pre,
              sessions: tpmSession,
            };
          }
        });
      }
    }
  };
  const quickAddSessions = (type: EQuickAddSessions) => {
    if (
      inputTimeStartRef.current &&
      inputTimeStartRef.current.value !== "" &&
      inputTimeEndRef.current &&
      inputTimeEndRef.current.value !== ""
    ) {
      const startSchedule = inputTimeStartRef.current.value;
      const endSchedule = inputTimeEndRef.current.value;
      const sessions: SessionInput[] = getQuickSessions(
        type,
        startSchedule,
        endSchedule
      );
      setSchedule((pre) => {
        if (pre?.dayOfWeek) {
          return {
            ...pre,
            sessions: sessions,
          };
        }
        return pre;
      });
    }
  };
  const handleSortSchedule = () => {
    setSchedule((pre) => {
      if (pre?.sessions) {
        const sortedSessions = pre?.sessions.sort((s1, s2) => {
          const s1Start: moment.Moment = moment(s1.startTime, "HH:mm");
          const s2Start: moment.Moment = moment(s2.startTime, "HH:mm");
          return s1Start.diff(s2Start);
        });
        if (pre?.dayOfWeek) {
          return {
            ...pre,
            sessions: sortedSessions,
          };
        }
      }
      return pre;
    });
  };
  const handleSaveSchedule = () => {
    const tmpSchedule: ScheduleInput[] = workSchedule.schedule;
    const currentScheduleIndex: number = tmpSchedule.findIndex(
      (item) => item.dayOfWeek === schedule?.dayOfWeek
    );
    if (currentScheduleIndex !== -1 && schedule) {
      tmpSchedule[currentScheduleIndex] = {
        dayOfWeek: tmpSchedule[currentScheduleIndex].dayOfWeek,
        sessions: schedule.sessions,
      };
      setWorkSchedule({
        ...workSchedule,
        schedule: tmpSchedule,
      });
    }
    setModal(false);
  };
  const handleRemoveSchedule = (scheduleRemove: ScheduleInput) => {
    const indexRemove = workSchedule.schedule.findIndex(
      (currSchedule) => currSchedule.dayOfWeek === scheduleRemove.dayOfWeek
    );
    if (indexRemove !== -1) {
      const tmpSchedule: ScheduleInput[] = workSchedule.schedule;
      tmpSchedule.splice(indexRemove, 1);
      setWorkSchedule({
        ...workSchedule,
        schedule: tmpSchedule,
      });
    }
  };
  const handleClickException = (ss: SessionInput) => {
    const sessionClicked = schedule?.sessions.find(
      (s) => s.startTime === ss.startTime && s.endTime === ss.endTime
    );
    setSSessionSelect(sessionClicked);
    const exceptions: ExceptionInput[] | undefined =
      sessionClicked?.exceptions || undefined;
    setExceptions(exceptions);
    setModalExc(true);
  };
  const handleClickAddExc = () => {
    if (exception.dates.length > 0) {
      const currentDates = exception.dates;
      var tmp = false;
      if (exceptions) {
        for (const ex of exceptions) {
          for (const d of ex.dates) {
            if (currentDates.includes(d)) {
              tmp = true;
              alert(`Trùng ngày ${d}`);
              break;
            }
          }
          if (tmp) break;
        }
      }
      if (tmp) return;
      setExceptions((pre) => (pre && [...pre, exception]) || [exception]);
      setException({ dates: [], open: true, numbeSlot: 2 });
    }
  };
  const handleSaveExc = () => {
    setSchedule((pre) => {
      if (pre) {
        const sSEdit = pre.sessions.map((ss) => {
          if (
            ss.startTime === sessionSelect?.startTime &&
            ss.endTime === sessionSelect?.endTime
          ) {
            var newSS: SessionInput = { ...ss };
            newSS.exceptions = exceptions;
            return newSS;
          }
          return ss;
        });
        var newSchedule: ScheduleInput = { ...pre };
        newSchedule.sessions = sSEdit;
        return newSchedule;
      }
      return pre;
    });
    setExceptions([]);
    setModalExc(false);
  };

  return (
    <div className={`${s.main} `}>
      <div className={`${s.main__deliver}`}></div>
      <Form.Group className="mb-3" controlId="formGroupStatus">
        <Form.Label>Trạng thái:</Form.Label>
        <Form.Select
          onChange={(e) => {
            const statusValue: EStatusService = e.target
              .value as EStatusService;
            setWorkSchedule({
              ...workSchedule,
              status: statusValue,
            });
          }}
          value={workSchedule.status}>
          <option
            value={EStatusService.Open}
            // selected={workSchedule.status === EStatusService.Open}
          >
            Mở
          </option>
          <option
            value={EStatusService.Close}
            // selected={workSchedule.status === EStatusService.Close}
          >
            Đóng
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupStatus">
        <Form.Label>Số lượng tối đa 1 phiên khám:</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => {
            const slot: number = +e.target.value;
            setWorkSchedule({
              ...workSchedule,
              numberSlot: slot,
            });
          }}
          max={20}
          min={2}
          value={workSchedule.numberSlot}
          placeholder="5"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Ngày nghỉ:</Form.Label>
        <div className={s.main__dayOff}>
          {workSchedule.dayOff.map((day, i) => (
            <div key={i} className={s.main__dayOff_item}>
              <span>{formatDate(day)}</span>
              <div className={`${s.close}`}>
                <FaRegTrashCan
                  onClick={() => {
                    handleRemoveDayOff(day);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <input
            ref={inputDateRef}
            type="date"
            name=""
            id=""
            min={currentDate}
          />
          <Button
            variant="outline-success"
            className="mx-3 "
            onClick={handleAddDayOff}>
            <FaPlus />
          </Button>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Lịch làm việc:</Form.Label>

        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">Ngày trong tuần</th>
              <th className="text-center">Phiên làm việc</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {workSchedule.schedule.map((s, i) => (
              <tr key={i}>
                <td> {getDayOfWeek(s.dayOfWeek)}</td>
                <td
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}>
                  {s.sessions.map((session, i) => (
                    <span className="m-1 p-2 border border-success" key={i}>
                      {session.startTime}
                      {"-"}
                      {session.endTime}
                    </span>
                  ))}
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => hanldeAddSessions(s)}>
                    <FaPlus />
                  </Button>
                </td>
                <td>
                  <RiDeleteBack2Fill
                    className="text-danger"
                    onClick={() => handleRemoveSchedule(s)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <p>Chọn ngày</p>
          <Form.Select defaultValue={undefined} ref={selectDayRef}>
            <option
              value={EDayOfWeed.Monday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Monday
              )}>
              Thứ 2
            </option>
            <option
              value={EDayOfWeed.Tuesday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Tuesday
              )}>
              Thứ 3
            </option>
            <option
              value={EDayOfWeed.Wednesday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Wednesday
              )}>
              Thứ 4
            </option>
            <option
              value={EDayOfWeed.Thursday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Thursday
              )}>
              Thứ 5
            </option>
            <option
              value={EDayOfWeed.Friday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Friday
              )}>
              Thứ 6
            </option>
            <option
              value={EDayOfWeed.Saturday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Saturday
              )}>
              Thứ 7
            </option>
            <option
              value={EDayOfWeed.Sunday}
              disabled={workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Sunday
              )}>
              Chủ nhật
            </option>
          </Form.Select>
          <Button
            variant="outline-success"
            className="my-3 "
            onClick={hanldeAddSchedule}>
            Thêm ngày <FaPlus />
          </Button>
        </div>
      </Form.Group>

      {/* SESSION MODAL */}
      <ModalCpn
        handleClose={() => {
          setModal(false);
        }}
        handleSave={() => {
          handleSaveSchedule();
        }}
        openRequest={modal}
        headerText={`Thiết lập phiên làm việc "${
          schedule?.dayOfWeek && getDayOfWeek(schedule?.dayOfWeek)
        }"`}
        textButtonClose="Hủy"
        textButtonSave="Lưu các phiên">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>
            Các phiên:{" "}
            <Button
              variant="outline-success"
              size="sm"
              onClick={handleSortSchedule}>
              <FaSort />
            </Button>
          </Form.Label>
          <div className={s.main__dayOff}>
            {schedule?.sessions.map((ss, i) => (
              <div key={i} className={s.main__dayOff_item}>
                <div className={`${s.content}`}>
                  {ss.startTime} {" - "} {ss.endTime}
                </div>
                <div className={s.controls}>
                  <div>
                    <PiShieldWarningFill
                      className="text-warning"
                      onClick={() => handleClickException(ss)}
                    />
                  </div>
                  <div>
                    <FaRegTrashCan onClick={() => handleRemoveSession(ss)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center gap-2">
            <div>Bắt đầu:</div>
            <input
              ref={inputTimeStartRef}
              type="time"
              name=""
              id=""
              defaultValue={"07:00"}
            />
            <div>Kết thúc:</div>
            <input
              ref={inputTimeEndRef}
              type="time"
              name=""
              id=""
              defaultValue={"17:00"}
            />
            <Button
              variant="outline-success"
              className="mx-3 "
              onClick={() => {
                handleAddSession(ISessiongDuringDay.Partial);
              }}>
              <FaPlus />
            </Button>
          </div>
          <div className="my-2">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <SiSessionize /> Tạo nhanh
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => quickAddSessions(EQuickAddSessions.Session15)}>
                  Phiên khám 15'
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => quickAddSessions(EQuickAddSessions.Session30)}>
                  Phiên khám 30'
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => quickAddSessions(EQuickAddSessions.Session60)}>
                  Phiên khám 60'
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Form.Group>
      </ModalCpn>
      {/* EXCEPTION MODAL */}
      <ModalCpn
        handleClose={() => {
          setModalExc(false);
        }}
        handleSave={() => {
          handleSaveExc();
        }}
        openRequest={modalExc}
        headerText={`Thiết lập ngoại lệ phiên làm việc "${sessionSelect?.startTime} - ${sessionSelect?.endTime}"`}
        textButtonClose="Hủy"
        textButtonSave="Lưu ngoại lệ">
        <div className="mb-3">
          <Form.Label>
            <h6>Các ngoại lệ: </h6>
            {/* <Button
                variant="outline-success"
                size="sm"
                onClick={handleSortSchedule}>
                <FaSort />
              </Button> */}
          </Form.Label>
          <div style={{ maxHeight: 200, overflowY: "scroll" }}>
            {exceptions?.map((ex, i) => (
              <Row className="border m-1 p-2" key={`ex-${i}`}>
                <Col className="col-10">
                  <div className="d-flex ">
                    <span className="fw-medium">
                      <i className="bi bi-calendar-check"></i>
                      <SlCalender className="text-primary me-1" />
                      Ngày:
                    </span>
                    {ex.dates.map((date, key) => (
                      <span className="me-2" key={`data-${key}`}>
                        {formatDate(date)}{" "}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex">
                    <span className="fw-medium">
                      {" "}
                      <FaRegCircleCheck className="text-primary me-1" />
                      Trạng thái:
                    </span>
                    {(ex.open && (
                      <span className="fw-medium text-primary">
                        Đang áp dụng
                      </span>
                    )) || (
                      <span className="fw-medium text-primary">
                        Không áp dụng
                      </span>
                    )}
                  </div>
                  <div className="d-flex">
                    <span className="fw-medium me-1">
                      {" "}
                      <MdChecklist className="text-primary" /> Số lượng:
                    </span>
                    <span>{ex.numbeSlot}</span>
                  </div>
                </Col>
                <Col>
                  <div className="text-end">
                    <Button size="sm" variant="outline-danger">
                      <FaRegTrashCan
                        onClick={() => {
                          setExceptions((pre) => {
                            if (pre) {
                              var newExs = [...pre];
                              newExs.splice(i, 1);
                              return newExs;
                            }
                            return undefined;
                          });
                        }}
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
          <Row className="border-top border-dark py-2">
            <Form.Group className="mb-3" controlId="form-dates">
              <Form.Label>Ngày áp dụng:</Form.Label>
              <div className={s.main__dayOff}>
                {exception?.dates.map((day, i) => (
                  <div key={i} className={s.main__dayOff_item}>
                    <span>{formatDate(day)}</span>
                    <div className={`${s.close}`}>
                      <FaRegTrashCan
                        onClick={() => {
                          handleRemoveDayExc(day);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <input
                  ref={inputDateExcRef}
                  type="date"
                  name=""
                  id=""
                  min={currentDate}
                />
                <Button
                  variant="outline-success"
                  className="mx-3 "
                  onClick={handleAddDayExc}>
                  <FaPlus />
                </Button>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-open">
              <Form.Label>trạng thái:</Form.Label>
              <Form.Check
                type="switch"
                label={`Mở`}
                checked={exception?.open}
                onChange={() =>
                  setException((pre) => ({ ...pre, open: !pre.open }))
                }
                id={`open-true`}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-slot">
              <Form.Label>Số lượng tối đa:</Form.Label>
              <Form.Control
                type="number"
                defaultValue={exception?.numbeSlot || 2}
                onChange={(e) => {
                  const number = +e.currentTarget.value;
                  setException((pre) => ({ ...pre, numbeSlot: number }));
                }}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="outline-success"
              onClick={() => handleClickAddExc()}>
              Thêm ngoại lệ
            </Button>
          </Row>
        </div>
      </ModalCpn>
    </div>
  );
}
export default WorkScheduleCpn;
