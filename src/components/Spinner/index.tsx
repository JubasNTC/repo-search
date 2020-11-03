import React, { FC } from "react";
import styled from "styled-components";

const Loader = styled.div`
  margin: 200px auto;
  align-items: center;

  h2 {
    text-align: center;
  }
`;

const Spinner: FC = () => {
  return (
    <Loader>
      <h2>Searching repos...</h2>
    </Loader>
  );
};

export { Spinner };
