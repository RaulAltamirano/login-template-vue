export const useOptionCard = (values: { startYear: number, endYear: number }) => {
  const generateMonthsAndYears = () => {
    const { startYear, endYear } = values
    const months = Array.from({ length: 12 }, (_, index) => {
      const monthNumber = (index + 1).toString().padStart(2, '0');
      return `${monthNumber} - ${new Date(0, index).toLocaleString('default', { month: 'long' })}`;
    });

    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => (startYear + index).toString());

    return { months, years };
  }
  return {
    generateMonthsAndYears
  };
}