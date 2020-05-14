import WithRoot from './Modules/WithRoot'
// --- Post bootstrap -----
import React from 'react'
import ProductCategories from './Modules/Views/ProductCategories'
import ProductSmokingHero from './Modules/Views/ProductSmokingHero'
import AppFooter from './Modules/Views/AppFooter'
import ProductHero from './Modules/Views/ProductHero'
import ProductValues from './Modules/Views/ProductValues'
import ProductHowItWorks from './Modules/Views/ProductHowItWorks'
//import ProductCTA from './Modules/Views/ProductCTA'
import AppAppBar from './Modules/Views/AppAppBar'

function Index() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  )
}

export default WithRoot(Index)
