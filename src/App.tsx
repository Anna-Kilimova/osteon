import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Prices } from './pages/Prices'
import {Footer} from './components/Footer';

function App() {
  return <div className='App'>
    <BrowserRouter>
      <Header />
      <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quis voluptatum. Amet aut autem commodi cumque delectus dicta dolore dolorum ducimus eum eveniet fuga iste itaque iure iusto laboriosam magni minima nesciunt nisi odio placeat possimus provident quis quo quos rem repellat tempora tenetur voluptatem voluptatibus, voluptatum. Asperiores cum debitis doloremque ex hic id ipsum neque omnis tempore totam. A consequuntur delectus, dicta earum, error fuga, magni maxime minima nobis quidem repudiandae voluptate! Asperiores assumenda autem ipsam laudantium quas sed veniam. A alias blanditiis, consequuntur corporis eveniet fuga in rem. Amet asperiores culpa cum, dolore eum explicabo fugit illo ipsum itaque libero molestias, officiis quae quaerat quos sapiente sit ut! Dolore eum odit officiis quae quas ratione rem sapiente sit veniam. Aperiam commodi dolore eaque earum explicabo illum iste labore laboriosam, minima nobis odio optio pariatur quidem suscipit vero! Amet animi fugiat minus nihil quos rem repellat! Distinctio, ut, voluptate.    </div>
      <Footer />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/prices' element={ <Prices /> } />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
