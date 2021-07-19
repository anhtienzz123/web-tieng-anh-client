
export const handleAnswer = (answers) => {
    const map = new Map();


    answers.forEach((answer, index) => {
        let stt = answer.stt;
        let selected = answer.selected;

        map.set(stt, selected);

    });

    const obj = Object.fromEntries(map);

    console.log(obj);
    return obj;


}