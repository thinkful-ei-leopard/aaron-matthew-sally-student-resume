import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="contact">
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" style={{width: '25%', height: '25%'}} alt="Sally Student" />
        <h1>Sally Student</h1>
        <address>
          <a href="mailto:sally.student@test.com?subject=Sally Student Resume Response">sally.student@test.com</a>
          <br />
          <span>tel. 555-555-5555</span>
        </address>
      </header>
      <section class="education">
        <h2>Education</h2>
        <ul>
          <li>University of California Los Angeles</li>
          <li>
            <ul>
              <li>Bachelors in Computer Programming</li>
              <li>Graduated March 2018</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="experience">
        <h2>Experience</h2>
        <ul>
          <li>Google</li>
            <li>
              <ul>
                <li>Software Engineer</li>
                <li>March 2018 - March 2019</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc.</li>
              </ul>
            </li>
          <li>Facebook</li>
            <li>
              <ul>
                <li>Full Stack Engineer</li>
                <li>March 2019 - Present</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra.</li>
              </ul>
            </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
