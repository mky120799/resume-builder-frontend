import React, { useState } from 'react' // fron installed dependencies 
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Details } from '../../data/details' // from data folder 
import { modifyAddress } from '../../redux/slices/addressSlice.js' // from redux 
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'
import Styles from '../../styles/input.module.css' // from styles folder 
import { scrollToTop } from '../../utils/controls.js' // from utils folder 

// we are taking all inputs related to address 
function Address() {
  const dispatch = useDispatch();
  const addressInitialState = useSelector(state => state.address);
  const { register, handleSubmit } = useForm();

  const [address, setAddress] = useState(() => {
    // getItem from local storage 
    const storedAddress = localStorage.getItem("storeAddress");
    return storedAddress ? JSON.parse(storedAddress) : addressInitialState;
  });

  const handleNext = (data) => {
    // updating address,
    // modifying address, going to next components, (redux)
    // scrolling, setItem in local storage 
    setAddress((prevAddress) => ({
      ...prevAddress,
      ...data,
    }));
    dispatch(modifyAddress({ ...address, ...data }));
    dispatch(nextComponents(1));
    scrollToTop()
    localStorage.setItem("storeAddress", JSON.stringify({ ...address, ...data }));
    // Note -
    // data is coming out of box from handleSubmit, due to use of react-hook-form
    // event.preventDefault(),  already stricted in react-hook-form 
  }

  const handlePrevious = (event) => {
    event.preventDefault();
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}>Address </div>
          <form
            className={Styles.inputForm}
            onSubmit={handleSubmit(handleNext)}
          >
            {/* postal code input */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="postalCode"
                className={Styles.labelStyle}>
                Postal Code
              </label>
              <input
                className={Styles.inputStyle}
                type="number"
                id='postalCode'
                placeholder={Details.address.postal_code}
                defaultValue={address.postal_code}
                {...register("postal_code", { required: true, maxLength: 8 })}
              />
            </div>
            {/* city input */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="city"
                className={Styles.labelStyle}>
                City
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='city'
                required
                placeholder={Details.address.city}
                defaultValue={address.city}
                {...register("city", { required: true, maxLength: 20 })}
              />
            </div>
            {/* state input */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="state"
                className={Styles.labelStyle}>
                State
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='state'
                required
                placeholder={Details.address.state}
                defaultValue={address.state}
                {...register("state", { required: true, maxLength: 20 })}
              />
            </div>
            {/* country input  */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="country"
                className={Styles.labelStyle}>
                Country
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='country'
                required
                placeholder={Details.address.country}
                defaultValue={address.country}
                {...register("country", { required: true, maxLength: 20 })}
              />
            </div>
            {/* phone input */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="phone"
                className={Styles.labelStyle}>
                Phone
              </label>
              <input
                className={Styles.inputStyle}
                type='tel'
                id='phone'
                placeholder={Details.address.phone}
                defaultValue={address.phone}
                {...register("phone", { required: true, maxLength: 13 })}
              />
            </div>
            {/* email input */}
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="email"
                className={Styles.labelStyle}>
                Email
              </label>
              <input
                className={Styles.inputStyle}
                type="email"
                required
                placeholder={Details.address.email}
                defaultValue={address.email}
                {...register("email", { required: true, maxLength: 50 })}
              />
            </div>
            {/* buttons  */}
            <div className={Styles.buttonWrapper}>
              <button
                type="text"
                className={Styles.button}
                onClick={(event) => handlePrevious(event)} >
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

export default Address


// Note -
// register() method coming from react-hook-form
// it store input data in json format 