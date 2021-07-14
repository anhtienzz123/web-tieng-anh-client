import { setExamSelected } from 'features/OnlineExam/onlineExamSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useLoadExamSelectedAfterRefresh = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const part = localStorage.getItem('partSelected');
        if (part !== "undefined" && part !== null) {

            dispatch(setExamSelected(parseInt(part)));
        }

        return () => {

        }
    }, []);
}

export default useLoadExamSelectedAfterRefresh;


