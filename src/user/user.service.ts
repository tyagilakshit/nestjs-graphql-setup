import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }
    private users: { name: string, email: string }[] = [
        { name: "Lakshit", email: "lakshit@yopmail.com" },
        { name: "Gaurav", email: "Gaurav@yopmail.com" },
        { name: "Himanshi", email: "Himanshi@yopmail.com" },
        { name: "Mamta", email: "Mamta@yopmail.com" },
        { name: "Harsh", email: "Harsh@yopmail.com" },
    ]
    async getAll() {
        return this.userModel.find();
    }

    async createUsers(user: { name: string, email: string }) {
        return this.userModel.create(user);
    }
}

