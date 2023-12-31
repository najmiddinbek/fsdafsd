import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Ajoyib dizaynga ega  <br className="sm:block hidden" /> kredit kartasini
        skaner qilish oson
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mobil ilovaga kirib kredit kartangizni skaner qilsangiz hammasi tayyor!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
