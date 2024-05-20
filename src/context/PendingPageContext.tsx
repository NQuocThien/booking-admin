import { createContext, useContext, useState } from "react";
import { ETypeOfService } from "src/graphql/webbooking-service.generated";

interface AuthContextType {
  startTime: Date | undefined;
  endTime: Date | undefined;
  typeOfService: ETypeOfService | undefined;
  handleChangeStartTime: (date: Date) => void;
  handleChangeEndTime: (date: Date) => void;
  handleChangeTypeOfService: (s: ETypeOfService | undefined) => void;
}
const PendingContext = createContext<AuthContextType | undefined>(undefined);
function useStatePending() {
  const context = useContext(PendingContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
function PendingContextProvider({ children }: AuthProviderProps) {
  // -----------------------------> VARIABLES <----------------------------------
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();
  const [typeOfService, setTypeOfService] = useState<ETypeOfService>();
  // -----------------------------> FUNCTIONS <----------------------------------

  const handleChangeStartTime = (date: Date) => {
    setStartTime(date);
  };
  const handleChangeEndTime = (date: Date) => {
    // console.log(`handleChangeStartTime`, date);
    setEndTime(date);
  };
  const handleChangeTypeOfService = (s: ETypeOfService | undefined) => {
    setTypeOfService(s);
  };
  return (
    <PendingContext.Provider
      value={{
        startTime: startTime,
        endTime: endTime,
        typeOfService: typeOfService,
        handleChangeEndTime: handleChangeEndTime,
        handleChangeStartTime: handleChangeStartTime,
        handleChangeTypeOfService: handleChangeTypeOfService,
      }}>
      {children}
    </PendingContext.Provider>
  );
}

export { useStatePending, PendingContextProvider };
