import { Request, Response } from "express"
import userListServices from "../services/userList.services"
import { instanceToPlain } from "class-transformer"

const userListController = async (req: Request, res: Response) => {
    const users = await userListServices()

    return res.status(201).send(instanceToPlain(users))
}

export default userListController