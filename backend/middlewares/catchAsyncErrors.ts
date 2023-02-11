import express from "express"

export = (asyncFunc: any)=> (req: express.Request , res: express.Response , next: any)=>{
    Promise.resolve(asyncFunc(req,res,next)).catch(next);
}

