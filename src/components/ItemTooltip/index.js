import styles from "./styles.module.scss";

export default function ItemTooltip({ itemInfo, width = "400px" }) {
  return (
    <div className={styles.itemTooltip} style={{ width: width }}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.name}>{itemInfo.name}</div>
          <div className={styles.baseName}>{itemInfo.baseName}</div>
          {itemInfo.runes && (
            <div className={styles.runes}>{itemInfo.runes}</div>
          )}
        </div>
        <div className={styles.other}>{itemInfo.other}</div>

        <div className={styles.require}>
          {itemInfo.require.showLevel && (
            <div>需要等级: {itemInfo.require.level}</div>
          )}
        </div>
        <div className={styles.properties}>
          {itemInfo.properties.map((it) => (
            <div
              key={it.text}
              className={it.enchant ? styles.enchant : it.dc ? styles.dc : ""}
            >
              {it.text}{" "}
              {it.range && <span className={styles.range}>({it?.range})</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
