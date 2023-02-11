import styled from 'styled-components';

export const QrCodeStyles = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  hr {
    width: 80%;
    border: 1px solid #ccc;
    margin: 2rem 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 2rem 0;
    background-color: #f6d365;
    padding: 1rem;
    border-radius: 5px;
    background-image: linear-gradient(to right, #00c6ff, #0072ff);

    .text {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;

      p {
        color: #fff;
      }
      
      svg {
        font-size: 2rem;
        margin-right: 0.5rem;
        color: #fff;
      }
    }
  }
`;










// import styled from 'styled-components';

// export const QrCodeStyles = styled.div`
//     width: 100%;
//     padding: 5%;
//     background-color: #4682B4;
//     color: #fff;
//     height: 80em;

//     hr {
//         margin-top: 1em;
//     }
    
//     main {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         margin: 4.3em 7em;
//         border: 2px solid #fff;
//         padding: 2em;
//     }

//     .left-side {
//         width: 40%;
//     }
    
//     .text {
//         display: flex;
//         align-items: center;
//         gap: 1em;
//         border: 2px solid #fff;
//         padding: 0.5em 1em;
//         font-size: 1.4em;
//         user-select: none;
//     }

//     .diagram {
//         width: 10%;
//     }

//     .diagram img {
//         width: 100%;
//     }

//     .right-side {
//         background-color: #fff;
//         width: 75%;
//         height: 50em;
//         overflow: hidden;
//     }

//     .right-side img {
//         object-fit: cover;
//     }
// `;