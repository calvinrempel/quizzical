import deepFreeze from "../util/deepfreeze";

export default class QuizBrief {
    constructor(json) {
        Object.assign(this, {
            title: json.title,
            description: json.description,
            questionCount: json.questionCount,
            _links: json._links ? {
                self: json._links.self
            } : {}
        });
        deepFreeze(this);
    }
}