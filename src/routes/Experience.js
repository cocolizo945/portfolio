import '../styles/experience.css';
import itt from '../images/itt.jpg'
import hyve from '../images/hyve.png'
export default function Experience() {
    return ( <main className="main">
      <canvas>

      </canvas>
      
      <div className="container">
        <div className="exp-container">
          <div className="item exp-item-1">
          <h2>Hyve Code DevOps</h2>
          </div>
          <div className="item item-4"></div>
          <div className="item item-2">
          <img className="hyve" src={hyve} alt="" />
          </div>
          <div className="item text-item-3">Automatización de flujos de trabajo y despliegue de aplicaciones. Utilizo GitHub Actions y Jenkins para implementar pipelines de CI/CD que mejoran la eficiencia del desarrollo. Con Docker, creo contenedores para asegurar la portabilidad de las aplicaciones. Administro servidores con NGINX para balanceo de carga y gestión de tráfico. Mi enfoque se centra en optimizar el ciclo de vida del desarrollo, asegurando implementaciones rápidas y fiables.</div>
        </div>
        <div style={{height: "400px"}}> </div>
      </div>
      <div style={{height: "50px"}}></div>


      <div className="container">
        <div className="exp-container">
          <div className="item exp-item-1">
            <h2>Hyve Code BackEnd</h2>
          </div>
          <div className="item item-4"></div>
          <div className="item item-2">
          <img className="hyve" src={hyve} alt="" />
          </div>
          <div className="item text-item-3">Desarrollador full stack especializado en crear aplicaciones web y móviles. Utilizo React.js para interfaces web y React Native para aplicaciones móviles. En el backend, empleo Python y Flask para APIs RESTful, junto con PostgreSQL para bases de datos. Uso Docker para contenerización y despliegue en Linux, asegurando soluciones eficientes y escalables.</div>
        </div>
        <div style={{height: "350px"}}> </div>
      </div>
      <div style={{height: "50px"}}></div>

      <div className="container">
        <div className="main-container">
          <div className="item exp-item-1">
            <h2>Instituto Tecnologico de Tapachula</h2>
          </div>
          <div className="item item-4"></div>
          <div className="item item-2">
          <img className="pfp" src={itt} alt="" />
          </div>
          <div className="item item-3">Enfoque integral en áreas como programación, bases de datos, redes de computadoras, e ingeniería de software, combinando teoría y práctica. </div>
        </div>
      </div>
      <div style={{height: "80px"}}>

      </div>

      <div className="container">
      <div className="button" >
        <b>Contactame @</b>
      </div>
      </div>
    </main>
  )
  }