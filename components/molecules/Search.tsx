import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";

type Props = {
  onSubmit: (value: string) => void;
};

export const Search = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    onSubmit(value);
  };

  return (
    <div className="flex w-2/3">
      <Title>Search</Title>
      <Input
        className="ml-10 mr-5 flex flex-grow"
        value={value}
        onChange={setValue}
      />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};
