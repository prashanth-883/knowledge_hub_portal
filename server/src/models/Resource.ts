import mongoose, { Document, Schema } from 'mongoose';

export interface IResource extends Document {
    title: string;
    url: string;
    description?: string;
    type: 'video' | 'article' | 'documentation' | 'other';
    tags: string[];
    createdBy: mongoose.Schema.Types.ObjectId;
}

const ResourceSchema: Schema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    type: {
        type: String,
        enum: ['video', 'article', 'documentation', 'other'],
        default: 'other'
    },
    tags: [{ type: String }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true,
});

const Resource = mongoose.model<IResource>('Resource', ResourceSchema);
export default Resource;
