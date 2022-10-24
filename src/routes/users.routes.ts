import { Router } from "express"

import userCreateController from "../controllers/userCreate.controller"
import userLoginController from "../controllers/userLogin.controller"
import userListController from "../controllers/userList.controller"
import userUpdateController from "../controllers/userUpdate.controller"
import userDeleteController from "../controllers/userDelete.controller"

import verifyAuthtoken from "../middlewares/verifyAuthToken.middleware"
import verifyAdm from "../middlewares/verifyAdm.middleware"
import verifyProfile from "../middlewares/verifyProfile.middleware"

const router = Router()

router.post("/users", userCreateController)

router.post("/login", userLoginController)

router.get("/users", verifyAuthtoken, verifyAdm, userListController)

router.patch("/users/:id", verifyAuthtoken, verifyProfile, userUpdateController)

router.delete("/users/:id", verifyAuthtoken, verifyAdm, userDeleteController)

export default router