export default function dashboardTitle(title) {
  localStorage.setItem("titleValue", JSON.stringify(title));

  return { type: "DASHBOARD_TITLE", payload: title };
}

export function loginTitle(title) {
  localStorage.setItem("loginLabels", JSON.stringify(title));

  return { type: 'LABELS', payload: title };
}