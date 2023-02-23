import { legacy_createStore as createStore } from "redux";
import weatherData from "../../Data/Country";

const counterReducer = () => ({ weatherData });

const store = createStore(counterReducer);

export default store;
