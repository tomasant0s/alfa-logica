'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    } as FormValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "O número de celular deve conter apenas dígitos")
        .required("Celular é obrigatório"),
      message: Yup.string().required("Mensagem é obrigatória"),
    }),
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  const t = useTranslations("Contact");

  return (
    <div className="flex flex-col items-center bg-primary">
      <h1 className="text-3xl font-semibold text-white mb-4 mt-5">{t("contact")}</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md sm:w-2/3 md:w-1/2 p-5"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 border border-gray-300 rounded mb-2"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4 space-x-2">
          <div className="w-full">
            <label htmlFor="email" className="block text-white font-semibold">
            {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
        </div>

        <div className="mb-4 space-x-2">
          <div className="w-full">
            <label htmlFor="phone" className="block text-white font-semibold">
            {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500">{formik.errors.phone}</div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold">
          {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-3 border border-gray-300 rounded h-40"
            required
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500">{formik.errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-700 text-lg "
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
