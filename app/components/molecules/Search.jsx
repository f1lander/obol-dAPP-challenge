import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";

export const Search = ({ onSubmit }) => {
  const [value, setValue] = useState("");

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
