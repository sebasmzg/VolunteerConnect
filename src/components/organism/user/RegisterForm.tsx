"use client";

import {
  ErrorResponse,
  FieldError,
} from "@/app/core/application/dto/common/error-response.dto";
import { IUserRegister } from "@/app/core/application/dto/users/user-request.dto";
import { ButtonSubmit } from "@/components/atoms/Button-submit";
import { Form } from "@/components/atoms/Form";
import { FormTitle } from "@/components/atoms/Form-title";
import { FormField } from "@/components/molecules/FormField";
import FormFieldSelect from "@/components/molecules/FormFieldSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { EndPointUsers } from "@/app/core/application/model/users.enum";

const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  name: yup.string().required("Name is required"),
  role: yup
    .string()
    .oneOf(["organizer", "participant"], "Invalid role")
    .required("Role is required"),
  photo: yup.mixed<File>().required("Photo is required"),
});

export const RegisterForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IUserRegister>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = async (data: IUserRegister) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("name", data.name);
      formData.append("role", data.role);
      formData.append("photo", data.photo[0]);
      console.log("trying to register data", data);
      const response = await fetch(EndPointUsers.create_user, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        handleError(errorData);
        return;
      }
      alert("User registered successfully");
      router.push("/login");
    } catch (error) {
      console.log("Error in registration", error);
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof IUserRegister, { message: error });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("email", { message: errorData.errors[0].message });
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <FormTitle title="Register" />
      <FormField<IUserRegister>
        control={control}
        name="email"
        label="Email"
        type="email"
        placeholder="tu@ejemplo.com"
        error={errors.email}
      />
      <FormField<IUserRegister>
        control={control}
        name="password"
        label="Password"
        type="password"
        error={errors.password}
      />
      <FormField<IUserRegister>
        control={control}
        name="name"
        label="Name"
        type="text"
        error={errors.name}
      />
      <FormFieldSelect<IUserRegister>
        control={control}
        name="role"
        label="Role"
        options={[
          { value: "organizer", label: "Organizer" },
          { value: "participant", label: "Participant" },
        ]}
        error={errors.role}
      />
      <FormField<IUserRegister>
        control={control}
        name="photo"
        label="Photo URL"
        type="file"
        error={errors.photo}
      />
      <ButtonSubmit title="Register" />
    </Form>
  );
};
