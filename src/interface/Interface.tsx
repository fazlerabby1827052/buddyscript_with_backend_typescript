
export interface userInterface{
        user: string
        password: string
        confirmpassword: string
}
export interface userLoginInterface{
        user: string
        password: string
}

export interface replyInterface{
        data:string
        creator:string
}

export interface commentInterface{
        id: number
        text: string
        reply: replyInterface[]
        creator:string
}



export interface singlepostInterface{
        text: string
        dif:number
        likedusername:string[]
        timeofcreate:number
        creator:string
        comment:commentInterface[]

}


export interface postInterface{
        id:number
        content:string
        userId:number
        createdAt:Date
        user:{
                id:number
                username:string
        }
}


