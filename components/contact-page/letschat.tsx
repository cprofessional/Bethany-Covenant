"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import Image from "next/image"
import CoffeeImage from "@/public/assets/Coffee.jpg"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function LetsChat() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}
    let isValid = true

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const { firstName, lastName, email, subject, message } = formData
    const mailtoLink = `mailto:info@bethanycov.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Message:
${message}`,
    )}`

    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Let's chat over coffee!</h2>
      <p className="text-gray-600 mb-4">Fill out the form below or email us at:</p>
      <div className="items-center justify-center">
        <p className="font-bold text-gray-900">
          <a href="mailto:info@bethanycov.org" className="text-blue-600 underline">
            info@bethanycov.org
          </a>
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-8 md:mt-0">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={CoffeeImage || "/placeholder.svg"}
            alt="Coffee cups"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-12 flex justify-center">
          <form className="mt-6 w-full max-w-md" onSubmit={handleSubmit} noValidate>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="text-sm text-gray-600">
                  First Name (required)
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${formErrors.firstName ? "border-red-500" : "border-gray-300"} rounded-md focus:ring focus:ring-blue-300`}
                  required
                />
                {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email (required)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:ring focus:ring-blue-300`}
                required
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="text-sm text-gray-600">
                Subject (required)
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-2 border ${formErrors.subject ? "border-red-500" : "border-gray-300"} rounded-md focus:ring focus:ring-blue-300`}
                required
              />
              {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="text-sm text-gray-600">
                Message (required)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border ${formErrors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:ring focus:ring-blue-300`}
                rows={4}
                required
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

