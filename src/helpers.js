export const reviewBudget = (budget, remaining) => {
  let classNameValue;

  if ((budget / 4) > remaining) {
    classNameValue = 'alert alert-danger';
  } else if ((budget / 2) > remaining) {
    classNameValue = 'alert alert-warning';
  } else {
    classNameValue = 'alert alert-success';
  }

  return classNameValue;
}
