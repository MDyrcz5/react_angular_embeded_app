import React from "react";
import { useForm } from "react-hook-form";
import { Select, Button, Input, Stack } from "@chakra-ui/react";

const FormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="3" width="250px">
        <Input {...register("firstName")} placeholder="First name" />
        <Input {...register("lastName")} placeholder="Last name" />
        <Select {...register("category")}>
          <option value="">Select...</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </Select>

        <Button type="submit" colorScheme="blue">
          Button
        </Button>
      </Stack>
    </form>
  );
};

export default FormPage;
