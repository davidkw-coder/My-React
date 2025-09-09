import './index.css'
import imageOne from '../public/1.jpg'
function App() {

    return (
        <div>
            <header className="header">
                <nav className="navbar">
                   <p>Andy</p>
                    <div>
                        <a href="#">About</a>
                        <a href="#">Experience</a>
                        <a href="#">Project</a>
                        <a href="#">Contact</a>
                    <img src={imageOne} alt="" className="imagesone" />
                    </div>
                </nav>

            </header>
            <body>
                <div className="hero">
                    <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum soluta excepturi sapiente expedita a veniam rerum magnam quasi dolores velit sunt asperiores nesciunt exercitationem inventore, praesentium maxime ipsam laboriosam.</p>
                    <button></button>
                    </div>
                </div>
                
            </body>
            <footer>

            </footer>
        </div>
    )
  }
  
  export default App