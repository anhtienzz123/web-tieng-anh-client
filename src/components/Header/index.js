import {
    AppstoreOutlined,
    CarryOutOutlined,
    FileSearchOutlined,
    FormOutlined,
    HomeOutlined,
    LoginOutlined,
    ScheduleOutlined,
    PlayCircleOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Menu, message } from "antd";
import { setLogin } from "app/globalSlice";
import { fetchCategoriesVideo } from "features/Video/videoSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "utils/auth";
import "./style.scss";

const { SubMenu } = Menu;

function Header(props) {
    const { isLogin } = useSelector((state) => state.global);
    const { categories } = useSelector((state) => state.video);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesVideo());
    }, []);

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

                {isLogin && (
                    <Menu.Item key="5" icon={<FormOutlined />}>
                        <Link to="/wordnotes">Wordnote</Link>
                    </Menu.Item>
                )}

                <SubMenu
                    key="SubMenu"
                    icon={<PlayCircleOutlined />}
                    title="Video"
                >
                    <div className="adjust-video">
                        <Menu.ItemGroup title="Explore by topics">
                            {categories &&
                                categories.map((category, index) => (
                                    <Menu.Item key={category.name}>
                                        <Link to={"/videos/" + category.slug}>
                                            {category.name}
                                        </Link>
                                    </Menu.Item>
                                ))}
                        </Menu.ItemGroup>
                    </div>
                </SubMenu>

                <Menu.Item key="6" icon={<FontAwesomeIcon icon={faBlog} />}>
                    <Link to="/blogs">Blog</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<CarryOutOutlined />}>
                    <Link to="/exams">Luyện thi toeic</Link>
                </Menu.Item>

                <SubMenu
                    key="100"
                    icon={<ScheduleOutlined />}
                    title="Làm theo part"
                >
                    <Menu.ItemGroup title="Luyện nghe">
                        <Menu.Item key="100_1">
                            <Link to="/parts/1">Part 1</Link>
                        </Menu.Item>

                        <Menu.Item key="100_2">
                            <Link to="/parts/2">Part 2</Link>
                        </Menu.Item>

                        <Menu.Item key="100_3">
                            <Link to="/parts/3">Part 3</Link>
                        </Menu.Item>

                        <Menu.Item key="100_4">
                            <Link to="/parts/4">Part 4</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>

                    <Menu.ItemGroup title="Luyện đọc">
                        <Menu.Item key="100_5">
                            <Link to="/parts/5">Part 5</Link>
                        </Menu.Item>

                        <Menu.Item key="100_6">
                            <Link to="/parts/6">Part 6</Link>
                        </Menu.Item>

                        <Menu.Item key="100_7">
                            <Link to="/parts/7">Part 7</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

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
