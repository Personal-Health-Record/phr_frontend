export const formatDate = (inputDate: string): string => {
  const dateParts = inputDate.split('-');
  if (dateParts.length === 3) {
    const year = parseInt(dateParts[0], 10);
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);

    if (!isNaN(day) && !isNaN(monthIndex) && !isNaN(year)) {
      const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ];

      const monthName = months[monthIndex];

      return `${day} ${monthName} ${year}`;
    }
  }

  // If the input date is not in the correct format, return an error message or the original input.
  return 'Invalid Date';
};

export const getDiffDate = (dateBefore: Date, dateAfter: Date): number => {
  const diffTime = Math.abs(dateAfter.getTime() - dateBefore.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const formatDateToDay = (inputDate: Date): string => {
  const date = new Date(inputDate);
  const day = date.toLocaleDateString('id-ID', { weekday: 'long' });
  const month = date.toLocaleDateString('id-ID', { month: 'long' });
  const year = date.getFullYear();
  const dateNumber = date.getDate();

  return `${day}, ${dateNumber} ${month} ${year}`;
};

export const getTodayFormatted = (): string => {
  const today = new Date();

  return formatDateToDay(today);
};

export const getCurrentYearMonthDate = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it's zero-based
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const getDateTrackerKesehatan = (val: string) => {
  const parsedDate = new Date(val);

  // Create an array of Indonesian day and month names.
  const daysInIndonesian = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  const monthsInIndonesian = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  // Extract day, month, and year from the parsed date.
  const dayInIndonesian = daysInIndonesian[parsedDate.getUTCDay()];
  const day = parsedDate.getUTCDate();
  const monthInIndonesian = monthsInIndonesian[parsedDate.getUTCMonth()];
  const year = parsedDate.getUTCFullYear();

  const formattedDate = `${dayInIndonesian}, ${day} ${monthInIndonesian} ${year}`;

  return formattedDate;
};
