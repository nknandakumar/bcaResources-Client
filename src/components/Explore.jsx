import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Send,
	User,
	Mail,
	Phone,
	MessageSquare,
	Check,
	X,
	Loader2,
} from "lucide-react";
import ReactGA from 'react-ga4';

// Modal Component
const Modal = ({ isOpen, onClose }) => {
    ReactGA.send({
		hitType: 'pageview',
		page: window.location.pathname,
		title: 'ChatBot ',
	  });

	const modalRef = useRef(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [contactMethod, setContactMethod] = useState("email");
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
	});

	useEffect(() => {
		if (!isOpen) {
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
			});
			setShowSuccess(false);
			setErrors({});
		}
	}, [isOpen]);

	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = "Name is required.";
		}
		if (contactMethod === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!formData.email.trim()) {
				newErrors.email = "Email is required.";
			} else if (!emailRegex.test(formData.email)) {
				newErrors.email = "Enter a valid email address.";
			}
		} else if (contactMethod === "phone") {
			const phoneRegex = /^[0-9]{10}$/;
			if (!formData.phone.trim()) {
				newErrors.phone = "Phone number is required.";
			} else if (!phoneRegex.test(formData.phone)) {
				newErrors.phone = "Enter a valid 10-digit phone number.";
			}
		}
		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required.";
		}
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setIsSubmitting(true);

		try {
			const response = await fetch(import.meta.env.VITE_FORM_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					access_key: import.meta.env.VITE_FORM_API,
					name: formData.name,
					contact: contactMethod === "email" ? formData.email : formData.phone,
					message: formData.subject,
				}),
			});

			if (response.ok) {
				setShowSuccess(true);
				setTimeout(() => {
					setFormData({
						name: "",
						email: "",
						phone: "",
						subject: "",
					});
					setShowSuccess(false);
					onClose();
				}, 2000);
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setErrors({
			...errors,
			[e.target.name]: "",
		});
	};

	if (!isOpen) return null;

	return (

		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-50 flex items-center justify-center   bg-black bg-opacity-50 backdrop-blur-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.div
					ref={modalRef}
					className="bg-white rounded-xl shadow-2xl max-w-md w-full m-4 overflow-hidden"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 50, opacity: 0 }}
					transition={{ type: "spring", damping: 25, stiffness: 300 }}
				>
					<div className="p-6 border-b border-gray-200">
						<div className="flex justify-between items-center">
							<h2 className="text-2xl font-bold text-gray-800">
								Share Your Idea
							</h2>
							<motion.button
								whileHover={{ rotate: 90 }}
								whileTap={{ scale: 0.95 }}
								onClick={onClose}
								className="text-gray-500 hover:text-gray-700 transition-colors"
							>
								<X className="w-6 h-6" />
							</motion.button>
						</div>
					</div>

					<div className="p-6">
						<p className="text-gray-600 mb-6 leading-relaxed">
							If you or your batchmates have an idea or project you'd like to
							bring to life, whether it's a website or an app, our team is here
							to help. Reach out to us, and let's create something amazing
							together!
						</p>

						<AnimatePresence mode="wait">
							{showSuccess ? (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="flex flex-col items-center justify-center py-8"
								>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ type: "spring", damping: 20, stiffness: 300 }}
									>
										<Check className="w-16 h-16 text-green-500 mb-4" />
									</motion.div>
									<h3 className="text-xl font-semibold text-green-500 mb-2">
										Message Sent Successfully!
									</h3>
									<p className="text-gray-600 text-center">
										We'll get back to you soon.
									</p>
								</motion.div>
							) : (
								<motion.form
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onSubmit={handleSubmit}
									className="space-y-6  "
								>
									{/* Name Field */}
									<div className="relative">
										<User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
											placeholder="Your Name"
										/>
										{errors.name && (
											<p className="text-red-500 text-sm mt-1">{errors.name}</p>
										)}
									</div>

									{/* Contact Method */}
									<div className="space-y-4">
										<div className="flex space-x-4">
											<motion.button
												type="button"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												className={`flex-1 py-2 px-4 rounded-lg border ${
													contactMethod === "email"
														? "bg-blue-50 border-blue-500 text-blue-700"
														: "border-gray-300 text-gray-700"
												}`}
												onClick={() => setContactMethod("email")}
											>
												<div className="flex items-center justify-center space-x-2">
													<Mail className="w-4 h-4" />
													<span>Email</span>
												</div>
											</motion.button>
											<motion.button
												type="button"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												className={`flex-1 py-2 px-4 rounded-lg border ${
													contactMethod === "phone"
														? "bg-blue-50 border-blue-500 text-blue-700"
														: "border-gray-300 text-gray-700"
												}`}
												onClick={() => setContactMethod("phone")}
											>
												<div className="flex items-center justify-center space-x-2">
													<Phone className="w-4 h-4" />
													<span>Phone</span>
												</div>
											</motion.button>
										</div>

										{/* Email or Phone Input */}
										<div className="relative">
											{contactMethod === "email" ? (
												<>
													<Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
													<input
														type="email"
														name="email"
														value={formData.email}
														onChange={handleChange}
														required={contactMethod === "email"}
														className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
														placeholder="Your Email"
													/>
													{errors.email && (
														<p className="text-red-500 text-sm mt-1">
															{errors.email}
														</p>
													)}
												</>
											) : (
												<>
													<Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
													<input
														type="tel"
														name="phone"
														value={formData.phone}
														onChange={(e) => {
															const { value } = e.target;
															if (/^\d{0,10}$/.test(value)) {
																handleChange(e); // Update the state only if the value is valid
															}
														}}
														required={contactMethod === "phone"}
														className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
														placeholder="Your Phone Number"
													/>
													{errors.phone && (
														<p className="text-red-500 text-sm mt-1">
															{errors.phone}
														</p>
													)}
												</>
											)}
										</div>
									</div>

									{/* Subject Field */}

									<div className="relative">
										<MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
										<textarea
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											rows="4"
											className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
											placeholder="Tell us about your project idea..."
										/>
										{errors.subject && (
											<p className="text-red-500 text-sm mt-1">
												{errors.subject}
											</p>
										)}
									</div>

									{/* Submit Button */}
									<div>
										<motion.button
											type="submit"
											disabled={isSubmitting}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
										>
											{isSubmitting ? (
												<Loader2 className="w-5 h-5 animate-spin mx-auto" />
											) : (
												<div className="flex items-center justify-center space-x-2">
													<Send className="w-5 h-5" />
													<span>Send</span>
												</div>
											)}
										</motion.button>
									</div>
								</motion.form>
							)}
						</AnimatePresence>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
