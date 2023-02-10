import styled from 'styled-components';

export const QrCodeStyles = styled.div`
    width: 100%;
    padding: 5%;
    background-color: #4682B4;
    color: #fff;

    hr {
        margin-top: 1em;
    }
    
    main {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 4.3em 7em;
        border: 2px solid #fff;
        padding: 2em;
    }

    .left-side {
        width: 40%;
    }
    
    .text {
        display: flex;
        align-items: center;
        gap: 1em;
        border: 2px solid #fff;
        padding: 0.5em 1em;
        font-size: 1.4em;
        /* border-radius: 0.5em; */
        user-select: none;
    }

    .diagram {
        width: 40%;
    }

    .diagram img {
        width: 100%;
        /* margin-bottom: 2em; */
        /* border-radius: 0.8em; */
    }

    .right-side {
        background-color: #fff;
        width: 28%;
        height: 18em;
        overflow: hidden;
    }

    .right-side img {
        object-fit: cover;
    }
`;