import axiosClient from "./axiosClient";

const videoApi = {
    fetchCategoriesVideo: () => {
        return axiosClient.get("/video-categories");
    },

    fetchByCategoryVideo: (slug) => {
        return axiosClient.get("/videos", {
            params: {
                categorySlug: slug,
            }
        })
    },

    fetchNextPage: (slug, page) => {
        return axiosClient.get("/videos", {
            params: {
                categorySlug: slug,
                page: page
            }
        })
    }
}

export default videoApi;