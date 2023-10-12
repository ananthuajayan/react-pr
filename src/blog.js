import React from 'react'
import './blog.css';

const blog = (post) => {
    console.log(post)
    return (
        <>
            <div className='full'>
                <div className='image'>
                    <img src={post.image} alt="" />
                </div>
                <div className='heading'>

                    <h3>{post.title}</h3>
                    <div className='parag'>
                        {post.paragraph}
                    </div>
                    <div className='blogFooter'>
                        <button>READ MORE</button>
                        <div className='comments'>Comments <span>0</span></div>
                    </div>
                </div>
            </div>
        </>
    )


}



export default blog