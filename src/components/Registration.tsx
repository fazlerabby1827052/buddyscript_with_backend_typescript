import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userInterface } from "../interface/Interface";
import axios from "axios";
import conf from "../conf/conf";
import Swal from "sweetalert2";
import { setcurrentuser } from "../redux/CounterSlice";
// import { setuser } from "../redux/CounterSlice";


export default function Registration() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    axios.get(`${conf.apiUrl}/islogin`,{withCredentials:true}).then(res=>{dispatch(setcurrentuser({id:res.data.id,name:res.data.username}))})
  },[])

  const currentuser=useSelector((state:any)=>state.counter.currentUser)
  if(currentuser.id!==-1){
    navigate('/feed')
  }    
  
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    confirmpassword: "",
  });

  // const allusers=useSelector((state:any)=>state.counter.alluser);
  // const dispatch=useDispatch();
  

  const [userData, setUserData] = useState({
    user: "",
    password: "",
    confirmpassword: "",
  });

  const changehandle = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUserData({ ...userData, [name]: value });
  };

  const handlesubmit =async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.user || !formData.password) {
      alert("please fill all fields");
      return;
    }
    const trimuser = formData.user.trim();
    if (formData.user != trimuser) {
      alert("leading space is not allowed in username");
      return;
    }
    if (formData.user[0] >= "0" && formData.user[0] <= "9") {
      alert("first letter not to be a number");
      return;
    }

    
    
    // let flag = false;
    // allusers?.forEach((element:userInterface) => {
    //   if (element.user === formData.user) {
    //     alert("username already exist.try another!");
    //     flag = true;
    //     return;
    //   }
    // });
    // if (flag) {
    //   return;
    // }

    const userObject:{username:string,password:string}={
      username:formData.user,
      password:formData.password
    }

    

    

    // if(!response)
    




	if(formData.password!=formData.confirmpassword){
		alert("password not matched");
		return;
	}

  try{
    const response=await axios.post(`${conf.apiUrl}/register`,userObject)
    Swal.fire({title:"Successfully Registered",position:"top-left",showConfirmButton:false,timer:1000,icon:'success'})
  }
  catch(error:any){
    if(error.response?.status===409){
      Swal.fire({title:"Username Already Exists",position:"top-end",showConfirmButton:false,timer:1500,icon:'error'})
      // alert('Username Already Exists')
    }
    return
    
  }

    // const users = [...allusers, userData];
    // dispatch(setuser(users))

    setFormData({ user: "", password: "",confirmpassword:"" });
    
	navigate('/login')
  };
    return (
        <div>
          <section className="_social_registration_wrapper _layout_main_wrapper">
            <div className="_shape_one">
              <img src="assets/images/shape1.svg" alt="" className="_shape_img" />
              <img src="assets/images/dark_shape.svg" alt="" className="_dark_shape" />
            </div>
            <div className="_shape_two">
              <img src="assets/images/shape2.svg" alt="" className="_shape_img" />
              <img
                src="assets/images/dark_shape1.svg"
                alt=""
                className="_dark_shape _dark_shape_opacity"
              />
            </div>
            <div className="_shape_three">
              <img src="assets/images/shape3.svg" alt="" className="_shape_img" />
              <img
                src="assets/images/dark_shape2.svg"
                alt=""
                className="_dark_shape _dark_shape_opacity"
              />
            </div>
            <div className="_social_registration_wrap">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="_social_registration_right">
                      <div className="_social_registration_right_image">
                        <img src="assets/images/registration.png" alt="Image" />
                      </div>
                      <div className="_social_registration_right_image_dark">
                        <img src="assets/images/registration1.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="_social_registration_content">
                      <div className="_social_registration_right_logo _mar_b28">
                        <img
                          src="assets/images/logo.svg"
                          alt="Image"
                          className="_right_logo"
                        />
                      </div>
                      <p className="_social_registration_content_para _mar_b8">
                        Get Started Now
                      </p>
                      <h4 className="_social_registration_content_title _titl4 _mar_b50">
                        Registration
                      </h4>
                      <button
                        type="button"
                        className="_social_registration_content_btn _mar_b40"
                      >
                        <img
                          src="assets/images/google.svg"
                          alt="Image"
                          className="_google_img"
                        />{" "}
                        <span>Register with google</span>
                      </button>
                      <div className="_social_registration_content_bottom_txt _mar_b40">
                        {" "}
                        <span>Or</span>
                      </div>
                      <form onSubmit={handlesubmit} className="_social_registration_form">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_social_registration_form_input _mar_b14">
                              <label className="_social_registration_label _mar_b8">
                                Username
                              </label>
                              <input
                                type="text" name="user"
                                value={formData.user}
                                onChange={changehandle}
                                className="form-control _social_registration_input"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_social_registration_form_input _mar_b14">
                              <label className="_social_registration_label _mar_b8">
                                Password
                              </label>
                              <input
                                type="password" name="password"
                                value={formData.password}
                                onChange={changehandle} 
                                className="form-control _social_registration_input"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_social_registration_form_input _mar_b14">
                              <label className="_social_registration_label _mar_b8">
                                Repeat Password
                              </label>
                              <input
                                type="password" name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={changehandle}
                                className="form-control _social_registration_input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <div className="form-check _social_registration_form_check">
                              <input
                                className="form-check-input _social_registration_form_check_input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                checked readOnly
                              />
                              <label
                                className="form-check-label _social_registration_form_check_label"
                                htmlFor="flexRadioDefault2"
                              >
                                I agree to terms & conditions
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                              <button
                                className="_social_registration_form_btn_link _btn1"
                              >
                                Register now
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="_social_registration_bottom_txt">
                            <p className="_social_registration_bottom_txt_para">
                              Have an account?{" "}
                              <a onClick={()=>(navigate('/login'))} href="" >Login</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}
