import React from "react";
import { MdAdminPanelSettings } from "../../Components/ReactICON/index";

const ADDRESS_EXPLORER = process.env.NEXT_PUBLIC_ADDRESS_EXPLORER;
const STAKING_DAPP = process.env.NEXT_PUBLIC_STAKING_DAPP;
const TOKEN_EXPLORER = process.env.NEXT_PUBLIC_TOKEN_EXPLORER;
const TOKEN = process.env.NEXT_PUBLIC_DEPOSIT_TOKEN;

const Token = ({ token }) => {
  return (
    <div className="col-12">
      <div className="invest invest--big">
        <h2 className="invest__title">Block Explorer</h2>
        <div className="invest__group">
          <input
            type="text"
            id="partnerlink"
            name="partnerlink"
            className="form__input"
            defaultValue={`${ADDRESS_EXPLORER} ${STAKING_DAPP}`}
          />
          <p className="invest__text">
            Stake Token stats Crypto King Best return on your investment
          </p>
          <table className="invest__table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Name</td>
                <td>{token?.name}</td>
              </tr>
              <tr>
                <td>Symbol</td>
                <td>{token?.symbol}</td>
              </tr>
              <tr>
                <td>Total Supply</td>
                <td>
                  {token?.totalSupply} {token?.symbol}
                </td>
              </tr>
              <tr>
                <td>Total Stake</td>
                <td>
                  {token?.contractTokenbalance || "0"} {token?.symbol}
                </td>
              </tr>
              <tr>
                <td className="yellow">Explorer Token</td>
                <td>
                  <a
                    href={`${TOKEN_EXPLORER} ${TOKEN}`}
                    style={{ marginLeft: "10px" }}
                    target="_blank"
                    className="header__profile"
                  >
                    <i className="ti">
                      <MdAdminPanelSettings />
                    </i>
                    <span>
                      {token?.name} {token?.symbol}
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Token;
