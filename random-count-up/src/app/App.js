import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JsxInAction from 'pages/JsxInAction';
import StatelessComponent from 'pages/Stateless';
import StatefulComponent from 'pages/Stateful';
import SideEffects from 'pages/SideEffects';
import RandomCountUp from 'pages/RandomCountUp/RandomCountUp';
import { TiltCardContainer } from 'components';

function App() {
  return (
    <div className="app" style={{ padding: 40 }}>
      <Router>
        <Routes>
          <Route path="/" element={<div children="this is home page" />} />
          <Route path="/tilt" element={<TiltCardContainer />} />
          <Route path="/side-effects" element={<SideEffects />} />
          <Route path="/jsx-in-action" element={<JsxInAction />} />
          <Route path="/random-count-up" element={<RandomCountUp />} />
          <Route path="/stateless" element={<StatelessComponent />} />
          <Route path="/stateful" element={<StatefulComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
