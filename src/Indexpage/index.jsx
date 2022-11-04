import * as React from 'react';
import './index.css';

import Header from './Header';
import Profile from './Profile';
import Links from './Links';
import Footer from './Footer';
import SlackGitIcons from './SlackGitIcons';
import Horizontal from './Horizontal';


function Home() {

  return (
    <div>
      <Header />
      <Profile />
      <Links />
      <SlackGitIcons />
      <Horizontal />
      <Footer />
    </div>
  );
}

export default Home