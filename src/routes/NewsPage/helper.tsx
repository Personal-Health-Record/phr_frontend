export const dateText = (date: string) => {
  return (
    <p
      style={{
        color: '#9A9A9A',
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'uppercase',
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
        color: '#5F5F5F',
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
        color: 'rgba(0, 0, 0, 0.50)',
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
          color: '#5F5F5F',
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
        color: '#5F5F5F',
        fontSize: 15,
        fontWeight: 700,
        marginTop: 10,
      }}
    >
      {title}
    </h1>
  );
};
