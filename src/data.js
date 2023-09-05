export const sortCountries = (countries, sortOrder) => {
  const sorted = [...countries].sort((a, b) => {
    const aValue = a.name.common || "";
    const bValue = b.name.common || "";
    return aValue.localeCompare(bValue);
  });

  if (sortOrder === "A-Z") {
    return sorted;
  }
  if (sortOrder === "Z-A") {
    return sorted.reverse();
  }
}

