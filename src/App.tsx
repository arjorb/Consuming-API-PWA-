import LazyLoad from 'react-lazyload';
import Title from './components/Title';
import Card from './components/Card';
function App() {


  return (
    <div className="max-w-7xl mx-auto my-5 p-7">
    <Title/>
    <LazyLoad height={200} offset={100}>
    <Card/>
    </LazyLoad>
  </div>
  )
}

export default App
