interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className }: Props) => {
  return (
    <h1
      className={
        "2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold " + className
      }
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className }: Props) => {
  return (
    <h2
      className={
        "2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-medium mt-2 " + className
      }
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: Props) => {
  return (
    <p
      className={
        "2xl:text-2xl xl:text-xl lg:text-lg text-base font-normal mt-2 text-stone-500 " +
        className
      }
    >
      {children}
    </p>
  );
};

interface ButtonProps extends Props {
  variant?: "primary" | "secondary" | "tertiary";
}

export const ButtonLG = ({
  children,
  className,
  variant = "primary"
}: ButtonProps) => {
  if (variant === "primary")
    return (
      <button
        className={
          "2xl:text-2xl xl:text-xl lg:text-lg text-base font-normal mt-6 text-white rounded-md bg-green-600 hover:bg-green-700 transition-colors px-6 py-2 " +
          className
        }
      >
        {children}
      </button>
    );
  else if (variant === "secondary") {
    return (
      <button
        className={
          "2xl:text-2xl xl:text-xl lg:text-lg text-base font-medium mt-6 text-stone-500 rounded-md bg-white border-stone-500 border-2 px-6 py-2 " +
          className
        }
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={
          "2xl:text-2xl xl:text-xl lg:text-lg text-base font-normal mt-6 text-green-600 rounded-md bg-white px-6 py-2 " +
          className
        }
      >
        {children}
      </button>
    );
  }
};

export const ButtonMD = ({
  children,
  className,
  variant = "primary"
}: ButtonProps) => {
  if (variant === "primary")
    return (
      <button
        className={
          "2xl:text-xl xl:text-lg lg:text-base text-sm font-normal mt-2 text-white rounded-md bg-green-600 hover:bg-green-700 transition-colors px-4 py-1 " +
          className
        }
      >
        {children}
      </button>
    );
  else if (variant === "secondary") {
    return (
      <button
        className={
          "2xl:text-xl xl:text-lg lg:text-base text-sm font-medium mt-2 text-stone-500 rounded-md bg-white border-stone-500 border-2 px-4 py-1 " +
          className
        }
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={
          "2xl:text-xl xl:text-lg lg:text-base text-sm font-normal mt-2 text-green-600 rounded-md bg-white px-4 py-1 " +
          className
        }
      >
        {children}
      </button>
    );
  }
};
