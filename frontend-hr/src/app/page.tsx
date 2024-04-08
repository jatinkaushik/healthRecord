"use client"

import styles from "./page.module.css";
import { BankTwoTone } from "@ant-design/icons"
import { Typography } from 'antd';
const { Text } = Typography;


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <BankTwoTone twoToneColor="green" style={{ fontSize: '100px'}} /> <br/>
        <Text strong style={{fontSize:"25px", marginLeft:"-100px"}} type="danger">Welcome to HealthRecord</Text>
      </div>
    </main>
  );
}
