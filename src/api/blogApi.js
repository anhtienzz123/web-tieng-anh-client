import axiosClient from "./axiosClient";

const blogApi = {
	getBlogs: (params) => {
		const url = "/blogs";
		return axiosClient.get(url, { params });
	},

	getBlogCategories: () => {
		const url = "/blog-categories";
		return axiosClient.get(url);
	},

	getBlogDetail: (slug) => {
		const url = `/blogs/${slug}`;
		return axiosClient.get(url);
	},
};

export default blogApi;
