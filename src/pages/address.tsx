import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import Content from "../components/Content";
import { IAddress } from "../interfaces/interface";
import styles from "../styles/Content.module.scss";

const API_URL =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "6ef3e24d315895a70931cb90361d8ed08e03b454";
axios.defaults.headers.common["Authorization"] = "Token " + TOKEN;

const Address = () => {
  const [addressInputValue, setAddressInputValue] = useState<string>("");
  const [addressList, setAddressList] = useState<IAddress[]>([]);
  const [isBadRequest, setIsBadRequest] = useState<boolean>(false);

  const handleOnChangeAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAddressInputValue(e.target.value);
  };

  const handleSearch = (): void => {
    console.log("SENT");

    addressInputValue.length > 2 &&
      axios({
        method: "post",
        url: API_URL,
        data: {
          query: addressInputValue,
          count: 20,
        },
      })
        .then((res) => {
          setIsBadRequest(false);
          setAddressList(res.data.suggestions);
          console.log(res);
        })
        .catch((error) => {
          setIsBadRequest(true);
          console.log("error", error);
        });
  };

  return (
    <Content>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>Поиск адресов</h1>
        <p className={styles.sub_title}> Введите интересующий вас адрес</p>
      </div>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          onChange={(e) => handleOnChangeAddress(e)}
          className={styles.serch_input}
          min={3}
          placeholder="Введите интересующий вас адрес"
        ></input>
        <button className={styles.search_btn} onClick={handleSearch}>
          <Image
            src={"/assets/search.svg"}
            layout="fixed"
            width={32}
            height={32}
          ></Image>
          <h1 className={styles.title}>Поиск</h1>
        </button>
      </div>

      <div className={styles.adress_list_wrapper}>
        <h1 className={styles.title}>Адреса</h1>
        <div className={styles.adress_list}>
          {addressList.length === 0 ? (
            <h1 className={styles.title_error}>Нет данных по такому запросу</h1>
          ) : (
            addressList.map((row: IAddress, idx: number) => {
              return (
                <div key={idx} className={styles.adress_list_item}>
                  {row.value}
                </div>
              );
            })
          )}
          {isBadRequest && (
            <h1 className={styles.title_error}>Ошибка запроса</h1>
          )}
        </div>
      </div>
    </Content>
  );
};

export default Address;
