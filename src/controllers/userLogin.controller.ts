import { Request, Response } from "express"
import userLoginService from "../services/userLogin.services"

const userLoginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const token = await userLoginService({ email, password })

        return res.status(200).json({ token: token })
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(403).send({
                "error": err.name,
                'message': err.message
            })
        }
    }
}

export default userLoginController