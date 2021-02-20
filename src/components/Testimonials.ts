import { createElement as h } from "react"

const Testimonials = () =>
  h(
    "section",
    {
      className: "testimonials",
    },
    h("h1", null, "Here's What Our Customers Are Saying"),
    h(
      "div",
      {
        className: "testimonial-group",
      },
      h(
        "div",
        {
          className: "testimonial-card-1",
        },
        h("div", {
          className: "testimonial-1-photo",
        }),
        h(
          "div",
          {
            className: "testimonial-1-message",
          },
          h(
            "h2",
            {
              className: "testimonial-1-name",
            },
            "Nate Harrison"
          ),
          h(
            "p",
            {
              className: "testimonial-1-title",
            },
            "Director, Data Science, FAANG"
          ),
          h(
            "blockquote",
            {
              className: "testimonial-1-content",
            },
            "We're Good! lets me do what I do best -- launch my startup using credit cards backed by BTC.",
          )
        )
      ),
      h(
        "div",
        {
          className: "testimonial-card-2",
        },
        h("div", {
          className: "testimonial-2-photo",
        }),
        h(
          "div",
          {
            className: "testimonial-2-message",
          },
          h(
            "h3",
            {
              className: "testimonial-2-name",
            },
            "Neela Totoro",
          ),
          h(
            "p",
            {
              className: "testimonial-2-title",
            },
            "VP, Product Engineering, Hot Big Startup"
          ),
          h(
            "blockquote",
            {
              className: "testimonial-2-content",
            },
            `So many "small" things have ruined crypto startups. Now I can stop worrying and start working!`,
          )
        )
      ),
      h(
        "div",
        {
          className: "testimonial-card-3",
        },
        h("div", {
          className: "testimonial-3-photo",
        }),
        h(
          "div",
          {
            className: "testimonial-3-message",
          },
          h(
            "h3",
            {
              className: "testimonial-3-name",
            },
            "Manfred Olivia",
          ),
          h(
            "p",
            {
              className: "testimonial-3-title",
            },
            "CTO, Cool Small Startup"
          ),
          h(
            "blockquote",
            {
              className: "testimonial-3-content",
            },
            "I love this tech. Serverless, GraphQL. Couldn't be simpler. Put it into my existing stack and watch it fly!"
          )
        )
      )
    )
  )

export default Testimonials
