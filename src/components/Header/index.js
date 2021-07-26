import { AppstoreOutlined, CarryOutOutlined, FileSearchOutlined, HomeOutlined, LoginOutlined, PlayCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, message } from "antd";
import { setLogin } from "app/globalSlice";
import { fetchCategoriesVideo, setTitleVideoSelector, changeSubject } from 'features/Video/videoSlice';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "utils/auth";
import './style.scss';
import BlockLevel from 'components/BlockLevel';

const { SubMenu } = Menu;

function Header(props) {
    const { isLogin } = useSelector((state) => state.global);
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.video);
    const level = [1, 2, 3, 4, 5, 6, 7];


    useEffect(() => {
        dispatch(fetchCategoriesVideo());
    }, []);

    function handleSelectMenu(value) {
        console.log("menu selected", value);
        dispatch(setTitleVideoSelector(value.key));
        dispatch(changeSubject())
    }

    return (
        <div className="header">
            <Menu mode="horizontal" onSelect={handleSelectMenu}>
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
                    <div className='adjust-video'>
                        <Menu.ItemGroup title="Explore by topics">

                            {
                                categories && categories.map((category, index) => (
                                    <Menu.Item key={category.name}>
                                        <Link to={"/videos/" + category.slug}>{category.name}</Link>
                                    </Menu.Item>
                                ))
                            }

                        </Menu.ItemGroup>

                        {/* <Menu.ItemGroup title="Explore by levels">

                            {
                                level.map((element, index) => (
                                    <Menu.Item key={"level" + element}>
                                        <Link to={"/videos/level/" + element}>
                                            <BlockLevel level={element.toString()} />
                                        </Link>
                                    </Menu.Item>
                                ))
                            }

                        </Menu.ItemGroup> */}

                    </div>




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
