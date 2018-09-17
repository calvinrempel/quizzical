/*
 NOTE: This data is presented as an array only for mocking convenience purposes.
       The frontend expects a RESTful API that will return only one of these elements,
       associated with a particular id
       
       EG: GET /api/quizzes/1 would return the first element in the array.
*/
export default [
    {
        title: "Mock Quiz 1",
        questions: [
            {
                text: "Is this the first question?",
                options: [
                    "Yes",
                    "No"
                ]
            },
            {
                text: "How many questions are there?",
                options: [
                    "Three",
                    "Two",
                    "One"
                ]
            },
            {
                text: "Last question, true or false?",
                options: [
                    "True",
                    "False"
                ]
            }
        ],
        _links: {
            self: "/api/quizzes/1"
        }
    },
    {
        title: "Mock Quiz 2",
        questions: [
            {
                text: "What is the airspeed velocity of an unladed sparrow",
                options: [
                    "African or European?",
                    "11 m/s"
                ]
            },
            {
                text: "How many choices does this question have?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "Eight",
                ]
            }
        ],
        _links: {
            self: "/api/quizzes/2"
        }
    },
    {
        title: "Mock Quiz 3",
        questions: [
            {
                text: "2 + 2 = 4, true or false?",
                options: [
                    "True",
                    "False"
                ]
            }
        ],
        _links: {
            self: "/api/quizzes/3"
        }
    },
]

/*
 Record the mock answers for in-memory mocking of results
*/
export const MOCK_ANSWER_KEY = [
    [0, 0, 0],
    [0, 7],
    [0]
]