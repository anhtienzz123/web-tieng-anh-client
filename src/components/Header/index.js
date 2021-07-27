import {
	AppstoreOutlined,
	CarryOutOutlined,
	FileSearchOutlined,
	FormOutlined,
	HomeOutlined,
	LoginOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import { setLogin } from "app/globalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "utils/auth";

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

				{isLogin && (
					<Menu.Item key="5" icon={<FormOutlined />}>
						<Link to="/wordnotes">Wordnote</Link>
					</Menu.Item>
				)}

				<Menu.Item key="3" icon={<CarryOutOutlined />}>
					<Link to="/exams">Luyện thi toeic</Link>
				</Menu.Item>

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
