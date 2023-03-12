import { get, writable } from "svelte/store";

export const notifications = writable<string[]>([]);

export function pushNotification(message: string) : void {
  notifications.set([...get(notifications), message]);

  setTimeout(() => notifications.set(get(notifications).slice(1)), 5000);
}