import './App.css';
import { Welcome } from '../welcome/Welcome';
import { WhyNotorium } from '../whyNotorium/WhyNotorium';
import { Characteristics } from '../characteristics/Characteristics';
import { CharacteristicsItems } from '../characteristics-items/CharacteristicsItems';

function App() {

  return (
    <div className="main-container">
      <Welcome/>
      <WhyNotorium/>
      <Characteristics/>
      <CharacteristicsItems/>
    </div>
  );
}

export default App;
