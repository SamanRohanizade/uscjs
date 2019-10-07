import React from "react"
import Layout from "src/components/layout"
// import Image from "../components/image"
import SEO from "src/components/seo"
import styles from "./index.module.scss"
import jsBagImage from 'src/images/js-bag.png'
import samanImage from 'src/images/saman.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className={styles.main}>
      <h2 className="heading mx-auto">درباره این دوره</h2>
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 text-center">
          <img src={jsBagImage} alt="" draggable="false" style={{ width: '75%' }}/>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p className="text-muted">
          چند وقتی هست که به خاطر کامیونیتی فعال جاوااسکریپت، هر روز با تعداد زیادی ابزار جاوااسکریپتی مثل... روبه‌رو می‌شیم. و حتما دوره‌های "پروژه محور" زیادی که برای این ابزارها وجود دارند رو دیدید.

اما در این دوره برعکس خیلی از دوره‌های موجود، مکانیزم‌های خود جاوااسکریپت مثل و ... رو به صورت عمیق بررسی می‌کنیم.

در انتهای این دوره فقط مهارت کار با یک ابزار را کسب نمی‌کنیم. بلکه دانش پایه‌ای عمیقی به دست میاریم که برای یادگیری راحت‌تر همه‌ی ابزارهای جاوااسکریپتی، مصاحبه‌های شغلی، نوشتن کد با کیفیت‌تر و ... به کارمون میاد
          </p>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
