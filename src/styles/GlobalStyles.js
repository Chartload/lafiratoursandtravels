import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Laila', serif;
    color: #003366; /* Navy blue */
    background-color: #ffffff;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 80px 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #003366;
      display: inline-block;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #003366, #0066cc);
    }
  }

  @media (max-width: 768px) {
    .section-title h2 {
      font-size: 2rem;
    }
    
    section {
      padding: 60px 0;
    }
  }
`;

export default GlobalStyles;