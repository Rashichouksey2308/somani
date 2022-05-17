import RepoSearch from "features/repoSearch/RepoSearch";
import { useRouter } from "next/router";
import { createStore } from "store";
import { getReposAsync } from "features/repoSearch/repoSearchSlice";
import DoughnutCart from "../src/components/DoughnutCart/index";
import Leads from "../src/components/Leads/index";
import styles from "./index.module.scss";
import Commodities from "../src/components/Commodities/index";
import Exposure from "../src/components/Exposure/index";
import Countries from "../src/components/Countries/index";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.root_Container}>
        <div className={styles.head_Container}>
          <Leads />
          <Leads />
        </div>
        <div className={styles.bottom_Container}>
          <div className={styles.left_Container}>
            <Commodities />
            <Exposure />
          </div>
          <div className={styles.right_Container}>
            <div className={styles.upper_Container}>
              <Countries />
              <DoughnutCart />
            </div>
            <div className={styles.bottom_Container}>
              <Card
                style={{ width: "1090px", height: "369px" }}
                className={styles.card}
              />
            </div>
          </div>
        </div>
      </div>
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
