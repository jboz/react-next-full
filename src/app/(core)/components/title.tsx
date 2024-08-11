interface TitleProps {
  value: string;
}

export const Title = ({ value }: TitleProps) => {
  return <h1>{value}</h1>;
};
