import Http from './httpService';
import { toast } from 'react-toastify';

export default class Question {
    constructor(id = null) {
        this.id = id;
    }

    static async getQuestions(page = null) {
        try {
            const { data: questions } = await Http.get("/questions", {
                params: {
                    page: page
                }
            });
            console.log(questions);
            return questions;
        } catch (error) {
            toast.error("NO questions found");
            console.error(error);
            return [];
        }
    }

    async getQuestion() {
        try {
            const question = await Http.get(`/questions/${this.id}`);
            return question;
        } catch (error) {
            toast.error("question was not found");
            console.error(error);
            return null;
        }
    }

    async addQuestion(question) {
        try {
            const createdQuestion = await Http.post("/questions", question);
            toast.success("Question created");
            return createdQuestion;
        } catch (error) {
            toast.error("questions was not created / check again");
            console.error(error);
            return null;
        }
    }

    async addChoice(choiceId) {
        try {
            const savedChoice = await Http.post(`/questions/${this.id}/choices/${choiceId}`);
            toast.success("choices was saved");
            return savedChoice;
        } catch (error) {
            toast.error("choice was not saved / check again");
            console.error(error);
            return null;
        }
    }
}