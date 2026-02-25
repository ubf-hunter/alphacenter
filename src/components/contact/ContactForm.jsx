// ============================================
// CONTACT FORM - Formulaire avec redirection WhatsApp
// ============================================

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { z } from 'zod';
import { contactInfo, getWhatsAppUrl, programmeOptions } from '../../data/contact';

// Schema de validation
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caracteres')
    .max(100, 'Le nom ne peut pas depasser 100 caracteres'),
  email: z
    .string()
    .email('Adresse email invalide')
    .max(254, 'Email trop long')
    .or(z.literal('')),
  programme: z.string(),
  message: z
    .string()
    .max(2000, 'Le message ne peut pas depasser 2000 caracteres'),
});

// Animation variants
const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', damping: 25, stiffness: 120, delay: 0.2 },
  },
};

// Composant Input
function Input({ label, error, required, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-navy"
        >
          {label}
          {required && <span className="text-orange ml-1">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/50 backdrop-blur-sm
          border-2 border-gray-200
          text-navy placeholder:text-gray-400
          focus:border-orange focus:ring-2 focus:ring-orange/20 focus:outline-none
          transition-all duration-200
          ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}
        `}
      />
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Composant Select
function Select({ label, options, required, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-navy"
        >
          {label}
          {required && <span className="text-orange ml-1">*</span>}
        </label>
      )}
      <select
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border-2 border-gray-200 text-navy focus:border-orange focus:ring-2 focus:ring-orange/20 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23001A51' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          backgroundSize: '20px',
          paddingRight: '48px',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Composant Textarea
function Textarea({ label, required, error, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-navy"
        >
          {label}
          {required && <span className="text-orange ml-1">*</span>}
        </label>
      )}
      <textarea
        {...props}
        className={`w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border-2 border-gray-200 text-navy placeholder:text-gray-400 focus:border-orange focus:ring-2 focus:ring-orange/20 focus:outline-none transition-all duration-200 resize-none ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
      />
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Cooldown anti-spam (minimum 5s entre soumissions)
const SUBMIT_COOLDOWN_MS = 5000;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    programme: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitRef = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const result = contactSchema.safeParse(formData);
    if (result.success) return {};

    const newErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (!newErrors[field]) {
        newErrors[field] = issue.message;
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitRef.current < SUBMIT_COOLDOWN_MS) {
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    lastSubmitRef.current = now;

    const whatsappUrl = getWhatsAppUrl(formData);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDirectCall = () => {
    window.location.href = `tel:${contactInfo.phones[1].formatted}`;
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="lg:sticky lg:top-24"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-navy/10 border border-white/50 overflow-hidden">
        {/* Header decoratif */}
        <div className="h-1 bg-gradient-to-r from-navy via-orange to-apricot" />

        <div className="p-6 md:p-8">
          {/* Titre */}
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-2">
              Ecris-nous
            </h2>
            <p className="text-sm text-gray-500">
              Remplis le formulaire et on te repond sur WhatsApp
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom et Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nom complet"
                name="name"
                id="contact-name"
                type="text"
                placeholder="Ton nom"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                label="Email"
                name="email"
                id="contact-email"
                type="email"
                placeholder="ton.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                maxLength={254}
              />
            </div>

            {/* Programme */}
            <Select
              label="Programme qui t'interesse"
              name="programme"
              id="contact-programme"
              options={programmeOptions}
              value={formData.programme}
              onChange={handleChange}
            />

            {/* Message */}
            <Textarea
              label="Ton message"
              name="message"
              id="contact-message"
              placeholder="Decris ta situation ou pose ta question..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              maxLength={2000}
            />

            {/* Bouton WhatsApp principal */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Redirection...
                </>
              ) : (
                <>
                  <MessageCircle size={22} />
                  Envoyer sur WhatsApp
                </>
              )}
            </motion.button>

            {/* Separateur */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">ou</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Bouton Appel */}
            <button
              type="button"
              onClick={handleDirectCall}
              className="w-full py-3 px-6 border-2 border-navy/20 text-navy font-semibold rounded-xl flex items-center justify-center gap-3 hover:border-navy hover:bg-navy/5 transition-all duration-300"
            >
              <Phone size={20} />
              Appeler directement
            </button>
          </form>

          {/* Note */}
          <p className="text-center text-xs text-gray-400 mt-6">
            En nous contactant, tu acceptes notre politique de confidentialite.
            <br />
            Nous ne partageons jamais tes informations.
          </p>
        </div>
      </div>

      {/* Badge de confiance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500"
      >
        <Send size={14} className="text-green-500" />
        <span>Reponse garantie sous 24h ouvrables</span>
      </motion.div>
    </motion.div>
  );
}
