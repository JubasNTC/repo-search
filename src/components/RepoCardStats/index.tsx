import React, { FC } from "react";
import styled from "styled-components";
import { StarIcon } from "../StarIcon";
import NumberFormat from "react-number-format";
import { LANGUAGES } from "../../common/constants";

type RepoCardStatsProps = {
  language: string;
  stargazers_count: number;
  repoUrl: string;
  name: string;
  forks_count: number;
};

const RepoStats = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;

  .lang-color {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .stat-item {
    margin-right: 16px;
    color: rgb(88 96 105);
    text-decoration: none;
  }

  a.stat-item:hover {
    color: rgb(3, 102, 214);
  }

  svg {
    position: relative;
    top: 2px;
    fill: currentColor;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RepoCardStats: FC<RepoCardStatsProps> = ({
  language,
  repoUrl,
  stargazers_count,
  name,
  forks_count,
}) => {
  return (
    <RepoStats>
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
    </RepoStats>
  );
};

export { RepoCardStats };
