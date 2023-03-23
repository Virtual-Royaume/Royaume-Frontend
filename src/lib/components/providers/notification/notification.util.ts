import { get, writable } from "svelte/store";

export const notifications = writable<string[][]>([]);

export const pushNotification = (message: string, type: "success" | "error" | "info"): void => {
  notifications.set([...get(notifications), [type, message]]);

  setTimeout(() => notifications.set(get(notifications).slice(1)), 5000);
};