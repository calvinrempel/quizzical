import deepFreeze from "../util/deepfreeze";

export default class ResultsBrief {
    constructor(json) {
        Object.assign(this, {
            quizTitle: json.quizTitle,
            attemptDate: json.attemptDate,
            correctAnswers: json.correctAnswers,
            incorrectAnswers: json.incorrectAnswers,
            _links: json._links ? {
                self: json._links.self
            } : {}
        });
        deepFreeze(this);
    }
}