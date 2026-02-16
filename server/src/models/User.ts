import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

UserSchema.pre('save', async function () {
    const user = this as unknown as IUser;
    if (!user.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
    const user = this as unknown as IUser;
    return await bcrypt.compare(enteredPassword, user.password);
};

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
