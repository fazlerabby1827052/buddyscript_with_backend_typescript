import React, { useEffect, useRef, useState } from "react";

import Reply from "./Reply";
import axios from "axios";
import conf from "../conf/conf";


const Comment:React.FC<any>=({com})=> {
    
  const commentref=useRef<HTMLTextAreaElement>(null);
    // const cu=useSelector((state:any)=>state.counter.currentUser);
    // const allpostimmutable=useSelector((state:any)=>state.counter.allpost);
    // const allpost=allpostimmutable.map((post:singlepostInterface)=>({...post}));
    // const dispatch=useDispatch();


    // const currenuser=useSelector((state:any)=>state.counter.currentUser)
    // console.log(currentuser)
    const [loading,setloading]=useState(true);
    const [reply,setreply]=useState<any>([]);
    // console.log(com)

    useEffect(()=>{
      
      
      
      setloading(false);
    },[])

    const [commenttoggle,setcommenttoggle]=useState(true);
    
    const handlereply=async(e:React.KeyboardEvent<HTMLTextAreaElement>)=>{
        if(e.key=='Enter'){
            const replycom=(e.target as HTMLTextAreaElement).value;
            const trimdata=replycom.trim();
            if(trimdata){
                // dispatch(replysave({
                //   obj:obj,
                //   com:com,
                //   reply:{
                //     data:trimdata,
                //     creator:cu
                //   }
                (e.target as HTMLTextAreaElement).value="";
                (e.target as HTMLTextAreaElement).blur();

                // }))
                setloading(true);
                try{
                  const res= await axios.post(`${conf.apiUrl}/reply`,{commentId:com.id,text:trimdata},{withCredentials:true});
                  const updatedreply=[res.data[0],...reply];
                    const filterdata=updatedreply.filter((reply,index)=>{
                      if(index<10){
                        return reply;
                      }
                    });
                    if(commenttoggle===false){
                      setreply(filterdata);
                    }
                    

                }
                catch{

                }
                finally{
                  setloading(false);
                }
                
                
            }
            else{
              alert("your reply is empty")
            }
            (e.target as HTMLTextAreaElement).value="";
            (e.target as HTMLTextAreaElement).blur();
        }
        
    }
  return (<div className="_timline_comment_main">
    <div className="_comment_main">
      <div className="_comment_image">
        <a href="profile.html" className="_comment_image_link">
          <img
            src="assets/images/txt_img.png"
            alt=""
            className="_comment_img1"
          />
        </a>
      </div>
      <div className="_comment_area">
        <div className="_comment_details">
          <div className="_comment_details_top">
            <div className="_comment_name">
              <a href="profile.html ">
                <h4 className="_comment_name_title">{com.user?.username}</h4>
              </a>
            </div>
          </div>
          <div className="_comment_status">
            <p className="_comment_status_text">
              <span>{com.text} </span>
            </p>
          </div>
          {/* <div className="_total_reactions"> */}
            {/* <div className="_total_react"> */}
              {/* <span className="_reaction_like">
                
              </span> */}
              {/* <span className="_reaction_heart">
                
              </span> */}
            {/* </div> */}
            <span className="_total"></span>
          {/* </div> */}
          <div className="_comment_reply">
            <div className="_comment_reply_num">
              <ul className="_comment_reply_list">
                <li>
                  {/* <span>Like.</span> */}
                </li>
                <li>
                  <span onClick={()=>{
                    commentref.current?.focus();
                    if(commenttoggle===true){
                      axios.post(`${conf.apiUrl}/reply/comment`,{commentId:com.id},{withCredentials:true}).then(res=>{setreply(res.data)});
                    }
                    else{
                      setreply([])
                    }
                    setcommenttoggle(!commenttoggle)
                    
                  }}>{commenttoggle?'Show reply':'Hide reply'}</span>
                </li>
                <li>
                  {/* <span>Share</span> */}
                </li>
                <li>
                  <span className="_time_link"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Reply/> */}
        {/* {allpost.map((post:singlepostInterface)=>{
            if(post.timeofcreate===obj.timeofcreate){
                return post.comment.map((com2:commentInterface)=>{ 
                    if(com2.id===com.id){
                        return com2.reply.map((comtext:any,id:number)=>(<Reply comtext={comtext}  key={id}/>))
                    }
                })
            }
        })} */}

        



        <div className={`_feed_inner_comment_box `}>
          <form className="_feed_inner_comment_box_form">
            <div className="_feed_inner_comment_box_content">
              <div className="_feed_inner_comment_box_content_image">
                <img
                  src="assets/images/comment_img.png"
                  alt=""
                  className="_comment_img"
                />
              </div>
              <div className={`_feed_inner_comment_box_content_txt `}>
                <textarea
                    onKeyDown={handlereply}
                  className={`form-control _comment_textarea `}
                  ref={commentref}
                  placeholder="Write a Reply"
                  id="floatingTextarea2"
                ></textarea>
              </div>
            </div>
            <div className="_feed_inner_comment_box_icon">
              <button className="_feed_inner_comment_box_icon_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#000"
                    fill-opacity=".46"
                    fill-rule="evenodd"
                    d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="_feed_inner_comment_box_icon_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#000"
                    fill-opacity=".46"
                    fill-rule="evenodd"
                    d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <br/>


        {
          reply.map((element:any,index:number)=>(
            <Reply element={element} key={element.id}/>
          ))
        }

        
      </div>
    </div>
  </div>)

}

export default Comment