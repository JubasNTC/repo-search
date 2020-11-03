import React, { FC } from "react";
import styled from "styled-components";
import { RepoCardHeader } from "../RepoCardHeader";
import { RepoCardDiscription } from "../RepoCardDiscription";
import { RepoCardStats } from "../RepoCardStats";
import { StarButton } from "../StarButton";

type RepoCardMainProps = {
  repo: {
    language: string;
    forks_count: number;
    stargazers_count: number;
    description: string;
    html_url: string;
    owner: { login: string; html_url: string };
    name: string;
    stargazers_url: string;
  };
};

const RepoCardStyle = styled.article`
  max-width: 900px;
  margin: auto;
  padding: 15px;
  color: rgb(88 96 105);
  border: 1px solid #ccc;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const RepoCardMain: FC<RepoCardMainProps> = ({
  repo: {
    forks_count,
    name,
    stargazers_count,
    description,
    language,
    html_url: repoUrl,
    owner: { login, html_url: ownerUrl },
  },
}) => {
  return (
    <RepoCardStyle>
      <CardContainer>
        <RepoCardHeader
          name={name}
          login={login}
          ownerUrl={ownerUrl}
          repoUrl={repoUrl}
        />
        <a href={repoUrl} target="_blank" rel="noreferrer">
          <StarButton />
        </a>
      </CardContainer>
      <RepoCardDiscription description={description} />
      <RepoCardStats
        language={language}
        repoUrl={repoUrl}
        stargazers_count={stargazers_count}
        name={name}
        forks_count={forks_count}
      />
    </RepoCardStyle>
  );
};

export { RepoCardMain };
