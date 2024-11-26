import React, { useState } from "react";
import { FaRegCopy, FaEdit } from "../ReactICON";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";
import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";
import { sortedIndex } from "lodash";

const Pool = ({ poolDetails, createPool, setLoader, setModifyPoolID }) => {
  const [pool, setPool] = useState({
    _depositToken: "",
    _rewardToken: "",
    _apy: "",
    _lockDays: "",
  });

  const poolArray = poolDetails?.poolInfoArray ?? [];

  const CALLING_FUNCTION = async (pool) => {
    setLoader(true);

    console.log(pool);
    const receipt = await createPool(pool);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  return (
    <div className="tab-pane fade" id="tab-5" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="profile">
            <ul
              className="nav nav-tabs section__tabs section__tabs--left"
              id="section__profile-tabs3"
              role="tablist"
            >
              <ButtonCmp name={"Add Pool"} tab={"f6"} styleClass="active" />
              <ButtonCmp name={"Pool List"} tab={"f7"} />
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-f6"
                role="tabpanel"
              >
                <div className="row">
                  <Title title={"Provide pool details to create new pool"} />
                  <InputField
                    size={"12"}
                    type={"text"}
                    title={"Stake Token Address"}
                    name={"depositToken1"}
                    placeholder={"address"}
                    handlechange={(e) =>
                      setPool({ ...pool, _depositToken: e.target.value })
                    }
                  />

                  <InputField
                    size={"12"}
                    type={"text"}
                    title={"Reward Token Address"}
                    name={"rewardToken1"}
                    placeholder={"address"}
                    handlechange={(e) =>
                      setPool({ ...pool, _rewardToken: e.target.value })
                    }
                  />

                  <InputField
                    size={"6"}
                    type={"text"}
                    title={"APY %"}
                    name={"APY1"}
                    placeholder={"APY"}
                    handlechange={(e) =>
                      setPool({ ...pool, _apy: e.target.value })
                    }
                  />

                  <InputField
                    size={"6"}
                    type={"text"}
                    title={"Lock days"}
                    name={"days1"}
                    placeholder={"days"}
                    handlechange={(e) =>
                      setPool({ ...pool, _lockDays: e.target.value })
                    }
                  />

                  <ClickButton name={"Create Pool"} />
                </div>
              </div>

              <div className="tab-pane fade" id="tab-f7" role="tabpanel">
                <div className="row">
                  <Title title={"All Pool"} />
                  <div className="col-12">
                    <div
                      className="scrollable-div"
                      style={{
                        overflowX: "scroll",
                      }}
                    >
                      <table className="deals__table">
                        <thead>
                          <tr>
                            <th>Stake Token</th>
                            <th>Reward Token</th>
                            <th>Deposit</th>
                            <th>Pool ID</th>
                            <th>APY</th>
                            <th>Lock Days</th>
                          </tr>
                        </thead>

                        <tbody>
                          {poolArray.map((pool, index) => (
                            <tr key={index}>
                              <td>
                                <div className="deals__exchange">
                                  <span className="red">
                                    {SHORTEN_ADDRESS(pool.depositTokenAddress)}
                                    &nbsp;&nbsp;{pool.depositToken.symbol}
                                    &nbsp;&nbsp;
                                    <FaRegCopy
                                      onClick={() =>
                                        copyAddress(pool.depositTokenAddress)
                                      }
                                    />
                                  </span>
                                </div>
                              </td>

                              <td>
                                <div className="deals__exchange">
                                  <span className="green">
                                    {SHORTEN_ADDRESS(pool.rewardTokenAddress)}
                                    &nbsp;&nbsp;{pool.rewardToken.symbol}
                                    &nbsp;&nbsp;
                                    <FaRegCopy
                                      onClick={() =>
                                        copyAddress(pool.rewardTokenAddress)
                                      }
                                    />
                                  </span>
                                </div>
                              </td>

                              <td>
                                <div className="deals__text deals__text--green">
                                  {pool.depositedAmount}&nbsp;&nbsp;
                                  <span className="red">
                                    {pool.depositToken.symbol}
                                  </span>
                                </div>
                              </td>

                              <td>
                                <div className="deals__text">#P00-{index}</div>
                              </td>
                              <td>
                                <div className="deals__text deals__text--green">
                                  {pool.apy} %
                                </div>
                              </td>
                              <td>
                                <div className="deals__text deals__text--sell">
                                  {pool.lockDays} days
                                </div>
                              </td>
                              <td>
                                <div className="deals__text deals__text--sell">
                                  <a
                                    className="header__profile"
                                    data-bs-target="modal-apool"
                                    type="button"
                                    data-bs-toggle="modal"
                                    onClick={() => setModifyPoolID(index)}
                                  >
                                    <i className="ti">
                                      <FaEdit />
                                    </i>
                                    <span>Update APY</span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
