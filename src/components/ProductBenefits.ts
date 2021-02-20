import { createElement as h } from "react"

const ProductBenefits = () =>
  h(
    "section",
    {
      className: "product-benefits",
    },
    h(
      "div",
      {
        className: "product-benefits-group",
      },
      h(
        "div",
        {
          className: "product-benefit-1-tagline",
        },
        "Crypto moves fast. Your reporting needs to keep up.",
      ),
      h("div", {
        className: "product-benefit-1-image",
      }),
      h(
        "div",
        {
          className: "product-benefit-2-tagline",
        },
        "Bitcoin, Ethereum, Litecoin, even Doge. They're all decentralized, but your business isn't.",
      ),
      h("div", {
        className: "product-benefit-2-image",
      }),
      h(
        "div",
        {
          className: "product-benefit-3-tagline",
        },
        "From the shareholders, to regulators, to employees, to your grandparents. Everyone wants to know your business is ready. Let us help!",
      ),
      h("div", {
        className: "product-benefit-3-image",
      })
    )
  )

export default ProductBenefits
