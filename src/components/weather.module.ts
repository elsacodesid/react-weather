import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);

  .container {
    background: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }

  .searchArea {
    display: flex;

    justify-content: center;
    margin-bottom: 20px;
  }

  .searchInput {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 70%;
  }

  .searchCircle {
    background: #71b7e6;
    border-radius: 50%;
    padding: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .weatherArea {
    margin-bottom: 20px;
  }

  .cityName {
    font-size: 2.5em;
    margin: 0;
  }

  .country {
    font-size: 1.2em;
    color: #999;
  }

  .icon {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`;
