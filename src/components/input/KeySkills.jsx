import React, { useEffect, useState } from 'react' // from installed dependencies 
import { useDispatch, useSelector } from 'react-redux'
import { DeleteForeverRounded } from '@mui/icons-material'
import { keySkillsReducer } from '../../redux/slices/keySkillsSlice.js' // redux 
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'
import Styles from '../../styles/input.module.css'
import { scrollToTop } from '../../utils/controls.js'

function KeySkills() {
  const dispatch = useDispatch();
  const keySkillsInitialState = useSelector((state) => state.keySkills);

  const [keySkills, setKeySkillsList] = useState(() => {
    const storedKeySkills = localStorage.getItem("storeKeySkills");
    return storedKeySkills ? JSON.parse(storedKeySkills) : keySkillsInitialState;
  });

  useEffect(() => {
    localStorage.setItem("storeKeySkills", JSON.stringify(keySkills));
  }, [keySkills])

  const handleAddButtonClick = () => {
    setKeySkillsList([...keySkills, '']);
  };

  const handleRemoveButtonClick = (index) => {
    const updatedKeySkills = [...keySkills];
    updatedKeySkills.splice(index, 1);
    setKeySkillsList(updatedKeySkills);
  };

  const handleInputChange = (index, value) => {
    const updatedKeySkills = [...keySkills];
    updatedKeySkills[index] = value;
    setKeySkillsList(updatedKeySkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(keySkillsReducer(keySkills))
    dispatch(nextComponents(1));
    scrollToTop();
  }

  const goToPreviousComponents = (event) => {
    event.preventDefault();
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Key Skills  </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            {
              keySkills.map((value, index) => (
                <div
                  key={index}
                  className={Styles.skillWrapper}
                >
                  <input
                    className={Styles.inputStyleSkill}
                    type="text"
                    required
                    placeholder={`Skills ${index + 1}`}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <div
                    className={Styles.buttonRemove}
                    onClick={() => handleRemoveButtonClick(index)}>
                    <p>Remove  </p>
                    <DeleteForeverRounded />
                  </div>
                </div>
              ))
            }
            <button
              className={Styles.buttonAdd}
              onClick={handleAddButtonClick}>
              Add Skills
            </button>
            <div className={Styles.buttonWrapper}>
              <button
                type='text'
                className={Styles.button}
                onClick={(event) => goToPreviousComponents(event)}>
                Back
              </button>
              <button type='submit' className={Styles.button}>Next & Submit </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default KeySkills