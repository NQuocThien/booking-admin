import Alert from "react-bootstrap/Alert";
import { Evariant } from "src/assets/contains/component-enum";
interface IPorps {
  head?: string;
  content?: string;
  bottom?: string;
  variant?: Evariant;
}
function ShowAlert({
  head = "Có lỗi xãy ra 😢😢",
  content = "Xin lỗi vì sự bất tiện này, nhưng chúng tôi đang gặp phải một số vấn đề kỹ thuật trên trang web của mình. Đội ngũ kỹ thuật đang nỗ lực để khắc phục tình trạng này càng sớm càng tốt.",
  bottom = "Trong khi chúng tôi đang tiến hành sửa chữa, bạn có thể thử làm mới trang hoặc thử lại sau một khoảng thời gian ngắn.",
  variant = Evariant.danger,
}: IPorps) {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{head}</Alert.Heading>
      <p>{content}</p>
      <hr />
      <p className="mb-0">{bottom}</p>
    </Alert>
  );
}
export default ShowAlert;
