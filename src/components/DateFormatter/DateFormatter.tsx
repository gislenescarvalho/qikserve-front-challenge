import React from "react";

interface Props {
  date: Date;
}

const DateFormatter: React.FC<Props> = ({ date }) => {
  // Detect browser language
  const userLanguage = navigator.language || "en-US"; // Default to 'en-US' if detection fails

  // Format date based on user language
  const formattedDate = new Intl.DateTimeFormat(userLanguage, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return <span>{formattedDate}</span>;
};

export default DateFormatter;
