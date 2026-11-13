import { Fragment } from "react";
import { Outlet } from "react-router";
import Container from "../shared/components/layout/Container";
//import Sidebar from "../shared/components/layout/Sidebar";

export default function HomePage() {
  return (
    <Fragment>
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
}
