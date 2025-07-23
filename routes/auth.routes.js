import { Router } from "express";
const authRouter = Router();

authRouter.post('/sign-up', (res, req)=>{
    res.send({title:'Sign up'})
})
authRouter.post('/sign-in', (res, req)=>{
    res.send({title:'Sign in'})
})
authRouter.post('/sign-out', (res, req)=>{
    res.send({title:'Sign out'})
})

export default authRouter