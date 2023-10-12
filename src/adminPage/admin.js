// export default Admin
import React, { useState } from 'react';
import './admin.css';
import '../blog.css';
import axios from 'axios';

const Admin = () => {
    const [posts, setPosts] = useState(
        {
            image: "",
            title: "",
            paragraph: ""
        }
    );

function fetchData(e){
    e.preventDefault()
    axios.post('http://localhost:3001/api/blogs',posts)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

}

    const Targets = (e) => {
        setPosts({ ...posts, [e.target.id]: e.target.value });
        // console.log(e.target.value);
    };

 


    return (
        <>
            <div className='admin'>
                <form className='textBox' onSubmit={fetchData} >
                
                    <label htmlFor="image">Image</label>
                    <input type="text" className='details' placeholder='Image Link' id='image' onChange={Targets} />

                    <label htmlFor="title">Title</label>
                    <input type="text" className='details' placeholder='Title' id='title' onChange={Targets} />

                    <label htmlFor="para">Paragraph</label>
                    <input type="text" className='details' placeholder='Paragraph' id='paragraph' onChange={Targets} />

                    <button className='blogbtn' type='submit' >Create Blog</button>
                </form>

                <div className='displayArea'>


                    <div className='ful' >
                        <div className='image'>
                            <img src={posts.image} alt='' />
                        </div>
                        <div className='heading'>
                            <h3>{posts.title}</h3>
                            <div className='parag'>
                                {posts.paragraph}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
    }

export default Admin;
