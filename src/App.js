import { BasicInfo } from "./components/Basic-Info";
import { Skills } from "./components/Skills";
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
        </div>
    </div>
  )
}

export default App;
