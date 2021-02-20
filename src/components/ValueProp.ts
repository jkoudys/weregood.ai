import { createElement as h } from "react"
import Button from "./Button"

const ValueProp = () =>
  h(
    "section",
    {
      className: "value-prop",
    },
    h(
      "div",
      {
        className: "value-prop-content",
      },
      h(
        "div",
        {
          className: "main-message",
        },
        h("h1", null, "Is your business ready to enter the crypto market?"),
        h(
          "p",
          {
            className: "main-subtitle",
          },
          "Yep. We're Good!",
        ),
        h(Button, {
          label: "Get Started",
        })
      ),
      h("div", {
        className: "main-photo",
      })
    )
  )

export default ValueProp
