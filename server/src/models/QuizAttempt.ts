import mongoose, { Document, Schema } from 'mongoose';

export interface IQuizAttempt extends Document {
    userId: mongoose.Types.ObjectId;
    courseId: string;
    selectedQuestions: any[];
    userAnswers: number[];
    score: number;
    isPassed: boolean;
    isCertified: boolean;
    attemptDate: Date;
}

const QuizAttemptSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: String, required: true },
    selectedQuestions: { type: Array, required: true },
    userAnswers: { type: Array, required: true },
    score: { type: Number, required: true },
    isPassed: { type: Boolean, required: true },
    isCertified: { type: Boolean, required: true },
    attemptDate: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

const QuizAttempt = mongoose.model<IQuizAttempt>('QuizAttempt', QuizAttemptSchema);
export default QuizAttempt;
