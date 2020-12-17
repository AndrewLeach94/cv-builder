import { BasicInfo } from "./components/Basic-Info";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import './styles/styles.css'

const App = () => {
  return (
    <div id="main-container">
        <header>
          <h1>CV Builder</h1>
          <a href="https://github.com/AndrewLeach94/cv-builder">
            <i className="fa fa-github"></i>
          </a>
        </header>
        <div id="cv_body">
          <BasicInfo />
          <Skills />
          <Summary />
          <WorkExperience />
          <Education />
        </div>
    </div>
  )
}

export default App;
