import { Request, Response } from "express"
import userDeleteService from "../services/userDelete.services"

const userDeleteController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const isActive = req.user.isActive

        await userDeleteService(id, isActive, res)

        return res.status(204).json({ message: "User deleted with success" })
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(404).send({
                "error": err.name,
                "message": err.message
            })
        }
    }

}

export default userDeleteController