import React from 'react'
import ViewPreview from '../components/preview/ViewPreview.jsx'
import Styles from '../styles/home.module.css'

// Resume page to show the created resume 
function MyResume() {
  return (
    <div className={Styles.container}>
      <div className={Styles.headingWrapper}>
        <div className={Styles.heading}> My Resume </div>
        <div> Edit or Export Your Resume as PDF </div>
      </div>
      <div><ViewPreview /></div>
    </div>
  )
}

export default MyResume