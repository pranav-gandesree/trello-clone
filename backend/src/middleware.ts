import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from './models/User';



const verifyToken = async (req: Request | any, res: Response, next: NextFunction) => {
    try{

        const {authorization }= req.headers;
        if(!authorization){
            return res.send("no authorization found")
        }
        
        const accessToken = authorization.split(" ")[1];
        const payload = await jwt.verify(accessToken, process.env.JWT_SECRET!)
        
        const {id} = payload as any
        
        if(!id){
            return res.send("Inavlid token provided")
        }
        
        const user = await User.findById(id);
        
        if(!user){
            return res.send("user not registed")
        }

        req.user = user;
        next();
        
    }catch(error : any){
        if(error.name === "TokenExpiredError"){
            return res.send("token expired");
        }
        res.status(500).send("server error")
    }
}
    
export default verifyToken;

