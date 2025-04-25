import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userInterface } from "../interface/Interface";
import axios from "axios";
import conf from "../conf/conf";
import Swal from "sweetalert2";
import { setcurrentuser } from "../redux/CounterSlice";
// import { setcurrentuser } from "../redux/CounterSlice";

export default function Login() {
  const dispatch=useDispatch()
  const navigate = useNavigate(); 
  
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
  });
  // const allusers = useSelector((state:any) => state.counter.alluser);
  // const dispatch = useDispatch();

  const changehandle = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesubmit =async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // let flag = false;
    // allusers?.forEach((element:userInterface) => {
    //   if (
    //     element.user === formData.user &&
    //     element.password === formData.password
    //   ) {
    //     flag = true;
    //     // dispatch(setcurrentuser(element.user));
    //     navigate("/feed");
    //     return;
    //   }
    // });
    // if (!flag) {
    //   alert("wrong credential");
    // }

    try{
      const response=await axios.post(`${conf.apiUrl}/login`,{username:formData.user,password:formData.password},{withCredentials:true})
      dispatch(setcurrentuser({id:response.data.id,name:response.data.username}))
      navigate('/feed')
      
    }
    catch(error:any){
      if(error.response.status===400){
        Swal.fire({title:"Invalid user credentials",position:"top-end",showConfirmButton:false,timer:1500,icon:'error'})
      }
    }

  };
  return (
    <div>
      <section className="_social_login_wrapper _layout_main_wrapper">
        <div className="_shape_one">
          <img src="assets/images/shape1.svg" alt="" className="_shape_img" />
          <img
            src="assets/images/dark_shape.svg"
            alt=""
            className="_dark_shape"
          />
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
        <div className="_social_login_wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className="_social_login_left">
                  <div className="_social_login_left_image">
                    <img
                      src="assets/images/login.png"
                      alt="Image"
                      className="_left_img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="_social_login_content">
                  <div className="_social_login_left_logo _mar_b28">
                    <img
                      src="assets/images/logo.svg"
                      alt="Image"
                      className="_left_logo"
                    />
                  </div>
                  <p className="_social_login_content_para _mar_b8">
                    Welcome back
                  </p>
                  <h4 className="_social_login_content_title _titl4 _mar_b50">
                    Login to your account
                  </h4>
                  <button
                    type="button"
                    className="_social_login_content_btn _mar_b40"
                  >
                    <img
                      src="assets/images/google.svg"
                      alt="Image"
                      className="_google_img"
                    />{" "}
                    <span>Or sign-in with google</span>
                  </button>
                  <div className="_social_login_content_bottom_txt _mar_b40">
                    {" "}
                    <span>Or</span>
                  </div>
                  <form onSubmit={handlesubmit} className="_social_login_form">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="_social_login_form_input _mar_b14">
                          <label className="_social_login_label _mar_b8">
                            Username
                          </label>
                          <input
                            type="text"
                            name="user"
                            onChange={changehandle}
                            value={formData.user}
                            className="form-control _social_login_input"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="_social_login_form_input _mar_b14">
                          <label className="_social_login_label _mar_b8">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            onChange={changehandle}
                            value={formData.password}
                            className="form-control _social_login_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="form-check _social_login_form_check">
                          <input
                            className="form-check-input _social_login_form_check_input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                            readOnly
                          />
                          <label
                            className="form-check-label _social_login_form_check_label"
                            htmlFor="flexRadioDefault2"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="_social_login_form_left">
                          <p className="_social_login_form_left_para">
                            Forgot password?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                        <div className="_social_login_form_btn _mar_t40 _mar_b60">
                          <button className="_social_login_form_btn_link _btn1">
                            Login now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="_social_login_bottom_txt">
                        <p className="_social_login_bottom_txt_para">
                          Dont have an account?{" "}
                          <a
                            onClick={() => {
                              navigate("/");
                            }}
                            href=""
                          >
                            Create New Account
                          </a>
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
