import mockQuizList from "../mock-data/mock-quiz-list";
import mockQuiz, { MOCK_ANSWER_KEY } from "../mock-data/mock-quiz";
import QuizBrief from './../models/quiz-brief';
import ResultsBrief from './../models/results-brief';
import Results from './../models/results';

const MOCK_NETWORK_DELAY_MS = 300;

/*
 MockQuizService provides in-memory manipulation and retrieval of quiz data,
 to demonstrate frontend functionality without a working REST api.
*/
class MockQuizService {
    constructor() {
        // Initialize with a few mock results to make the UI immediately more interesting on load
        this._results = [];
        console.log(mockQuiz.length);

        for (let i = 0; i < 15; i++) {
            let quiz = mockQuiz[Math.floor(Math.random() * mockQuiz.length)];
            let answers = quiz.questions.map(question => Math.floor(Math.random() * question.options.length));
            this.submitAnswers(quiz, answers);
        }
    }

    getQuizList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const retval = mockQuizList.map(brief => new QuizBrief(brief));
                resolve(retval);
            }, MOCK_NETWORK_DELAY_MS);
        })
    }

    getQuiz(quizBrief) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const retval = mockQuiz.find(quiz => quiz._links.self === quizBrief._links.self);
                resolve(retval);
            }, MOCK_NETWORK_DELAY_MS);
        })
    }

    submitAnswers(quiz, answers) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Figure out which mock quiz it was, so that we can get the correct mock answer key
                const quizIdx = mockQuiz.findIndex(mock => mock._links.self === quiz._links.self);
                const answerKey = MOCK_ANSWER_KEY[quizIdx];

                // Push the results into an in-memory array to hod onto them for the session
                this._results.push({
                    quiz,
                    attemptDate: new Date(),
                    answers: answers.map((selection, questionIdx) => answerKey[questionIdx] === selection),
                    selectedAnswers: answers.map((selectedIdx, questionIdx) => quiz.questions[questionIdx].options[selectedIdx]),
                    realAnswers: answerKey.map((correctIdx, questionIdx) => quiz.questions[questionIdx].options[correctIdx]),
                    selfLink: `/dynamic-mock/result/${this._results.length}`
                });

                // Return the results
                this.getResultsList()
                    .then(resultBriefs => {
                        const brief = resultBriefs.reverse()[0];
                        this.getResultDetails(brief)
                            .then(details => {
                                resolve(details);
                            });
                    });
            }, MOCK_NETWORK_DELAY_MS);
        });
    }

    getResultsList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Dynamically create the list when requested from the in-memory results
                const retval = this._results.map((result, idx) => {
                    return new ResultsBrief({
                        quizTitle: result.quiz.title,
                        attemptDate: result.attemptDate,
                        correctAnswers: result.answers.filter(isCorrect => isCorrect).length,
                        incorrectAnswers: result.answers.filter(isCorrect => !isCorrect).length,
                        _links: {
                            self: result.selfLink
                        }
                    });
                });

                resolve(retval);
            }, MOCK_NETWORK_DELAY_MS);
        });
    }

    getRecentResults() {
        return new Promise((resolve, reject) => {
            this.getResultsList().then(results => {
                const retval = results.reverse().slice(0, 5);
                resolve(retval);
            });
        })
    }

    getResultDetails(resultBrief) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Find the in-memory results from the given resultBrief
                const result = this._results.find(result => result.selfLink === resultBrief._links.self);
                const retval = new Results({
                    quizTitle: result.quiz.title,
                    attemptDate: result.attemptDate,
                    answers: result.answers.map((answer, idx) => {
                        return {
                            chosen: result.selectedAnswers[idx],
                            actual: result.realAnswers[idx],
                            correct: answer
                        }
                    }),
                    _links: {
                        self: result.selfLink
                    }
                })

                resolve(retval);
            }, MOCK_NETWORK_DELAY_MS);
        });
    }
}
export default new MockQuizService();