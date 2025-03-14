import { useState } from 'react';
import Image from 'next/image';
import CoffeeImage from "@/public/assets/Coffee.jpg";

export default function LetsChat() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { firstName, lastName, email, subject, message } = formData;
        if (!firstName || !email || !subject || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        const mailtoLink = `mailto:info@bethanycov.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Message:
${message}`
        )}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Let’s chat over coffee!
            </h2>
            <p className="text-gray-600 mb-4">
                Fill out the form below or email us at:
            </p>
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
                        src={CoffeeImage}
                        alt="Coffee cups"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pr-12 flex justify-center">
                    <form className="mt-6 w-full max-w-md" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="text-sm text-gray-600">First Name (required)</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm text-gray-600">Email (required)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm text-gray-600">Subject (required)</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm text-gray-600">Message (required)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
