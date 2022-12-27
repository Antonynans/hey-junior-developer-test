const storedTitle = JSON.parse(localStorage.getItem("titleValue"));
const labelData =  JSON.parse(localStorage.getItem("loginLabels"));

export default function dashboardTitle(state = storedTitle, action) {
  switch (action.type) {
    case "DASHBOARD_TITLE":
      return action.payload;

    default:
      return state ? state : "Dashboard";
  }
}

export function loginTitle(state = labelData, action) {
  switch (action.type) {
    case "LABELS":
      return action.payload;

    default:
      return state;
  }
}
