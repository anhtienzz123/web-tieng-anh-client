import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Select, Typography, Input } from "antd";

const { Text } = Typography;
const { Option } = Select;

BlogSearch.propTypes = {
	categories: PropTypes.array.isRequired,
	onChange: PropTypes.array.isRequired,
};

BlogSearch.defaultProps = {
	categories: [],
	onChange: null,
};

function BlogSearch({ categories, onChange }) {
	const [name, setName] = useState("");
	const [categorySlug, setCategorySlug] = useState("");
	const typingTimeOutRef = useRef(null);

	const handleCategoryChange = (categorySlug) => {
		setCategorySlug(categorySlug);
	};

	const handleNameChange = (e) => {
		const value = e.target.value;
		if (typingTimeOutRef.current) {
			clearTimeout(typingTimeOutRef.current);
		}
		typingTimeOutRef.current = setTimeout(() => {
			setName(value);
		}, 500);
	};

	useEffect(() => {
		onChange({ name, categorySlug });
	}, [name, categorySlug]);

	return (
		<>
			<Col xs={24} sm={24} md={24} lg={10} xl={10}>
				<Row align="middle" gutter={[8, 8]}>
					<Col xs={24} sm={24} md={6} lg={6} xl={6}>
						<Text strong>Tên blog: </Text>{" "}
					</Col>
					<Col xs={24} sm={24} md={18} lg={18} xl={18}>
						<Input
							name="name"
							style={{ width: "80%" }}
							onChange={handleNameChange}
						/>
					</Col>
				</Row>
			</Col>

			<Col xs={24} sm={24} md={24} lg={10} xl={10}>
				<Row align="middle" gutter={[8, 8]}>
					<Col xs={24} sm={24} md={6} lg={6} xl={6}>
						<Text strong>Danh mục: </Text>{" "}
					</Col>
					<Col xs={24} sm={24} md={18} lg={18} xl={18}>
						<Select
							defaultValue=""
							style={{ width: "80%" }}
							onChange={handleCategoryChange}
						>
							<Option value="" key={-1}>
								-- Tất cả --
							</Option>
							{categories.map((categoryEle, index) => {
								const { slug, name } = categoryEle;
								return (
									<Option value={slug} key={index}>
										{name}
									</Option>
								);
							})}
						</Select>
					</Col>
				</Row>
			</Col>
		</>
	);
}

export default BlogSearch;
