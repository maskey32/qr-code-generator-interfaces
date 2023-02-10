import styled from 'styled-components';

export const MovieStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    min-height: calc(100vh - 8em);

    .movie-page-title {
        margin-bottom: 16px;
    }

    .movie-page-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .movie-card {
        width: 300px;
        margin: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .movie-card-title {
        margin-top: 16px;
    }

    .movie-card-image {
        width: 100%;
        margin-top: 16px;
    }
`;