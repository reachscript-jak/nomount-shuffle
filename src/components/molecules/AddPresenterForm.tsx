import { useState } from "react";
import { Form } from "src/components/atoms/form/form";
import { Button } from "src/components/atoms/button/button";

interface Props {
  handleOnClick: (value: string) => void;
}

export const AddPresenterForm = (props: Props) => {
  const setClick = () => {
    if (value === "") {
      return;
    }
    props.handleOnClick(value);

    setValue("");
  };

  const [value, setValue] = useState("");

  const handleOnChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <>
      <Form handleOnChange={handleOnChange} handleOnKeyPress={setClick} value={value} />
      <Button name="Add" handleOnClick={setClick} />
    </>
  );
};
