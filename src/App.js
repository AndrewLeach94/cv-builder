import { BasicInfo } from "./components/Basic-Info";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import './styles/styles.css'

const App = () => {
  return (
    <div>
        <header>
          <h1>CV Application</h1>
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
