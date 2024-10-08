import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

//Internal Import
import {
  Header,
  HeroSection,
  Footer,
  Pools,
  PoolsModel,
  WithdrawModal,
  Withdraw,
  Partners,
  Statistics,
  Token,
  Loader,
  Notification,
  ICOSale,
  Contact,
  Ask,
} from "../Components/index";

import {
  CONTRACT_DATA,
  deposit,
  withdraw,
  claimReward,
  addTokenMetamask,
} from "../Context/index";
const index = () => {
  return (
    <div>
      <Header /> <Footer />
    </div>
  );
};

export default index;
