import React, { FC } from "react";
import styled from "styled-components";
import { StarIcon } from "../StarIcon";

const StarBtn = styled.button`
  max-width: 100px;
  padding: 7px 14px;
  border: 1px solid #aeaeae;
  background: #fafbfc;
  color: #24292e;
  font-weight: bold;
  cursor: pointer;
  vertical-align: middle;
  border-radius: 6px;
  outline: 0;

  svg {
    vertical-align: top;
  }

  svg {
    vertical-align: top;
  }

  svg {
    vertical-align: top;
  }

  &:hover {
    background: rgb(243, 244, 246);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 720px) {
    margin: 10px 0;
  }
`;

const StarButton: FC = () => {
  return (
    <StarBtn>
      <StarIcon />
      Star
    </StarBtn>
  );
};

export { StarButton };
