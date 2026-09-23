const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }   
}

export {asyncHandler}

//asyncHandler Express route/controller ke around use hota hai, taaki async function ke errors automatically next(err) ke through error middleware tak chale jaayein.

//const asyncHandler=() => {}
//const asyncHandler=(func)=>()=>{}
//const asyncHandler=(func)=>async()=>{}

// const asyncHandler=(fn) => async (req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }//higher order function fn ko as input accept karega



//middle wares checking ke liye lagate hai