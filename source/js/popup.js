const employersContainer = document.querySelector('.employers__list');
const employersAllItems = employersContainer.querySelectorAll(
  '.employers__item',
);
const employersAllItemsDescription = employersContainer.querySelectorAll(
  '.employers__full-description',
);

const employersItem = 'employers__item';
const activeItem = 'employers__item--active';
const descriptionItemClass = 'employers__item-description';
const visuallyHidden = 'visually-hidden';

const deleteActiveItem = () => {
  for (let elem of employersAllItems) {
    if (elem.classList.contains(activeItem)) {
      elem.classList.remove(activeItem);
    }
  }
};

const findDescriptionElement = id => {
  for (let elem of employersAllItemsDescription) {
    if (elem.id === id) {
      return elem;
    }
  }
};

const removeAllDescriptionElements = () => {
  for (let elem of employersAllItemsDescription) {
    if (elem.classList.contains(descriptionItemClass)) {
      elem.classList.remove(descriptionItemClass);
      elem.classList.add(visuallyHidden);
    }
  }
};

employersContainer.addEventListener('click', evt => {
  if (evt.target.closest('LI').classList.contains(employersItem)) {
    let employer = evt.target.closest('LI');
    if (employer.classList.contains(activeItem)) {
      employer.classList.remove(activeItem);

      let descriptionItem = findDescriptionElement(employer.id);
      descriptionItem.classList.add(visuallyHidden);
      descriptionItem.classList.remove(descriptionItemClass);
    } else {
      deleteActiveItem();
      removeAllDescriptionElements();
      employer.classList.add(activeItem);

      let descriptionItem = findDescriptionElement(employer.id);
      descriptionItem.classList.remove(visuallyHidden);
      descriptionItem.classList.add(descriptionItemClass);
    }
  }
});
