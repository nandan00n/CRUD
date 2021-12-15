import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EducationalComponent from './components/EducationalComponent';
import Experience from './components/ExperienceComponent';

export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Education and Experience Form</h4>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="second" title="Education">
          <EducationalComponent />
        </Tab>
        <Tab eventKey="first" title="Experience">
         <Experience/>
        </Tab>
      </Tabs>
    </div>
  );
}
