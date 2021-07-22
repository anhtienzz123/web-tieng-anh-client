import {
    AppstoreOutlined,
    CarryOutOutlined,
    FileSearchOutlined,
    HomeOutlined,
    LoginOutlined,
    UserOutlined,
    PlayCircleOutlined

} from "@ant-design/icons";
import { Menu, message } from "antd";
import { setLogin } from "app/globalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "utils/auth";
import './style.scss';

const { SubMenu } = Menu;

function Header(props) {
    const { isLogin } = useSelector((state) => state.global);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <Menu mode="horizontal">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Trang chủ</Link>
                </Menu.Item>

                <Menu.Item key="4" icon={<FileSearchOutlined />}>
                    <Link to="/translate">Tra từ</Link>
                </Menu.Item>

                <Menu.Item key="2" icon={<AppstoreOutlined />}>
                    <Link to="/courses">Khóa học từ vựng</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<CarryOutOutlined />}>
                    <Link to="/exams">Luyện thi toeic</Link>
                </Menu.Item>

                <SubMenu key="SubMenu" icon={<PlayCircleOutlined />} title="Video">
                    <Menu.ItemGroup title="Explore by topics">
                        <Menu.Item key="1">
                            <Link to="/videos">Luyện thi toeic</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/videos">Luyện thi toeic</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/exams">Luyện thi toeic</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/exams">Luyện thi toeic</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/exams">Luyện thi toeic</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/exams">Luyện thi toeic</Link>
                        </Menu.Item>

                    </Menu.ItemGroup>

                    <Menu.ItemGroup title="Explore by levels">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                        <Menu.Item key="setting:5">Option 3</Menu.Item>
                        <Menu.Item key="setting:6">Option 4</Menu.Item>
                        <Menu.Item key="setting:7">Option 3</Menu.Item>
                        <Menu.Item key="setting:8">Option 4</Menu.Item>
                        <Menu.Item key="setting:9">Option 3</Menu.Item>
                        <Menu.Item key="setting:1">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu >

                {isLogin ? (
                    <SubMenu key="10_1" icon={<UserOutlined />} title="Cá nhân">
                        <Menu.Item key="10_1_1">
                            <Link to="/me">Hồ sơ cá nhân</Link>
                        </Menu.Item>

                        <Menu.Item key="10_1_2">
                            <Link
                                to="/login"
                                onClick={() =>
                                    auth.logout(() => {
                                        message.success("Bạn đã đăng xuất");
                                        dispatch(setLogin(false));
                                    })
                                }
                            >
                                Đăng xuất
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                ) : (
                    <Menu.Item key="10_0" icon={<LoginOutlined />}>
                        <Link to="/login">Đăng nhập</Link>
                    </Menu.Item>
                )}
            </Menu>
        </div>
    );
}

export default Header;
