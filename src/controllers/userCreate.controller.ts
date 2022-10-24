import { Request, Response } from "express"
import userCreateServices from "../services/userCreate.services"

const userCreateController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, isAdm } = req.body

        const newUser = await userCreateServices({ name, email, password, isAdm })

        return res.status(201).send(newUser)
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default userCreateController