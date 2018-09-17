import deepFreeze from "../util/deepfreeze";

export default class Quiz {
    constructor(json) {
        Object.assign(this, {
            title: json.title,
            questions: json.questions ? json.questions.map(q => { q.text, q.options }) : [],
            _links: json._links ? {
                self: json._links.self
            } : {}
        });
        deepFreeze(this);
    }
}