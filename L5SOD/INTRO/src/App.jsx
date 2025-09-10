import './main'
// import './index.css'
// import imageOne from '../public/1.jpg'
// function App() {

//     return (
//         <div>
//             <header className="header">
//                 <nav className="navbar">
//                    <p>Andy</p>
//                     <div>
//                         <a href="#">About</a>
//                         <a href="#">Experience</a>
//                         <a href="#">Project</a>
//                         <a href="#">Contact</a>
                    
//                     </div>
//                 </nav>

//             </header>
//             <body>
//                 <div className="hero">
//                     <div><img src={imageOne} alt="" className="imagesone" /></div>
//                     <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum soluta excepturi sapiente expedita a veniam rerum magnam quasi dolores velit sunt asperiores nesciunt exercitationem inventore, praesentium maxime ipsam laboriosam.</p>
//                     <button></button>
//                     </div>
//                 </div>

                
                
//             </body>
//             <footer>

//             </footer>
//         </div>
//     )
//   }
  
//   export default App

// MAPPING

// const fruitlist = ['apple', 'banana', 'cherry'];

// function App(fruit) {
//   return(
//    <>
//    {fruitlist.map(item => 
//   <li>{item}</li>)}
//    </>
//   )
// }

// export default App

const users = [
  {id: 1, name: "Gisubizo", age: 41},
  {id: 2, name: "James", age: 48},
  {id: 3, name: "Jibu", age: 31}
]

function App(user){
  return(
    <>
    {users.map(user =>
    <li>{user.name}
      </li>)}
    </>
  )
}

export default App