import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import { Col, Divider, Row, Space } from "antd";
import logo from 'images/logo/logo.png';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from "@ant-design/icons";

Footer.propTypes = {};

function Footer(props) {
    return (
        <div className="footer">
            <Divider />
            <Row gutter={[0, 16]}>
                <Col span={10} >
                    <div className='footer_left'>

                        <div className="footer_left-logo-page">
                            <a href="#">
                                <img src={logo} alt="SMP-English" />
                            </a>
                        </div>

                        <div className="footer_left-intro">
                            Website thi thử TOEIC online miễn phí có chấm điểm và xem đáp án ngay, kiểm tra trình độ TOEIC chính xác, nhanh chóng !
                        </div>

                        <div className="footer_left-contact">

                            <a href="#" className='footer_left-contact--logo-branch'>
                                <FacebookFilled />
                            </a>
                            <a href="#" className='footer_left-contact--logo-branch'>
                                <TwitterSquareFilled />
                            </a>
                            <a href="#" className='footer_left-contact--logo-branch'>
                                <InstagramFilled />
                            </a>
                        </div>


                    </div>
                </Col>

                <Col span={14} >
                    ádsadsadas
                </Col>



            </Row>
        </div>
    );
}

export default Footer;
