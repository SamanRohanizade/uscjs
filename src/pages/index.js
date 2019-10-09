import React from "react"
import {Link} from 'gatsby'
import Layout from "src/layouts/mainLayout"
// import Image from "../components/image"
import SEO from "src/components/seo"
import styles from "./index.module.scss"
import jsBagImage from 'src/images/js-bag.png'
import samanImage from 'src/images/saman.jpg'
import mammadImage from 'src/images/mammad.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="صفحه اصلی" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className={styles.main}>
      <h2 id="about" className="heading mx-auto">درباره این دوره</h2>
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 text-center">
          <img className="w-75" src={jsBagImage} alt="" draggable="false" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center mt-4 mt-md-0">
          <p className="text-muted">
          چند وقتی هست که به خاطر کامیونیتی فعال جاوااسکریپت، هر روز با تعداد زیادی ابزار جاوااسکریپتی مثل express, react, vue, webpack,  svelte, ... روبه‌رو می‌شیم. و حتما دوره‌های "پروژه محور" زیادی که برای این ابزارها وجود دارند رو دیدید.
          اما در این دوره برعکس خیلی از دوره‌های موجود، مکانیزم‌های خود جاوااسکریپت رو به صورت عمیق بررسی می‌کنیم.
          در انتهای این دوره فقط مهارت کار با یک ابزار را کسب نمی‌کنیم. بلکه دانش پایه‌ای عمیقی به دست میاریم که برای یادگیری راحت‌تر همه‌ی ابزارهای جاوااسکریپتی، مصاحبه‌های شغلی، نوشتن کد با کیفیت‌تر و ... به کارمون میاد.
          </p>
          <div className="text-left">
            <Link to="/topics" className="btn btn-primary btn-rounded">
              سرفصل‌های دوره
            </Link>
          </div>
        </div>
      </div>


      <h2 className="heading mx-auto mt-5">مدرسان دوره</h2>
      <div className="row mt-5 justify-content-center">
        <div className="col-7 col-sm-6 col-md-3 text-center mb-5">
          <a href="https://virgool.io/@saman.rohanizade" className="text-dark" target="_blank">
            <img className={styles.grayScale + " w-100 rounded-circle mb-3"} src={samanImage} alt="سامان روحانی‌زاده"/>
            سامان روحانی‌زاده
          </a>
          </div>
        <div className="col-7 col-sm-6 col-md-3 text-center mb-5">
          <img className="w-100 rounded-circle mb-3" src={mammadImage} alt="محمد محمودی"/>
          محمد محمودی
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
