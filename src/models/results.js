import deepFreeze from "../util/deepfreeze";

export default class Results {
    constructor(json) {
        Object.assign(this, {
            quizTitle: json.quizTitle,
            attemptDate: json.attemptDate,
            answers: json.answers ? json.answers.map(answer => {
                return {
                    chosen: answer.chosen,
                    actual: answer.actual,
                    correct: answer.correct
                }
            }) : [],
            _links: json._links ? {
                self: json._links.self
            } : {}
        });
        deepFreeze(this);
    }
}