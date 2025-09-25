import mongoose, { model, models, Schema } from "mongoose";

export interface IUser extends Document
{
   name:string,
   email:string,
   password:string,
   role:"admin"|"user"|"manager"
}

const UserSchema = new Schema<IUser>({
  name: { type: String,required:true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user", "manager"], required: true },

})

const User = models.User || model<IUser>("User", UserSchema);

export default User;