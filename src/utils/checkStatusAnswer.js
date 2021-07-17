


const checkStatusAnswer = (answers) => {
    const status = [];
    const answers_part1 = answers.filter(answer => answer.stt <= 6);
    const answers_part2 = answers.filter(answer => answer.stt > 6 && answer.stt <= 31);
    const answers_part3 = answers.filter(answer => answer.stt > 31 && answer.stt <= 70);
    const answers_part4 = answers.filter(answer => answer.stt > 70 && answer.stt <= 100);
    const answers_part5 = answers.filter(answer => answer.stt > 100 && answer.stt <= 130);
    const answers_part6 = answers.filter(answer => answer.stt > 130 && answer.stt <= 146);
    const answers_part7 = answers.filter(answer => answer.stt > 146 && answer.stt <= 200);

    checkAnswerPart(answers_part1,status);
    checkAnswerPart(answers_part2,status);
    checkAnswerPart(answers_part3,status);
    checkAnswerPart(answers_part4,status);
    checkAnswerPart(answers_part5,status);
    checkAnswerPart(answers_part6,status);
    checkAnswerPart(answers_part7,status);

    return status;
}


function checkAnswerPart(answers_part,status) {
    let flag = 0;
    let subStatus = "Complete";
    answers_part.forEach(answer => {
        if (answer.status === '' || answer.status === 'yet') {
            flag += 1;
        }

    });

    console.log(flag);
    if (flag != 0) {
        subStatus = 'Incomplete';
    }
    status.push(subStatus);
};

export default checkStatusAnswer;

