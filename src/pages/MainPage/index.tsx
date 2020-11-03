import React, { useCallback } from "react";
import { gql, useMutation } from "@apollo/client";
import _ from "lodash";

import { Layout } from "../../components/Layout";
import { RepoCardMain } from "../../components/RepoCardMain";
import { Search } from "../../components/Search";
import { Spinner } from "../../components/Spinner";

const query = gql`
  mutation searchRepo($searchText: String!) {
    repo(repo: $searchText) @rest(type: "Repository", path: "?q={args.repo}") {
      total_count
      items
    }
  }
`;

const delay: number = 500;

const MainPage = () => {
  const [searchRepo, { data: repos, loading }] = useMutation(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(
    _.debounce((q) => searchRepo({ variables: { searchText: q } }), delay),
    []
  );

  const reposToRender = repos ? repos.repo.items : null;

  return (
    <Layout>
      <Search onSearch={delayedQuery} />
      {loading && <Spinner />}
      {reposToRender &&
        reposToRender.map((repo: any) => {
          return <RepoCardMain key={repo.id} repo={repo} />;
        })}
    </Layout>
  );
};

export { MainPage };
