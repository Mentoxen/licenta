import React from "react"

const TestimonialsSliderItem = ({ocupation, name, content, image}) => {

  return (
    <div className="pb-5">
      <div className="content mb-5">
        {content}
      </div>
      <div className="d-flex flex-center-vertical">
        <img src={image} alt="" />
        <h3 className="titles-base pl-3 withContentColor text-md">
          {name}
          <span className="ocupation withSecondaryColor text-base d-block"> {ocupation} </span>
        </h3>
      </div>
    </div>
  )
}

export default TestimonialsSliderItem
