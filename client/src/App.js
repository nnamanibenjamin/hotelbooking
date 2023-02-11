import {Routes, Route} from 'react-router-dom';
import Home from './pagees/home/Home'
import Hotel from './pagees/hotel/Hotel';
import List from './pagees/list/List';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/hotels' element={<List/>}/>
      <Route exact path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
  );
}

export default App;
