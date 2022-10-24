import { Request, Response } from "express"
import userUpdateService from "../services/userUpdate.services"

const userUpdateController = async (req: Request, res: Response) => {

    try {
        const id = req.user.id

        const { password, email, name } = req.body

        const userUpdated = await userUpdateService({ email, password, name }, id)

        return res.status(200).send({ message: "Updated", userUpdated })
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err)
            return res.status(401).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default userUpdateController