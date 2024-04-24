
import styles from "./style.js";
import {Navbar,Stats,
  Business,
  Billing ,
  Hero,
  CardDeal ,
  Testimonials ,
  Client ,
  CTA ,
  Footer} from "./components"
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* //Navbar Section  */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><Navbar/></div>
      </div>
      {/* Hero section  */}
      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}><Hero/></div>
      </div>
      <div className={`${styles.flexStart} bg-primary ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/> 
          <CardDeal/> 
          <Testimonials/> 
          <Client/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
