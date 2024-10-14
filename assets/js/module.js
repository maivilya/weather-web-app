"use strict";

export const weekDayNames = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
];

export const monthNames = [
    "Янв",
    "Февр",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сент",
    "Октб",
    "Нояб",
    "Дек"
];

/**
 * @param {number} dateUnix  Unix date in seconds
 * @param {number} timezone  Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Суббота 12, Октб"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formate: "ЧАСЫ:МИНУТЫ"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours}:${minutes}`;
};

/**
 * @param {number} timeUnix Unix time in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formate: "ЧАСЫ:МИНУТЫ"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  return `${hours}`;
};

/**
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hour
 */
export const mps_to_kmh = (mps) => {
    return (mps * 3600) / 1000;
};

export const apiText = {
  1: {
    level: "Хорошо",
    message: "Качество воздуха удовлетворительное, а загрязнение воздуха представляет незначительный риск или отсутствует вообще"
  },
  2: {
    level: "Приемлемо",
    message: "Качество воздуха приемлемо, однако может существовать умеренная угроза здоровью необычайно чувствительных к загрязнению воздуха людей"
  },
  3: {
    level: "Умеренно",
    message: "редставители чувствительных групп могут испытать воздействие на здоровье. На широкую общественность воздействие маловероятно"
  },
  4: {
    level: "Плохо",
    message: "Каждый человек может столкнуться с последствиями для здоровья. Представители чувствительных групп могут столкнуться с более серьезными последствиями для здоровья"
  },
  5: {
    level: "Очень плохо",
    message: "Предупреждение о чрезвычайных ситуации. Угроза здоровья и жизни всего населения"
  }
};
