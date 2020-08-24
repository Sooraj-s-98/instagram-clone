import React from 'react';

const Profile = ()=>{
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
             <div style={{ margin:"18px 0px", borderBottom:"1px solid grey"}}>    
                 <div style={{ display:"flex", justifyContent:"space-around",}}>
                     <div>
                         <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                         src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>           
                     </div>
                 <div>
                 <h4>sooraj s</h4>
                 <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>29 posts</h6>
                    <h6>500 followers</h6>
                    <h6>300 following</h6>
                 </div>
             </div>
         </div>   
             <div className="file-field input-field" style={{margin:"10px"}}>
                <div className="btn #64b5f6 blue darken-1">
                    <span>Update pic</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                </div>
            </div>
         </div>  
         <div className="gallery">
            <img  src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> 
            <img  src="https://images.unsplash.com/photo-1552985247-03b1fddb53d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/> 
            <img  src="https://images.unsplash.com/photo-1544296755-7c9f940207ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>  
            <img  src="https://images.unsplash.com/photo-1585399090050-aad1411f5e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>  
            <img  src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>           
        </div>    
    </div>
    )

}
export default Profile;