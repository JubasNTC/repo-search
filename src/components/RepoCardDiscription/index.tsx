import React, { FC } from "react";
import styled from "styled-components";

type RepoCardDiscriptionProps = {
  description: string;
};

const CardDesciption = styled.div`
  p {
    margin: 0 0 8px;
    max-width: 90%;
  }
`;

const RepoCardDiscription: FC<RepoCardDiscriptionProps> = ({ description }) => {
  return (
    <CardDesciption>
      <p>{description}</p>
    </CardDesciption>
  );
};

export { RepoCardDiscription };
