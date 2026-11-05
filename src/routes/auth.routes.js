import {Router} from "express";
import * as authController from "../controllers/auth.controllers.js";

const authRouter = Router();

// authRouter.post(" /api/auth/register")

authRouter.post("/register", authController.registerUser);




/* 
post /api/auth/login
*/
authRouter.post("/login", authController.loginUser);
 

 /*
 GET /api/auth/get-me
 */
authRouter.get("/get-me", authController.getMe);

/* 
GET /api/auth/refresh-token
*/

authRouter.get("/refresh-token", authController.refreshToken);



/* 
GET /api/auth/logout
*/
authRouter.get("/logout", authController.logoutUser);


/* 
GET /api/auth/logout-to-all
*/

authRouter.get("/logout-to-all", authController.logoutAllSessions);


authRouter.get("/verify-email", authController.verifyemail);

export default authRouter;