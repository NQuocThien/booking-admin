import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { RefObject, useRef, useState } from "react";
import s from 'src/assets/scss/pages/GeneralInforWeb.module.scss';
interface IProp {

}

function GeneralInforWebCpn() {
    const fileLogoHeaderRef = useRef<HTMLInputElement | null>(null);
    const [selectedLogoHeader, setSelectedLLogoHeader] = useState<Blob | null>(null);
    const [selectedLogoFooter, setSelectedLLogoFooter] = useState<Blob | null>(null);
    const handleImageClick = () => {
        if (fileLogoHeaderRef.current) {
            fileLogoHeaderRef.current.click();
        }
    };

    const handleChangeImageHeader = (e: any) => {
        const file = e.target.files?.[0] || null;
        setSelectedLLogoHeader(file);
        console.log('image', selectedLogoHeader)
    };

    const hanleSubmit = () => {

    }
    return (
        <Container fluid className={`${s.content} `} onSubmit={hanleSubmit}>
            <Form>
                <h3>Quản lý thông tin trang web</h3>
                <Row className={s.content__logo} >

                    <Form.Group as={Col} controlId="formFile" className="mb-3 d-flex sm-6 align-items-center">
                        <Col sm={4} >
                            <Form.Label ><h4>Logo header:</h4></Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Image
                                className={s.image}
                                src={selectedLogoHeader && URL.createObjectURL(selectedLogoHeader) || ''}
                                roundedCircle
                                onClick={handleImageClick}
                            />
                        </Col>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            name='LogoHeader'
                            ref={fileLogoHeaderRef}
                            onChange={handleChangeImageHeader}
                            style={{ display: 'none' }}
                        />

                    </Form.Group>
                    <Form.Group as={Col} controlId="formFile" className="mb-3 d-flex sm-6 align-items-center">
                        <Col sm={4} >
                            <Form.Label ><h4>Logo footer:</h4></Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Image
                                className={s.image}
                                src={selectedLogoHeader && URL.createObjectURL(selectedLogoHeader) || ''}
                                roundedCircle
                                onClick={handleImageClick}
                            />
                        </Col>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            name='LogoHeader'
                            ref={fileLogoHeaderRef}
                            onChange={handleChangeImageHeader}
                            style={{ display: 'none' }}
                        />

                    </Form.Group>

                </Row>
                <Row className={s.content__liscene} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Giấy phép kinh doanh</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Giấy phép hoạt động</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Copy right</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={s.content__contact} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Hotline</Form.Label>
                            <Form.Control
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
                </Row>
                <Row className={s.content__contact} >
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Hotline</Form.Label>
                            <Form.Control
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
                </Row>
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