import { createElement as h } from "react"
import Button from "./Button"

const CallToAction = () =>
  h(
    "section",
    { className: "cta" },
    h("h1", null, "Try our awesome product."),
    h("p", null, "There's nothing to lose. 30 days free trial."),
    h(Button, { label: "Get Started" })
  )

export default CallToAction
