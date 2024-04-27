"use client";
import React from "react";
import { Provider } from "react-redux";

import GetAllFood from "../GetAllFood/GetAllFood";
import store from "@/app/redux/store";

function Home(props: any) {
  return (
    <Provider store={store}>
      <div>
        <GetAllFood />
      </div>
    </Provider>
  );
}

export default Home;
