import React from 'react';
import Navbar from './navbar/navbar.component.js'
import MyEditor from './editor/my-editor.component.js'
import Styleguide from './styleguide.component.js'

export default function App() {
  return (
    <Styleguide>
      <Navbar />
      <MyEditor />
    </Styleguide>
  );
}
