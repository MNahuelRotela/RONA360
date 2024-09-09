export const slugify = (text: string): string => {
    return text
      .toString()
      .normalize("NFD") // Normaliza el texto a su forma descompuesta
      .replace(/[\u0300-\u036f]/g, "") // Elimina los caracteres diacríticos
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "") // Elimina caracteres no permitidos
      .replace(/\s+/g, "-") // Reemplaza los espacios con guiones
      .replace(/-+/g, "-"); // Reemplaza múltiples guiones con uno solo
  };