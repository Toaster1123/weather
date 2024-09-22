import styles from "./Temperature.module.scss";
export function WeatherTemp({ size }) {
  console.log(size);
  return (
    <div className={styles.weatherTemperature}>
      <div className={`${styles.tempValue} ${size}`}>12</div>
      <div className={styles.tempCelsium}>o</div>
    </div>
  );
}
