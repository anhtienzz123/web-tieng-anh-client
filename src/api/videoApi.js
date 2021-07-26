import axiosClient from "./axiosClient";

const videoApi = {
    fetchCategoriesVideo: () => {
        return axiosClient.get("/video-categories");
    },

    fetchByCategoryVideo: (slug, level, timeFrom, timeTo) => {
        return axiosClient.get("/videos", {
            params: {
                categorySlug: slug,
                level: level,
                timeTo: timeTo,
                timeFrom: timeFrom

            }
        })
    },

    fetchNextPage: (slug, page, level, timeFrom, timeTo) => {
        return axiosClient.get("/videos", {
            params: {
                categorySlug: slug,
                page: page,
                level: level,
                timeTo: timeTo,
                timeFrom: timeFrom
            }
        })
    },

    fetchSliderBySlug: (slug) => {
        return axiosClient.get("/videos", {
            params: {
                categorySlug: slug
            }
        })
    }
}

export default videoApi;