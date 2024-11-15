"use client";

import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { IProjectRequest } from "@/app/core/application/dto/projects/project-request.dto";
import { IProject } from "@/app/core/application/dto/projects/project-response.dto";
import { EndPointProjects } from "@/app/core/application/model/projects.enum";
import { ButtonSubmit } from "@/components/atoms/Button-submit";
import { Form } from "@/components/atoms/Form";
import { FormTitle } from "@/components/atoms/Form-title";
import { FormField } from "@/components/molecules/FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const createProjectSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  endDate: yup.date().required("End date is required"),
  startDate: yup.date().required("Start date is required"),
});

interface ServicesFormProps {
  title: string;
  submit: string;
  itemData?: IProject;
  method: string;
}

export const ProjectsForm = ({
  title,
  submit,
  itemData,
  method = "POST",
}: ServicesFormProps) => {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<IProjectRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(createProjectSchema),
    defaultValues: {
      title: itemData?.title || "",
      description: itemData?.description || "",
      startDate: itemData?.startDate ? new Date(itemData.startDate) : undefined,
      endDate: itemData?.endDate ? new Date(itemData.endDate) : undefined,
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (itemData) {
      setValue("title", itemData.title);
      setValue("description", itemData.description);
      setValue("endDate", itemData.endDate);
      setValue("startDate", itemData.startDate);
    }
  }, [itemData, setValue]);

  const createService = async (data: IProjectRequest) => {
    try {
      console.log("fetching");
      const response = await fetch(EndPointProjects.CREATE_PROJECT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error creating project");
      }
      const result = await response.json();
      router.refresh();
      console.log("project created - form", result);
    } catch (error) {
      console.log("Error in creating project", error);
      handleError(error);
      return;
    }
  };

  const updateService = async (data: IProjectRequest) => {
    console.log("trying to edit project", data);
    try {
      console.log("editing project");
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate).toISOString().split('T')[0],
        endDate: new Date(data.endDate).toISOString().split('T')[0],
    };
      if (!itemData) {
        throw new Error("Item data is undefined");
      }
      const response = await fetch(`${EndPointProjects.UPDATE_PROJECT}/${itemData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });
      if (!response.ok) {
        throw new Error("Error updating project");
      }
      const result = await response.json();
      router.refresh();
      console.log("project edited - form", result);
    } catch (error) {
      console.log("Error in edit project", error);
      handleError(error);
      return;
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof IProjectRequest, {
            message: error,
          });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("title", { message: errorData.errors[0].message });
        }
      }
    }
  };

  const onSubmit = (data: IProject | IProjectRequest) => {
    if (method === "PUT" && itemData) {
      if ('id' in itemData) {
        updateService({ ...data, id: itemData.id } as IProject);
      }
    } else {
      createService(data as IProjectRequest);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={title} />
      <FormField<IProjectRequest>
        control={control}
        name="title"
        label="Title"
        type="text"
        error={errors.title}
      />
      <FormField<IProjectRequest>
        control={control}
        name="description"
        label="Description"
        type="text"
        error={errors.description}
      />
      <FormField<IProjectRequest>
        control={control}
        name="startDate"
        label="Start Date"
        type="date"
        error={errors.startDate}
      />
      <FormField<IProjectRequest>
        control={control}
        name="endDate"
        label="End Date"
        type="date"
        error={errors.endDate}
      />
      <ButtonSubmit title={submit} />
    </Form>
  );
};
