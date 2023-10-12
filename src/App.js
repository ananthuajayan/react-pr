import './App.css';
import Header from './header';
import Footer from './footer';
import Blog from './blog';
import Left from './leftblog'
import Secondleft from './secondleft'
import Data from './data'
import { useEffect,useState} from 'react';
import axios from 'axios';




function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs')
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  // const firstArray = [
  //   {
  //     image: "https://www.w3schools.com/w3images/woods.jpg",
  //     Heading: `TITLE HEADING
  //     Title description, April 7, 2014`,
  //     paragraph: `Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.`,
  //   },
  //   {
  //     image: "https://www.w3schools.com/w3images/bridge.jpg",
  //     Heading: `BLOG ENTRY
  //     Title description, April 2, 2014`,
  //     paragraph: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
  //   }]

    const SecondArray = [
      {
        image:"https://www.w3schools.com/w3images/avatar_g.jpg",
        Heading:"My Name",
        paragraph:"Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
      }
    ]

    const thirdArray = [
      {
        image:"https://www.w3schools.com/w3images/workshop.jpg",
        Heading:"Lorem",
        Title:"Sed mattis nunc"
      },
      {
        image:"https://www.w3schools.com/w3images/gondol.jpg",
        Heading:"Ipsum",
        Title:"Praes tinci sed"
      },
      {
        image:"https://www.w3schools.com/w3images/skies.jpg",
        Heading:"Dorum",
        Title:"Ultricies congue"
      },
      {
        image:"https://www.w3schools.com/w3images/rock.jpg",
        Heading:"Mingsum",
        Title:"Lorem ipsum dipsum"
      }
    ]

    const fourthArray = [
      "Travel", "NewYork" , "London" , "IKEA", "Norway", "DIY", "Ideas"
    ]

  return (
    <>
    <Header />
    <div className='container'>
      <div className='rightdiv'>
        {
          posts.map((blogdata)=>{
            return(
              <Blog {...blogdata}/>
            )
          })
        }
      </div>
      <div className='leftdiv'>
      <Left smallcontainer = {SecondArray} /> 
      <div>
      <div className='pop'>
        <h2>Popular Post</h2>
    </div>
      <Secondleft dataContainer = {thirdArray} /> 
      
       </div>

       <div className='deta'>
      <div className='pop'>
        <h2>Tags</h2>
    </div>
      <div className='lastdiv'>
     <div className='one'> <Data FourthArray = {fourthArray} /> </div>
   
      </div>
       </div>
      
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
