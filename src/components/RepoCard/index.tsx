import React, { FC } from "react";
import styled from "styled-components";
import { StarIcon } from "../StarIcon";
import { LANGUAGES } from "../../common/constants";
import NumberFormat from "react-number-format";

type RepoCardProps = {
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

  &:hover {
    background: rgb(243, 244, 246);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 720px) {
    margin: 10px 0;
  }
`;

const RepoLink = styled.span`
  a {
    margin-left: 4px;
    color: rgb(3 102 214);
    font-size: 18px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RepoDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoCard: FC<RepoCardProps> = ({
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
        <RepoLink>
          <svg
            className="octicon octicon-repo mr-1 text-gray"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a
            className="repo-link"
            target="_blank"
            rel="noreferrer"
            href={ownerUrl}
          >
            {login}
          </a>{" "}
          /{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={repoUrl}
            className="text-bold"
          >
            {name}
          </a>
        </RepoLink>
        <a target="_blank" rel="noreferrer" href={repoUrl}>
          <StarBtn>
            <StarIcon />
            Star
          </StarBtn>
        </a>
      </CardContainer>
      <div className="card-title">
        <p>{description}</p>
      </div>
      <RepoDesc>
        <div className="repo-stats">
          <span>
            <span
              style={{ backgroundColor: LANGUAGES[language] }}
              className="lang-color"
            ></span>
            <span className="language stat-item">{language}</span>
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${repoUrl}/stargazers`}
            className="total-stars stat-item"
          >
            <StarIcon />
            <NumberFormat
              value={stargazers_count}
              displayType="text"
              thousandSeparator={true}
            />
          </a>
          <a
            href={`${repoUrl}/network/members.${name}`}
            target="_blank"
            rel="noreferrer"
            className="forks-total stat-item"
          >
            <svg
              aria-label="fork"
              className="octicon octicon-repo-forked"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            <NumberFormat
              value={forks_count}
              displayType="text"
              thousandSeparator={true}
            />
          </a>
        </div>
      </RepoDesc>
    </RepoCardStyle>
  );
};

export { RepoCard };
