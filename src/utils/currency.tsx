export const convertNumberIntoCurrency = (value: number) => {
  const converter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return converter.format(value);
};
