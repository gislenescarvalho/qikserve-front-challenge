import React from "react";
import localeToCurrency from "../../utils/localeToCurrency";

interface Props {
  amount: number;
}

const CurrencyFormatter: React.FC<Props> = ({ amount }) => {
  // Detect browser language
  const userLanguage = navigator.language || "en-US"; // Default to 'en-US' if detection fails

  const currency = localeToCurrency[userLanguage] || "USD"; // Default to 'USD' if no mapping found

  // Format amount based on user language and detected currency
  const formattedAmount = new Intl.NumberFormat(userLanguage, {
    style: "currency",
    currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

export default CurrencyFormatter;
