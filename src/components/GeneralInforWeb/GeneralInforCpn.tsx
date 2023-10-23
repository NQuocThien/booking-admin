import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import s from 'src/assets/scss/pages/GeneralInforWeb.module.scss';
import { ETypeFile, uploadFile, getUrlImage } from "src/utils/upload";
import { showToast } from "../toasts/toasts";
import { GeneralInforUpdateInput, useGetGeneralInforQuery, useUpdateGeneralInforMutation } from "src/graphql/webbooking-service.generated";
import { getLocalStorage } from "src/utils/contain";

interface IFormData {
    logoHeader: Blob | null;
    logoFooter: Blob | null;
    address: string;
    company: string;
    copyrigth: string;
    email: string;
    hotline: string;
    liscenceBusiness: string;
    liscenceOparating: string;
}
interface ILogoImage {
    logoHeader: {
        filename: string;
        type: string;
        url: string
    }
    logoFooter: {
        filename: string;
        type: string;
        url: string
    }
}

function GeneralInforWebCpn() {
    const { refetch, data } = useGetGeneralInforQuery({ fetchPolicy: 'no-cache' });
    const fileLogoHeaderRef = useRef<HTMLInputElement | null>(null);
    const fileLogoFooterRef = useRef<HTMLInputElement | null>(null);
    const [validateForm, setValidateForm] = useState(false);
    const [formData, setFormData] = useState<IFormData>({
        logoHeader: null,
        logoFooter: null,
        address: '',
        company: '',
        copyrigth: '',
        email: '',
        hotline: '',
        liscenceBusiness: '',
        liscenceOparating: '',
    });
    const [updateGeneralInfor] = useUpdateGeneralInforMutation({ fetchPolicy: 'no-cache' });
    useEffect(() => {
        setFormData(pre => ({
            ...pre,
            company: '1234'
        }))

        console.log('test form data', formData)
        if (data?.getGeneralInfor) {
            console.log('test ', data)
            setFormData(pre => ({
                ...pre,
                company: data?.getGeneralInfor.company,
                address: data?.getGeneralInfor.address,
                copyrigth: data?.getGeneralInfor.copyrigth,
                email: data?.getGeneralInfor.email,
                hotline: data?.getGeneralInfor.hotline,
                liscenceBusiness: data?.getGeneralInfor.liscenceBusiness,
                liscenceOparating: data?.getGeneralInfor.liscenceOparating
            }),)
        }
    }, [data])
    const handleSave = async (dataLogo: ILogoImage): Promise<void> => {
        const token = getLocalStorage(process.env.REACT_APP_ACCESS_TOKEN || 'access_token')
        const input: GeneralInforUpdateInput = {
            logoFooter: dataLogo.logoFooter,
            logoHeader: dataLogo.logoHeader,
            company: formData.company,
            address: formData.address,
            copyrigth: formData.copyrigth,
            email: formData.email,
            hotline: formData.hotline,
            liscenceBusiness: formData.liscenceBusiness,
            liscenceOparating: formData.liscenceOparating,
        }

        updateGeneralInfor({
            variables: {
                input: input
            },
            context: {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        }).then(() => showToast('👌Lưu thành công', 'success'))
            .catch(err => { throw new Error('can not save') })
    }
    const handleUploadImage = async () => {
        var dataLogo: ILogoImage = {
            logoFooter: {
                filename: '',
                url: '',
                type: ''
            },
            logoHeader: {
                filename: '',
                url: '',
                type: ''
            },
        };
        const typeFile = ETypeFile.Image;
        // upload logo header
        try {
            await uploadFile(typeFile, [formData.logoHeader], (error: any, result: any) => {
                if (error) {
                    // console.error('Upload error:', error);
                    showToast('😥 Lỗi upload logo header', 'error')
                    throw new Error('Upload error')

                } else {
                    showToast('👍 Đã lưu logo header', 'success')

                    const ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${result[0]?.filename}`
                    const linkImage = {
                        filename: result[0]?.filename + '',
                        type: typeFile + '',
                        url: ulrImage
                    }
                    dataLogo = {
                        ...dataLogo,
                        logoHeader: linkImage
                    }
                    // console.log('Upload successful. Result header:', dataLogo);
                    uploadFile(typeFile, [formData.logoFooter], (error: any, result: any) => {
                        if (error) {
                            // console.error('Upload error:', error);
                            showToast('😥 Lỗi upload logo footer', 'error')
                            throw new Error('Upload error')

                        } else {
                            // console.log('Upload successful. Result:', result);
                            showToast('👍 Đã lưu logo footer', 'success')

                            const ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${result[0]?.filename}`
                            const linkImage = {
                                filename: result[0]?.filename + '',
                                type: typeFile + '',
                                url: ulrImage
                            }
                            dataLogo = {
                                ...dataLogo,
                                logoFooter: linkImage
                            }
                            // console.log('Upload successful. Result footer:', dataLogo);
                            // console.group('test data upload')
                            // console.log(dataLogo)
                            // console.groupEnd()
                            handleSave(dataLogo);
                        }
                    });
                }
            });



            return dataLogo

        } catch (e) {

            console.error(e)
        }
    }
    const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const f = e.currentTarget;
        if (f.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log('uploading')
            handleUploadImage();
        }
        setValidateForm(true);
    }
    return (
        <Container fluid className={`${s.content}`} >
            <Form noValidate validated={validateForm} onSubmit={hanleSubmit}>
                <h3>Quản lý thông tin trang web</h3>
                <Row className={s.content__logo} >

                    <Form.Group as={Col} controlId="formFile" className="mb-3 d-flex sm-6 align-items-center">
                        <Col sm={4} >
                            <Form.Label ><h4>Logo header:</h4></Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Image
                                className={s.image_header}
                                src={formData.logoHeader && URL.createObjectURL(formData.logoHeader) || getUrlImage(data?.getGeneralInfor.logoHeader)}
                                roundedCircle
                                onClick={() => fileLogoHeaderRef.current && fileLogoHeaderRef.current.click()}
                            />
                        </Col>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            name='logoHeader'
                            ref={fileLogoHeaderRef}
                            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedLogoHeader(e.target.files?.[0] || null)}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, logoHeader: e.target.files?.[0] || null }))}
                            style={{ display: 'none' }}
                        />

                    </Form.Group>
                    <Form.Group as={Col} controlId="formFile" className="mb-3 d-flex sm-6 align-items-center">
                        <Col sm={4} >
                            <Form.Label ><h4>Logo footer:</h4></Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Image
                                className={s.image_footer}
                                src={formData.logoFooter && URL.createObjectURL(formData.logoFooter) || getUrlImage(data?.getGeneralInfor.logoFooter)}
                                rounded
                                onClick={() => fileLogoFooterRef.current && fileLogoFooterRef.current.click()}
                            />
                        </Col>
                        <Form.Control
                            required
                            type="file"
                            accept="image/*"
                            name='logoFooter'
                            ref={fileLogoFooterRef}
                            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedLogoFooter(e.target.files?.[0] || null)}
                            onChange={
                                (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, logoFooter: e.target.files?.[0] || null }))}
                            style={{ display: 'none' }}
                        />

                    </Form.Group>

                </Row>
                <Row className={s.content__contact} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="company">Tên công ty</Form.Label>
                            <Form.Control
                                required
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, company: e.target.value }))}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="hotline">Hotline</Form.Label>
                            <Form.Control
                                required
                                value={formData.hotline}
                                id="hotline"
                                name="hotline"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, hotline: e.target.value }))}
                            />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                required
                                value={formData.email}
                                id="email"
                                name="email"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, email: e.target.value }))}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="address">Trụ sở chính</Form.Label>
                            <Form.Control
                                required
                                value={formData.address}
                                id="address"
                                name="address"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, address: e.target.value }))}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={s.content__liscene} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="liscenceBusiness">Giấy phép kinh doanh</Form.Label>
                            <Form.Control
                                required
                                value={formData.liscenceBusiness}
                                type="text"
                                id="liscenceBusiness"
                                name="liscenceBusiness"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, liscenceBusiness: e.target.value }))}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="liscenceOparating">Giấy phép hoạt động</Form.Label>
                            <Form.Control
                                required
                                value={formData.liscenceOparating}
                                type="text"
                                id="liscenceOparating"
                                name="liscenceOparating"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, liscenceOparating: e.target.value }))}
                            />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="copyrigth">Copy right</Form.Label>
                            <Form.Control
                                required
                                value={formData.copyrigth}
                                type="text"
                                id="copyrigth"
                                name="copyrigth"
                                onChange={
                                    (e: ChangeEvent<HTMLInputElement>) => setFormData(pre => ({ ...formData, copyrigth: e.target.value }))}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* <Row className={s.content__contact} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Hotline</Form.Label>
                            <Form.Control
                                    required
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Trụ sở chính</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                    </Col>
                </Row> */}
                <div className="d-flex gap-3 my-3 flex-row-reverse ">


                    <Button variant="primary" type="submit">
                        Lưu
                    </Button>
                    <Button variant="outline-danger" >
                        Hủy
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default GeneralInforWebCpn;