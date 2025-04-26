import { createSlice } from "@reduxjs/toolkit";
import { colors } from '../../utils/colors'

// dynamic color, 
// updating this slice for slected resumeTemplate 
// data folder - template.js 
// dispatching - from home.jsx 
const dynamicStyleInitialState = {
    backgroundColor: colors.gray200,
    color: colors.gray900,
    titleColor : colors.blue700,
    headingColor : colors.blue700,
    dividerColor : colors.blue700,
    subHeadingColor : colors.gray900,
}

const sliceDynamicStyle = createSlice({
    name: 'dynamicStyle',
    initialState: dynamicStyleInitialState,
    reducers: {
        modifyDynamicStyle: (state, action) => {
            return { ...state, ...action.payload }
        }
    }

})

export const { modifyDynamicStyle } = sliceDynamicStyle.actions
export default sliceDynamicStyle.reducer