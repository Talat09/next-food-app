// app/redux/reducers.ts
import { combineReducers } from "redux";

const initialFoodState = {
  foods: [],
};

const foodReducer = (state = initialFoodState, action: any) => {
  switch (action.type) {
    case "SET_FOODS":
      return {
        ...state,
        foods: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  food: foodReducer,
});

export default rootReducer;
