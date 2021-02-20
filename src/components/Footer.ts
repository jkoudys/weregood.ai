import { createElement as h } from "react"

const Footer = ({ siteTitle }) => h(
    "footer",
    {
      className: "footer",
    },
    h(
      "div",
      {
        className: "footer-belt",
      },
      h(
        "div",
        {
          className: "company-sign",
        },
        `© ${(new Date()).getFullYear()} ${siteTitle}`,
      ),
      h(
        "div",
        {
          className: "social-media",
        },
        h(
          "a",
          {
            href: "https://www.facebook.com",
          },
          h(
            "div",
            {
              className: "social-facebook",
            },
            "Facebook"
          )
        ),
        h(
          "a",
          {
            href: "https://www.twitter.com",
          },
          h(
            "div",
            {
              className: "social-twitter",
            },
            "Twitter"
          )
        ),
        h(
          "a",
          {
            href: "https://www.instagram.com",
          },
          h(
            "div",
            {
              className: "social-instagram",
            },
            "Instagram"
          )
        )
      )
    )
  );

export default Footer
