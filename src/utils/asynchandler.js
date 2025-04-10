/************************* USING PROMISES*****************************/

const asyncHandler =(requesHandler) =>{
    return  (req,res,next) =>{
            Promise.resolve(requesHandler(req, res, next)).catch((err) => next(err))
      }
}




export {asyncHandler}

/*********************USING TRY CATCH************************* */
// const asyncHandler = (fn) =>async (req,res,next) => {
//       try{
//            await fn(req,res,next)
//       } catch(error){
//             res.status(err.code || 500).json({
//                   success: false,
//                   message: err.message
//             })
//       }
// }

