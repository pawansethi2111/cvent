const dbCon = require('../config/dbConfig')



    const{email, password} = req.body;
const checkPassword = (req,data,res) =>{
    console.log(req,'pwd')
    if(data.length>0){
        if(data[0].password==password){

            res.json({
                status:200,
                message : 'Login Success'
            })
        }else{
            res.json({
                status:400,
                message : 'Password not match'
            })
        }

    }
} 
    const sqlQuery = `select * from user_information where email = '${email}'`
    const sqlQuery1 = `select * from useer_information where username = ${email}'`;
    await dbCon.query(sqlQuery,async(error,data)=>{

        try{
            if(data.length==0){
                await dbCon.query(sqlQuery1, async(error,data1)=>{
                    if(data1.length==0){
                        res.json({

                            status:400,
                            message : 'User not exists'
                        })
                    }
                    else{
                        checkPassword(data1,req.body, res)
                    }
                })
             
            }
            if(data.length>0){
                    checkPassword(data,req.body,res)
            }
        }catch(error){
            res.json({
                message: error
            })
        }
    })



module.exports = {userLogin}