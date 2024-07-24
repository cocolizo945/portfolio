import styles from '../styles/home.css'
import foto from '../images/pfp.png'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



export default function Home() {
  return (
    document.title = "Cocolizo945",
    <main className="main">
      <canvas>

      </canvas>
      <div className="container">
        <div className="main-container">
          <div className="item item-1">
            <h1>Eduardo Mendez Miranda</h1>
          </div>
          <div className="item item-4"></div>
          <div className="item item-2">
            <img className="pfp" src={foto} alt="" />
          </div>
          <div className="item item-3"> Desarrollador junior, apasionado por la tecnologia y sus aplicaciones, amante del DIY y emocionado por aprender siempre que se pueda.</div>
        </div>
      </div>
      <div className="container">
        <div className="citation-container">
          <div className="item cite-item-1">
            <h4>Mi semblante de estudiante es en esencia ser feliz, Siendo el eterno postulante, el eterno aprendiz</h4>
          </div>
          <div className="item cite-item-2">- El aprendiz, el cuarteto de nos</div>
        </div>
      </div>
      <div className="container">
        <div className="bio-social">
          <div className="item biosocial-item1"><h2>Bio</h2></div>
          <div className="item biosocial-item2"></div>
          <div className="item biosocial-item3"><b>2002</b> </div>
          <div className="item biosocial-item4">Nacimiento Mexico, Naucalpan</div>
          <div className="item biosocial-item5"><b>2020</b></div>
          <div className="item biosocial-item6">Estudiante de Ing en sistemas y 
                trabajador como programador BackEnd y
                encargado de Servidores en Hyve Code 
                S.A de C.V.</div>
        </div>
      </div>

      <div className="container">
      <div className="social">
          <div className="item social-item1"><h2>Redes</h2></div>
          <div className="item social-item2"></div>
          <div className="item social-item3"><FaGithub size={30}/> </div>
          <div className="item social-item4"><a href="https://github.com/cocolizo945" target="_blank">cocolizo945 </a></div>
          <div className="item social-item5"><BsTwitterX size={30}/></div>
          <div className="item social-item6"><a href="https://twitter.com/cocolizo945" target="_blank">cocolizo945 </a></div>
         </div>
      </div>
      <div className="container">
      <div className="button" >
        <b>Contactame @</b>
      </div>
      </div>
    </main>
  )
}

