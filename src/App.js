import React from 'react';
import './App.css';
import Street from "./Component/Profile/Address"
import Esm from "./Component/Profile/FullName"
import Taswira from "./Component/Profile/ProfilPhoto"
const App = () => (
<div className="inline">

   <div className='text'>
  <Esm />
  <Street />
   </div>

  <Taswira/>

</div>
);

export default App;
