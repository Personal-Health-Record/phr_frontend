export const dateText = (date: string) => {
  return (
    <p
      style={{
        color: "#9A9A9A",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
      }}
    >
      {date}
    </p>
  );
};

export const titleText = (title: string) => {
  return (
    <h1
      style={{
        color: "#5F5F5F",
        fontSize: 17,
        fontWeight: 700,
      }}
    >
      {title}
    </h1>
  );
};

export const referenceText = (reference: string) => {
  return (
    <h2
      style={{
        color: "rgba(0, 0, 0, 0.50)",
        fontSize: 13,
        fontWeight: 400,
      }}
    >
      {reference}
    </h2>
  );
};

export const renderDescriptionText = (description: string) => {
  return (
    <div className="mt-2">
      <p
        style={{
          color: "#5F5F5F",
          fontSize: 13,
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const subTitleText = (title: string) => {
  return (
    <h1
      style={{
        color: "#5F5F5F",
        fontSize: 15,
        fontWeight: 700,
        marginTop: 10,
      }}
    >
      {title}
    </h1>
  );
};

export function getDaysOfWeekInRange(startDate: Date, endDate: Date): string[] {
  const daysArray: string[] = [];
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

  // Ensure the date range is within one week
  const maxRange = 7;
  const rangeInDays = Math.round(
    (endDate.getTime() - startDate.getTime()) / oneDay
  );

  if (rangeInDays > maxRange) {
    console.error("Date range exceeds one week.");
    return [];
  }

  // Populate the array with day names
  for (let i = 0; i <= rangeInDays; i++) {
    const currentDate = new Date(startDate.getTime() + i * oneDay);
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(currentDate);
    daysArray.push(dayName);
  }

  return daysArray;
}

export function getDayOfWeekFromTimestamp(timestamp: string): string {
  const date = new Date(parseInt(timestamp));
  const dayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
  return dayName;
}
