// add helpper notification with vue3-notification and typescript
import { notify } from "@kyvg/vue3-notification";

export const showSuccessNotification = (title: string, text: string) => {
  notify({
    title,
    text,
    type: "success",
  });
}

export const showErrorNotification = (title: string, text: string) => {
  notify({
    title,
    text,
    type: "error",
  });
}