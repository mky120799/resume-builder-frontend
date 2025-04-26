import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteForeverRounded } from '@mui/icons-material'
import { Details } from '../../data/details.js' // data 
import { modifyProjects } from '../../redux/slices/projectsSlice.js' // redux 
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'
import Styles from '../../styles/input.module.css' // styles 
import { scrollToTop } from '../../utils/controls.js' // utils 

function Projects() {
  const dispatch = useDispatch();
  const projectsInitialState = useSelector(state => state.projects);

  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("storeProjects");
    return storedProjects ? JSON.parse(storedProjects) : projectsInitialState;
  });

  useEffect(() => {
    localStorage.setItem('storeProjects', JSON.stringify(projects));
  }, [projects]);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (projects.length < 4) {
      setProjects([...projects, {
        project_name: "",
        tech_stack: "",
        github_link: "",
        live_link: "",
        description: ""
      }])
    }
  }

  const handleRemoveButtonClick = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    scrollToTop();
  }

  const handleInputChange = (index, value, fieldType) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index] };
    switch (fieldType) {
      case "project_name": updatedProjects[index].project_name = value; break;
      case "tech_stack": updatedProjects[index].tech_stack = value; break;
      case "github_link": updatedProjects[index].github_link = value; break;
      case "live_link": updatedProjects[index].live_link = value; break;
      case "description": updatedProjects[index].description = value; break;
      default: break;
    }
    setProjects(updatedProjects)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyProjects(projects));
    dispatch(nextComponents(1));
    scrollToTop();
  }

  const goToPreviousComponents = (e) => {
    e.preventDefault()
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Projects  </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            {
              projects.map((item, index) => {
                return (
                  <div key={index}>
                    {/* project name input  */}
                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="project_name"
                        className={Styles.labelStyle}>
                        Project Name
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='project_name'
                        required
                        placeholder={Details.projects[0].project_name}
                        value={item.project_name}
                        onChange={(e) => handleInputChange(index, e.target.value, "project_name")}
                      />
                    </div>
                    {/* technologies used or tech stack input  */}
                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="tech_stack"
                        className={Styles.labelStyle}>
                        Tech Stack
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='tech_stack'
                        placeholder={Details.projects[0].tech_stack}
                        value={item.tech_stack}
                        onChange={(e) => handleInputChange(index, e.target.value, "tech_stack")}
                      />
                    </div>
                    {/* github link inputs  */}
                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="github_link"
                        className={Styles.labelStyle}>
                        Github Link
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='github_link'
                        placeholder={Details.projects[0].github_link}
                        value={item.github_link}
                        onChange={(e) => handleInputChange(index, e.target.value, "github_link")}
                      />
                    </div>
                    {/* deployed link or live link */}
                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="live_link"
                        className={Styles.labelStyle}>
                        Live Link
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='live_link'
                        placeholder={Details.projects[0].live_link}
                        value={item.live_link}
                        onChange={(e) => handleInputChange(index, e.target.value, "live_link")}
                      />
                    </div>
                    {/* project description  */}
                    <div className={Styles.labelInputWrapper}>
                      <label
                        htmlFor="description"
                        className={Styles.labelStyle}>
                        Description
                      </label>
                      <input
                        className={Styles.inputStyle}
                        type="text"
                        id='description'
                        placeholder={Details.projects[0].description}
                        value={item.description}
                        onChange={(e) => handleInputChange(index, e.target.value, "description")}
                      />
                    </div>
                    {/* deleting project from array */}
                    <div className={Styles.labelInputWrapper}>
                      <div
                        className={Styles.buttonRemove}
                        onClick={() => handleRemoveButtonClick(index)}>
                        <p>Remove  </p>
                        <DeleteForeverRounded />
                      </div>
                    </div>
                    < hr className={Styles.hrLine} />
                  </div>
                )
              })
            }
            {/* adding project to an array  */}
            <button
              type='text'
              className={Styles.buttonAdd}
              onClick={(e) => handleAddButtonClick(e)}
            >
              Add Project
            </button>
            {/* previous & next buttons  */}
            <div className={Styles.buttonWrapper}>
              <button
                type='text'
                className={Styles.button}
                onClick={(e) => goToPreviousComponents(e)}
              >
                Back
              </button>
              <button type='submit' className={Styles.button}>Next & Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Projects