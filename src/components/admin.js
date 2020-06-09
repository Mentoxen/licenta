import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

const Admin = () => {
  const [tagName, setTagName] = useState({

  })

  const defaultTags = {tag: "tag", name: ""};
  const [tags, setTags] = useState([defaultTags]);

  const addTag = () => {
    setTags([...tags, {...defaultTags}]);
  }

  const handleTagChange = (e) => {
    const updatedTag = [...tags];
    updatedTag[e.target.className] = e.target.value;
    setTags(updatedTag)
    console.log(updatedTag)
  }

  return(
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col">
              {
                tags && tags.map((tag, index) => {
                  return <input className="name" name={`tag-${index}`} key={index} data-index={index} onChange={handleTagChange} />
                })
              }

              <button className="btn btn-small btn-secondary" onClick={() => addTag()}>Add tag</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Admin
