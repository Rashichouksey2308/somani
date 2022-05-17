import RepoSearch from "features/repoSearch/RepoSearch";
import { useRouter } from "next/router";
import { createStore } from "store";
import { getReposAsync } from "features/repoSearch/repoSearchSlice";
import DoughnutCart from "../src/components/DoughnutCart/index";
import Leads from "../src/components/Leads/index";

import "bootstrap/dist/css/bootstrap.css";

const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.root_Container}></div>
    </>
  );
};

export async function getStaticProps() {
  const store = createStore();
  await store.dispatch(getReposAsync("python"));

  return {
    props: {
      state: store.getState(),
    },
  };
}

export default IndexPage;
