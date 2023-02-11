import styled from 'styled-components';

export const FooterStyles = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    background-color: #333;
    color: #fff;
    font-family: Arial, sans-serif;

    p {
        margin: 0;
        padding: 0.5rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        font-size: 1.5rem;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0;
    }

    .phone, .mail {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        
        h3 {
            font-size: 1.2rem;
        }

        .container {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .contact-info {
            flex-direction: column;
        }
    }
`;