import React,{useEffect} from 'react'
import "./blog.css"

const Blog = () => {

    useEffect(() => {
        const scrollLimit = 1;
    
        const handleScroll = () => {
          if (document.documentElement.scrollTop > scrollLimit) {
            document.documentElement.scrollTop = scrollLimit;
          }
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <div className="blog-container">
        
            <h1>Coming soon, <span>Stay tuned!</span></h1>
        
    </div>
  )
}

export default Blog