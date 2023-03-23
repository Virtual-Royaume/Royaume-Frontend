import { get, writable } from "svelte/store";

export type NotificationType = "success" | "error" | "info";

export interface Notification {
  message: string;
  type: NotificationType;
  id: number;
}

export const notifications = writable<Notification[]>([]);

export const pushNotification = (message: string, type: NotificationType): void => {
  const currentNotifications = get(notifications);

  const newNotification: Notification = { message, type, id: currentNotifications.length };

  notifications.set([newNotification, ...currentNotifications.slice(0, 5)]);

  setTimeout(() => {
    notifications.set(get(notifications).filter((notification) => notification.id !== newNotification.id));
  }, 5000);
};

export const success = (message: string): void => {
  pushNotification(message, "success");
};

export const error = (message: string): void => {
  pushNotification(message, "error");
};

export const info = (message: string): void => {
  pushNotification(message, "info");
};