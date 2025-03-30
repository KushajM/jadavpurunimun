import React,{useEffect} from 'react'
import "./blog.css"

const Blog = () => {

  useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = "hidden";
    
        return () => {
          // Re-enable scrolling when leaving the page
          document.body.style.overflow = "auto";
        };
      }, []);


  return (
    <div className="blog-container">
        
            <h1>Coming soon, <span>Stay tuned!</span></h1>
        
    </div>
  )
}

export default Blog

// import React, { useEffect } from 'react';
// import "./blog.css";

// const Blog = () => {
//   useEffect(() => {
//     // Disable scrolling
//     document.body.style.overflow = "hidden";

//     return () => {
//       // Re-enable scrolling when leaving the page
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div className="blog-container">
//       <div className="instagram-embed">
//         <iframe
//           src="https://www.instagram.com/judebatingsociety/embed"
//           width="600"
//           height="800"
//           frameBorder="0"
//           scrolling="no"
//           // allowTransparency="true"
//           allow="encrypted-media"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Blog;