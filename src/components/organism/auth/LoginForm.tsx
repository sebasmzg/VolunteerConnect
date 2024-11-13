"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dto/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { Form } from "@/components/atoms/Form";
import { FormTitle } from "@/components/atoms/Form-title";
import { FormField } from "@/components/molecules/FormField";
import { ButtonSubmit } from "@/components/atoms/Button-submit";
import Link from "next/link";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const LoginForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data: ILoginRequest) => {
    console.log("submit")
    try {
      console.log("data", data);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        console.log("Login error:", result.error);
        handleError(result.error);
        return;
      }
      router.push("/home");
    } catch (error) {
      console.log("Error in login", error);
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof ILoginRequest, { message: error });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("email", { message: errorData.errors[0].message });
        }
      }
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(handleLogin)}
    >
      <FormTitle title="Iniciar sesión" subtitle="Ingresa tus credenciales para acceder a tu cuenta" />
      <FormField<ILoginRequest>
        control={control}
        name="email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        placeholder="tu@ejemplo.com"
      />
      <FormField<ILoginRequest>
        control={control}
        name="password"
        label="Password"
        type="password"
        error={errors.password}
        placeholder="********"
      />
      <ButtonSubmit title="Login" />
      <div className="space-y-1 text-center text-sm">
        <p className=" text-blue-600"><Link href={"#"}>¿Olvidaste tu contraseña?</Link></p>
        <p>¿No tienes una cuenta? <span><Link href={"/register"} className="text-blue-600">Regístrate aquí</Link></span></p>
      </div>
    </Form>
  );
};
