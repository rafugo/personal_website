import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header className="header-color" title="Rafael Fueyo-Gomez" scroll>
          <Navigation className="header-navigation">
              <Link to="/resume">
                <text className="header-link-text">Resume</text>
              </Link>
              <Link to="/aboutme">
                <text className="header-link-text">About Me</text>
              </Link>
              {/* <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link> */}
          </Navigation>
      </Header>
      {/* <Drawer title="Title">
          <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
      </Drawer> */}
      <Content>
          <div className="page-content" />
          <Main/>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
