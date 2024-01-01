export const useOptions = () => {
  const monthsOptions = ref([
    { text: 'Janeiro', value: 1 },
    { text: 'Fevereiro', value: 2 },
    { text: 'Março', value: 3 },
    { text: 'Abril', value: 4 },
    { text: 'Maio', value: 5 },
    { text: 'Junho', value: 6 },
    { text: 'Julho', value: 7 },
    { text: 'Agosto', value: 8 },
    { text: 'Setembro', value: 9 },
    { text: 'Outubro', value: 10 },
    { text: 'Novembro', value: 11 },
    { text: 'Dezembro', value: 12 },
  ]);

  const computedDayOptions = computed(() => {
    const daysObjs = Array.from(
      { length: 31},
      (_, i) => i + 1
    ).map((day) => {
      const text =  day < 10 ? '0' + day : day;
      return { text, value: day };
    });
    return daysObjs;
  });

  const computedYears = computed(() => {
    const currentYear = new Date().getFullYear();
    const daysObjs = Array.from(
      { length: 125},
      (_, i) => currentYear - i
    ).map((year) => {
      return { text: String(year), value: year };
    });
    return daysObjs;
  });

  return { monthsOptions, computedDayOptions, computedYears };
};
