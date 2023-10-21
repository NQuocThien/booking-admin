import { useAuth } from "src/context/AuthContext";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";
import s from 'src/assets/scss/pages/InforUser.module.scss';
import { ChangeEvent, useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import { getLocalStorage } from "src/utils/contain";
import { uploadFile, ETypeFile } from "src/utils/upload";
import { LinkImage, UpdateUserInput, UpdateUserWithPassInput, User } from "src/graphql/webbooking-service.generated";
interface InforUserCpnProps {
    update: (token: string, dataUser: any) => Promise<void>;
    updateWithPass: (token: string, dataUser: UpdateUserWithPassInput) => Promise<void>;
}
function InforUserCpn({ update, updateWithPass }: InforUserCpnProps) {
    const { isLoginIn, userInfor, handleChangeUserInfor } = useAuth();
    // const [validated, setValidated] = useState<boolean>(false);
    const [disable, setDisabled] = useState<boolean>(true)
    const [stateUpdatePass, setStateUpdatePass] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState<Blob | null>(null);

    const handleUpdateInforUser = (linkImage: LinkImage | undefined = undefined,) => {

        if (stateUpdatePass) { // nếu có đổi pass
            const token = getLocalStorage(process.env.REACT_APP_ACCESS_TOKEN ? process.env.REACT_APP_ACCESS_TOKEN : 'access_token')
            var dataUserUpdated: UpdateUserWithPassInput;
            if (linkImage) { // có đổi hình
                dataUserUpdated = {
                    ...userInfor,
                    linkImage: linkImage,
                    fullname: formData.fullname,
                    email: formData.email,
                    password: formData.password,
                    passwordNew: formData.passwordNew
                }
            } else { // không đổi hình
                dataUserUpdated = {
                    ...userInfor,
                    fullname: formData.fullname,
                    email: formData.email,
                    password: formData.password,
                    passwordNew: formData.passwordNew
                }
            }
            if (token) {
                updateWithPass(token, dataUserUpdated)
                    .then(() => {
                        showToast('😘 Đã lưu thay đổi thành công', 'success')
                        const { passwordNew, ...newUser } = dataUserUpdated
                        console.log('data submit: ', newUser);
                        handleChangeUserInfor(newUser)
                        setDisabled(true)
                    })
                    .catch(() => showToast('🤐 Có lỗi xảy ra ! ', 'error'))
            }
        } else { // ko đổi pass 
            var dataUserUpdate: UpdateUserInput
            const { password, ...currentUserInforNonPass } = userInfor
            if (linkImage) {
                dataUserUpdate = {
                    ...currentUserInforNonPass,
                    linkImage: linkImage,
                    fullname: formData.fullname,
                    email: formData.email,
                }
            }
            else {
                dataUserUpdate = {
                    ...currentUserInforNonPass,
                    fullname: formData.fullname,
                    email: formData.email,
                }
            }
            // lấy header
            const token = getLocalStorage(process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : 'access_token')
            if (token) {
                console.log('\t-> Data Udate: ', dataUserUpdate)
                update(token, dataUserUpdate)
                    .then(() => {
                        showToast('😘 Đã lưu thay đổi thành công', 'success')
                        const newUserUpdated: User = {
                            ...dataUserUpdate,
                            password: userInfor.password
                        }
                        handleChangeUserInfor(newUserUpdated)
                        setStateUpdatePass(false)
                        setDisabled(true)
                    })
                    .catch((e) => showToast('🤐 Có lỗi xảy ra không thể lưu' + e, 'error'))
            }
        }
    }; // xữ lý đoạn cuối update user
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedFile) {
            console.log(' upload image')
            const typeFile = ETypeFile.Image
            uploadFile(typeFile, [selectedFile], (error: any, result: any) => {
                if (error) {
                    console.error('Upload error:', error);
                    showToast('😥 Lỗi upload avatar', 'error')

                } else {
                    console.log('Upload successful. Result:', result);
                    showToast('👍 Đã lưu ảnh')

                    const ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${result[0]?.filename}`
                    const linkImage = {
                        filename: result[0]?.filename,
                        type: typeFile,
                        url: ulrImage
                    }
                    console.log('linkImage:', linkImage)
                    // thực hiện submit
                    handleUpdateInforUser(linkImage);
                }
            });
        } else {
            console.log('-> ⚙️ Don\'t change image !')
            handleUpdateInforUser()
        }

        console.log('Submited')

    }; // xữa lý khi submit
    const [formData, setFormData] = useState<UpdateUserWithPassInput>({
        fullname: '',
        email: '',
        username: '',
        password: '',
        passwordNew: '',
        linkImage: {
            filename: '',
            url: '',
            type: ''
        },
        id: '',
        type: 1,
    });// trạng thái dữ liệu chung
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };// xữ lý nhập thông tin

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    }; // xử lý thay đổi image
    const handleUpdate = () => {
        if (disable) {
            setStateUpdatePass(false)
            setDisabled(false)
        }
        else {

            // load lại dữ liệu gốc
            const currentUser = { ...userInfor, password: '', passwordNew: '' }
            setFormData(currentUser)
            setSelectedFile(null)
            // Đống form update password
            setStateUpdatePass(false)
            // disable form 
            setDisabled(true)
        }
    } // xữ lý hành động update hủy update

    useEffect(() => {
        console.log('user infor', userInfor)
        // handleChangeUserInfor(() => userInforReleasePass)
        const currentUser = { ...userInfor, password: '', passwordNew: '' }
        setFormData(currentUser)

    }, [userInfor]) // tinh tỉnh data đầu vào

    return (
        <Container className={s.inforUser}>
            {
                isLoginIn && (
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }}>
                            <Form className={s.inforUser__form} onSubmit={handleSubmit} >
                                <h3>Thông tin tài khoản</h3>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Chọn ảnh đại diện</Form.Label><br></br>
                                    <Image
                                        className={s.inforUser__form_avatar}
                                        src={selectedFile && URL.createObjectURL(selectedFile) || formData.linkImage?.url}
                                        thumbnail
                                    />
                                    <Form.Control
                                        disabled={disable}
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        size="sm"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Tên đăng nhập</Form.Label>
                                    <Form.Control
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                        name='username'
                                        type="text"
                                        disabled
                                        placeholder='Nhập tên tài khoản' />

                                </Form.Group>

                                <Form.Group className="mb-3 " >
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control
                                        required
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        name='fullname'
                                        type="text"
                                        disabled={disable}
                                        placeholder='Nhập họ tên' />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        name='email'
                                        type="text"
                                        disabled={disable}
                                        placeholder='Nhập Email' />
                                </Form.Group>

                                {!disable && !stateUpdatePass && (
                                    <Button
                                        variant="link"
                                        size="sm"
                                        style={{ marginBottom: '10px' }}
                                        onClick={() => setStateUpdatePass((pre) => !pre ? true : false)}>
                                        Cập nhật
                                    </Button>
                                )}
                                {stateUpdatePass && (
                                    <div>

                                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                                            <Form.Label>Mật khẩu cũ</Form.Label>
                                            <Form.Control
                                                required
                                                value={formData.password}
                                                onChange={handleChange}
                                                name='password'
                                                type="password"
                                                disabled={disable}
                                                placeholder='Mật khẩu cũ' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Mật khẩu mới</Form.Label>
                                            <Form.Control
                                                required
                                                value={formData.passwordNew}
                                                onChange={handleChange}
                                                name='passwordNew'
                                                type="password"
                                                disabled={disable}
                                                placeholder='Mật khẩu mới' />
                                        </Form.Group>
                                    </div>

                                )}
                                <div className={s.inforUser__form_btns}>
                                    <Button variant="outline-success" onClick={handleUpdate}>
                                        {disable ? 'Cập nhật' : 'Hủy'}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={disable}
                                    >
                                        Lưu
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
}

export default InforUserCpn;