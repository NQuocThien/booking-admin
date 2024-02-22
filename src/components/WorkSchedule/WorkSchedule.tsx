import {
  EDayOfWeed,
  EStatusService,
  ScheduleInput,
  SessionInput,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/components/WorkSchedule.module.scss";
import { Button, Dropdown, Form, Table } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";
import ModalCpn from "../sub/Modal";
import { SiSessionize } from "react-icons/si";
import {
  IActionFormAddDoctor,
  IStateFormAddDoctor,
  handleChangeFormWorkSchedule,
} from "src/pages/Doctor/reducer";
import { FaSort } from "react-icons/fa";
import { getDayOfWeek, getQuickSessions } from "src/utils/getData";
import { checkSessionExist } from "src/utils/contain";
import { EQuickAddSessions } from "src/utils/enum";
import moment from "moment";
interface IProp {
  dispatch: React.Dispatch<IActionFormAddDoctor>;
  state: IStateFormAddDoctor;
}
enum ISessiongDuringDay {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Partial = "Partial",
}

function WorkScheduleCpn({ state, dispatch }: IProp) {
  const inputDateRef = useRef<HTMLInputElement>(null);
  const selectDayRef = useRef<HTMLSelectElement>(null);
  const inputTimeStartRef = useRef<HTMLInputElement>(null);
  const inputTimeEndRef = useRef<HTMLInputElement>(null);
  //use state
  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [modal, setModal] = useState<boolean>(false);
  const handleAddDayOff = () => {
    if (inputDateRef.current && inputDateRef.current.value !== "") {
      if (
        inputDateRef.current.value &&
        !state.createDoctor.workSchedule.dayOff.find(
          (day) => day === inputDateRef.current?.value
        )
      ) {
        dispatch(
          handleChangeFormWorkSchedule({
            ...state.createDoctor.workSchedule,
            dayOff: [
              ...state.createDoctor.workSchedule.dayOff,
              inputDateRef.current.value,
            ],
          })
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
    const tpmDayOffs = state.createDoctor.workSchedule.dayOff;
    const indexDayOffRomve = tpmDayOffs.findIndex((day) => day === day);
    if (indexDayOffRomve !== -1) {
      tpmDayOffs.splice(indexDayOffRomve, 1);
      dispatch(
        handleChangeFormWorkSchedule({
          ...state.createDoctor.workSchedule,
          dayOff: tpmDayOffs,
        })
      );
    }
  };
  const hanldeAddSchedule = () => {
    if (selectDayRef.current) {
      if (selectDayRef.current && selectDayRef.current.value !== "") {
        if (
          !state.createDoctor.workSchedule.schedule.some(
            (sc) => sc.dayOfWeek === selectDayRef.current?.value
          )
        ) {
          const selectedDay: EDayOfWeed = selectDayRef.current
            .value as EDayOfWeed;
          dispatch(
            handleChangeFormWorkSchedule({
              ...state.createDoctor.workSchedule,
              schedule: [
                ...state.createDoctor.workSchedule.schedule,
                { dayOfWeek: selectedDay, sessions: [] },
              ],
            })
          );
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
    const editSchedules: ScheduleInput | undefined =
      state.createDoctor.workSchedule.schedule.find(
        (s) => s.dayOfWeek === schedule.dayOfWeek
      );
    // console.log("input schedule: ", s, " --- editSchedules: ", editSchedules);
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
    // console.log("remove session", session);
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
        // console.log("removed session", tpmSession);
      }
    }
  };
  const handleSaveSchedule = () => {
    const tmpSchedule: ScheduleInput[] =
      state.createDoctor.workSchedule.schedule;
    const currentScheduleIndex: number = tmpSchedule.findIndex(
      (item) => item.dayOfWeek === schedule?.dayOfWeek
    );
    if (currentScheduleIndex !== -1 && schedule) {
      tmpSchedule[currentScheduleIndex] = {
        dayOfWeek: tmpSchedule[currentScheduleIndex].dayOfWeek,
        sessions: schedule.sessions,
      };
      dispatch(
        handleChangeFormWorkSchedule({
          ...state.createDoctor.workSchedule,
          schedule: tmpSchedule,
        })
      );
    }
    setModal(false);
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
    // console.log("test get sessions: ", sessions);
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
  return (
    <div className={`${s.main} `}>
      <div className={`${s.main__deliver}`}></div>
      <Form.Group className="mb-3" controlId="formGroupStatus">
        <Form.Label>Trạng thái:</Form.Label>
        <Form.Select
          onChange={(e) => {
            const statusValue: EStatusService = e.target
              .value as EStatusService;
            dispatch(
              handleChangeFormWorkSchedule({
                ...state.createDoctor.workSchedule,
                status: statusValue,
              })
            );
          }}
          defaultValue={EStatusService.Open}>
          <option
            selected={
              state.createDoctor.workSchedule.status === EStatusService.Open
            }
            value={EStatusService.Open}>
            Mở
          </option>
          <option
            selected={
              state.createDoctor.workSchedule.status === EStatusService.Close
            }
            value={EStatusService.Close}>
            Đống
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupStatus">
        <Form.Label>Số lượng tối đa 1 phiên khám:</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => {
            const slot: number = +e.target.value;
            dispatch(
              handleChangeFormWorkSchedule({
                ...state.createDoctor.workSchedule,
                numberSlot: slot,
              })
            );
          }}
          max={20}
          min={2}
          value={state.createDoctor.workSchedule.numberSlot}
          placeholder="5"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Ngày nghỉ:</Form.Label>
        <div className={s.main__dayOff}>
          {state.createDoctor.workSchedule.dayOff.map((day, i) => (
            <div key={i} className={s.main__dayOff_item}>
              <span>{day}</span>
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
            <th>Ngày trong tuần</th>
            <th>Phiên làm việc</th>
          </thead>
          <tbody>
            {state.createDoctor.workSchedule.schedule.map((s, i) => (
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
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <p>Chọn ngày</p>
          <Form.Select defaultValue={undefined} ref={selectDayRef}>
            <option
              value={EDayOfWeed.Monday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Monday
              )}>
              Thứ 2
            </option>
            <option
              value={EDayOfWeed.Thursday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Tuesday
              )}>
              Thứ 3
            </option>
            <option
              value={EDayOfWeed.Wednesday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Wednesday
              )}>
              Thứ 4
            </option>
            <option
              value={EDayOfWeed.Tuesday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Thursday
              )}>
              Thứ 5
            </option>
            <option
              value={EDayOfWeed.Friday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Friday
              )}>
              Thứ 6
            </option>
            <option
              value={EDayOfWeed.Saturday}
              disabled={state.createDoctor.workSchedule.schedule.some(
                (s) => s.dayOfWeek === EDayOfWeed.Saturday
              )}>
              Thứ 7
            </option>
            <option
              value={EDayOfWeed.Sunday}
              disabled={state.createDoctor.workSchedule.schedule.some(
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
                  <div>
                    {ss.startTime} {" - "} {ss.endTime}
                  </div>
                  <div className={`${s.close}`}>
                    <FaRegTrashCan onClick={() => handleRemoveSession(ss)} />
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center gap-2">
              <div>Bắt đầu:</div>
              <input ref={inputTimeStartRef} type="time" name="" id="" />
              <div>Kết thúc:</div>
              <input ref={inputTimeEndRef} type="time" name="" id="" />
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
                    onClick={() =>
                      quickAddSessions(EQuickAddSessions.Session15)
                    }>
                    Phiên 15 Sáng'
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      quickAddSessions(EQuickAddSessions.Session30)
                    }>
                    Phiên 30 Sáng'
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      quickAddSessions(EQuickAddSessions.Session60)
                    }>
                    Phiên 60 Sáng'
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form.Group>
        </ModalCpn>
      </Form.Group>
    </div>
  );
}
export default WorkScheduleCpn;
