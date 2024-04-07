import { useRemixForm, getValidatedFormData } from "remix-hook-form";
import { Form, useActionData } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ActionFunctionArgs, json } from "@remix-run/node"; // or cloudflare/deno
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const schema = zod.object({
  name: zod.string().min(1),
  email: zod.string().email().min(1),
});

type FormData = zod.infer<typeof schema>;

const resolver = zodResolver(schema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const { errors, data, receivedValues: defaultValues } =
    await getValidatedFormData<FormData>(request, resolver);
  if (errors) {
    return json({ errors, defaultValues });
  }

  // Do something with the data
  return json(data);
};

export default function MyForm() {
    const data=useActionData();
    console.log(data)
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <label>
        Email:
        <Input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
