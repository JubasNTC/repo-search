import React, { FC } from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  margin: 50px auto;
  text-align: center;

  h2 {
    font-size: 22px;
    font-weight: 400;
    color: rgb(88, 96, 105);
  }

  input {
    width: 90%;
    height: 60px;
    padding-left: 20px;
    font-size: 22px;
    outline: none;
    box-sizing: border-box;
  }
`;

type SearchProps = {
  onSearch: (repo: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch }) => {
  const handleInputChange = ({ target: { value: repo } }: any) => {
    if (repo) {
      onSearch(repo);
    }
  };

  return (
    <>
      <SearchBox>
        <h2>See what the GitHub community is most excited about today</h2>
        <input
          type="text"
          placeholder="search repositories"
          autoFocus
          onChange={handleInputChange}
        />
      </SearchBox>
    </>
  );
};

export { Search };
