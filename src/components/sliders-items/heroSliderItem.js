import React from "react"

const HeroSliderItem = ({title, subtitle, content}) => {

  return (
    <div className="pb-5 pl-5">
      <h2 className="titles-base subtitle-hero">{subtitle}</h2>
      <h2 className="titles-base title-hero">{title}</h2>
      <div className="content">
        {content}
      </div>
      <a href="#" className="btn btn-small btn-primary">vezi mai multe</a>
    </div>
  )
}

export default HeroSliderItem
