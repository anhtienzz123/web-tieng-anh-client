import axiosClient from './axiosClient';

const examApi = {

    fetchExamBySlug: (slug) => {

        return axiosClient.get(`/exams/${slug}`);
    },

    fetchResultBySlug: (slug, answers) => {
        return axiosClient.post(`/exams/${slug}/result`, answers)
    }

};


export default examApi;