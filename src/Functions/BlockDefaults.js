// Blocking the default functionality of the browser
export const BlockDefault = (e) => {
  e.preventDefault();
  e.stopPropagation();
}