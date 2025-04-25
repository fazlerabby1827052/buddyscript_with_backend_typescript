
const Reply:React.FC<any>=({element})=> {

  // console.log(element)
  
  
  return (
    <div className="_comment_main">
        
        <div className="_comment_image">
                <a href="" className="_comment_image_link">
                  <img
                    src="assets/images/txt_img.png"
                    alt=""
                    className="_comment_img1"
                  />
                </a>
              </div>
      <div className="_comment_details">
        <div className="_comment_details_top">
          <div className="_comment_name">
            <a href="profile.html ">
              <h4 className="_comment_name_title">{element.user.username}</h4>
            </a>
          </div>
        </div>
        <div className="_comment_status">
          <p className="_comment_status_text">
            <span>
              {element?.text}{" "}
            </span>
          </p>
        </div>
        {/* <div className="_total_reactions"> */}
          {/* <div className="_total_react"> */}
            {/* <span className="_reaction_like">
              
            </span> */}
            {/* <span className="_reaction_heart"> */}
              
            {/* </span> */}
          {/* </div> */}
          {/* <span className="_total"></span> */}
        {/* </div> */}
        <div className="_comment_reply">
          <div className="_comment_reply_num">
            <ul className="_comment_reply_list">
              <li>
                {/* <span>Like.</span> */}
              </li>
              <li>
                {/* <span>Reply.</span> */}
              </li>
              <li>
                {/* <span>Share</span> */}
              </li>
              <li>
                {/* <span className="_time_link"></span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Reply