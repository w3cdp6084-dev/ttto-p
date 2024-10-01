import React from 'react';
import styles from '../MenuComponent.module.css';

const MenuComponent: React.FC = () => {
  return (
    <div id="menu" className={styles.c1uexyos} data-is-opened="true">
      <div className={styles.i9ksbu7} tabIndex={-1}>
        <div className={styles.svyhwu} data-center-mode="true">
          <div className={styles.sni25jc} style={{ transform: 'translateY(0)' }}>
            <nav className={styles.n1ezpvw8}>
              <div className={styles.mklw56m}>
                <div className={`${styles.c4szrlw} ${styles.mzur7s3}`}>
                  <a className={styles.i6du1oa} aria-current="page" href="/products/special/hocho/yasashii/">
                    <span className={`${styles.bcghuvy} ${styles.l14bodjf}`}>Home</span>
                    <span className={styles.a1f8yy5c} aria-hidden="true">
                      <svg>
                        <use xlinkHref="#arrow"></use>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className={`${styles.c4szrlw} ${styles.mzur7s3}`}>
                  <a className={styles.i6du1oa} aria-current="false" href="/products/special/hocho/yasashii/about/">
                    <span className={`${styles.bcghuvy} ${styles.l14bodjf}`}>About</span>
                    <span className={styles.a1f8yy5c} aria-hidden="true">
                      <svg>
                        <use xlinkHref="#arrow"></use>
                      </svg>
                    </span>
                  </a>
                </div>
                {/* 他のリンク項目も同様にここに追加 */}
              </div>
              <div className={styles.vn8tua5}>
                <div className={`${styles.chpjtgt} ${styles.v77lzso}`}>
                  <a className={styles.i1cw260o} aria-current="false" href="/products/special/hocho/yasashii/kirikata/eggplant/">
                    <span className={`${styles.bcghuvy} ${styles.nfttxg7}`} aria-label="No.01">
                      <span>#</span>01
                    </span>
                    <span className={`${styles.z1ki4wef} ${styles.lmrqidd}`}>なす</span>
                    <svg className={styles.aekumnw} aria-hidden="true">
                      <use xlinkHref="#arrow"></use>
                    </svg>
                  </a>
                </div>
                {/* 他の野菜リンクも同様にここに追加 */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;