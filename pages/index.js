import RepoSearch from "features/repoSearch/RepoSearch";
import { useRouter } from "next/router";
import { createStore } from "store";
import { getReposAsync } from "features/repoSearch/repoSearchSlice";
import SideBar from "../src/components/Sidebar/index";
import DoughnutCart from "../src/components/DoughnutCart/index";
import Leads from "../src/components/Leads/index";
import Breadcrum from "../src/components/Breadcrum/index";
import Footer from "../src/components/Footer/index";
import Layout from "../src/components/Layout";

const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <Leads />
      <DoughnutCart />
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
