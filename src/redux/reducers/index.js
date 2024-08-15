// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
// import homeReducer from "./homeReducer";
// import unifiedInboxReducer from "./unifiedInboxReducer";
// import userReducer from "./userReducer";
// import appReducer from "./appReducer";
// import createTaskReducer from "./createTaskReducer";
// eslint-disable-next-line import/no-named-as-default
import systemConfigReducer from './systemConfigReducer';
// import dashboardReducer from "./dashboardReducer";
// import managedAppReducer from "./managedAppReducer";
// import taskDetailReducer from "./taskDetailReducer";
// import workflowReducer from "./workflowReducer";
// import attachmentReducer from "./attachmentReducer"

const reducers = combineReducers({
//   unifiedInboxReducer: unifiedInboxReducer,
//   appReducer: appReducer,
//   userReducer: userReducer,
  systemConfigReducer,
});

export default reducers;
