import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postInterface } from "../interface/Interface";

interface CurrentUserInterface{
  id:number
  name:string
}

interface StateType{
  allpost:any[]
  currentUser: any
}

const initialState:StateType={
  allpost:[],
  currentUser:{id:-1,name:""}
}






export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setpost:(state,action)=>{
        state.allpost=action.payload;
      },
      setcurrentuser:(state,action)=>{
        state.currentUser=action.payload
      },
      addpost:(state,action:any)=>{
        state.allpost.unshift(action.payload)
        state.allpost= state.allpost.filter((post,index)=>{
          if(index<10){
            return post
          }
        })
      },
      editpost:(state,action:any)=>{
        const updatedpost:any=action.payload
        const index=state.allpost.findIndex(post=>post.id===updatedpost.id)
        if(index!=-1){
          state.allpost[index]=updatedpost
        }
      },
      deletepost:(state,action:PayloadAction<postInterface>)=>{
        state.allpost=state.allpost.filter(post=> post.id!==action.payload.id)
      },
      addlike:(state,action:any)=>{
        const postid=action.payload;
        const index=state.allpost.findIndex(post=>post.id===postid);
        if(index!==-1){
          state.allpost[index].totallike=state.allpost[index].totallike+1
          state.allpost[index].likecheck=1
        }
      },
      removelike:(state,action:any)=>{
        const postid=action.payload;
        const index=state.allpost.findIndex(post=>post.id===postid);
        if(index!==-1){
          state.allpost[index].totallike=state.allpost[index].totallike-1;
          state.allpost[index].likecheck=0
        }
      },
      addcomment:(state,action:any)=>{
        const postid=action.payload;
        const index=state.allpost.findIndex(post=>post.id===postid);
        if(index!==-1){
          state.allpost[index].commentcount=state.allpost[index].commentcount+1;
        }
      },
      setliker:(state,action:any)=>{
        const pl=action.payload;
        const index=state.allpost.findIndex(post=>post.id===pl.postId);
        if(index!==-1){
          state.allpost[index].likers=pl.liker;
        }
      }
    }
  })
  
  
  
  // Action creators are generated for each case reducer function
  export const { setpost,setcurrentuser,addpost,editpost,deletepost,addlike,removelike,addcomment,setliker } = counterSlice.actions
  
  export default counterSlice.reducer