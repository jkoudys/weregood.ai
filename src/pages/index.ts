import { createElement as h } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ValueProp from "../components/ValueProp"
import SocialProof from "../components/SocialProof"
import ProductBenefits from "../components/ProductBenefits"
import ProductFeatures from "../components/ProductFeatures"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"

const IndexPage = () =>
  h(
    Layout,
    null,
    h(SEO, { title: "Home" }),
    h(ValueProp),
    h(SocialProof),
    h(ProductBenefits),
    h(ProductFeatures),
    h(Testimonials),
    h(CallToAction)
  )

export default IndexPage
