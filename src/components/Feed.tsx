import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Post from "./Post";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import conf from "../conf/conf";
import { setcurrentuser, setpost } from "../redux/CounterSlice";



export default function Feed() {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(`${conf.apiUrl}/islogin`,{withCredentials:true}).then(res=>{
      dispatch(setcurrentuser({id:res.data.id,name:res.data.username}))
    }).catch(()=>{navigate('/login')})
    axios.get(`${conf.apiUrl}/post`,{withCredentials:true}).then(res=>{
      dispatch(setpost(res.data))})
  },[])
  
  const currentUser=useSelector((state:any)=>state.counter.currentUser)

  if(currentUser.id===-1){
    navigate('/login')
  }
  
  
  return (
    <div>
      <Navbar />
      <Post />
    </div>
  );
}
