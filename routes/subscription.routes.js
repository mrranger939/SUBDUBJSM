import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res)=>{
    res.send({title:"GET all subscriptions"})
});

subscriptionRouter.get('/:id',authorize, getUserSubscription);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res)=>{
    res.send({title:"UPDATE Subscriptions"})
});

subscriptionRouter.put('/', (req, res)=>{
    res.send({title:"GET all subscriptions"})
});

subscriptionRouter.delete('/:id', (req, res)=>{
    res.send({title:"DELETE subscriptions"})
});

subscriptionRouter.get('/user/:id', (req, res)=>{
    res.send({title:"GET all user subscriptions"})
});

subscriptionRouter.put('/:id/cancel', (req ,res)=>{
    res.send({title:"cancel Sunscription"})
})

subscriptionRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title:'GET upcoimg renewals'})
})

export default subscriptionRouter