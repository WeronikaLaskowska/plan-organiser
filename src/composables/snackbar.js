import EventBus, { ACTIONS } from '../EventBus/index';

export const showSnackbar = (message, type) => {
  EventBus.$emit(ACTIONS.SNACKBAR, message, type);
};