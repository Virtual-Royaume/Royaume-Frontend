import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import locale from "dayjs/locale/fr";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(locale);

dayjs.tz.setDefault("Europe/Paris");

export const dayJS = dayjs;
export { Dayjs } from "dayjs";