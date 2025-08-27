import { SERVER_URL } from "../config/env.js";
import { workFlowClient } from "../config/upstash.js";
import Subscription from "../models/subsription.model.js"

export const createSubscription = async (req, res, next)=>{
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });
        const {workflowRunId} = await workFlowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/remainder`,
            body:{
                subscriptionId: subscription.id,
            },
            header: {
                'content-type': 'application/json',
            },
            retries: 0,
        })
        res.status(201).json({success: true, data:{subscription, workflowRunId}})
    } catch(error) {
        next(error)
    }
}
export const getUserSubscription = async (req, res, next)=>{
    try {
        if(req.user.id != req.params.id) {
            const error = new Error('You are not the owner of this account');
            error.status = 401;
            throw error;
        }
        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({success: true, data: subscriptions});
    } catch (error) {
        next(error)
    }
}