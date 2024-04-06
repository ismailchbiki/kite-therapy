import React from "react";
import styled from "styled-components";
import Sport from "./Sport";

const GridView = ({ sports }) => {
  return (
    <Wrapper>
      <div className="sports-container">
        {sports.map((sport) => {
          return <Sport key={sport.id} {...sport} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .sports-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .sports-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .sports-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
