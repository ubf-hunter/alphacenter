// ============================================
// WHATSAPP ORDER BUTTON
// Bouton de commande via WhatsApp
// ============================================

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/data/purchaseInfo';

export default function WhatsAppOrderButton({
  product,
  format = 'digital',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) {
  const whatsappLink = generateWhatsAppLink(product, format);

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300';

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40',
    secondary: 'bg-white border-2 border-green-500 text-green-600 hover:bg-green-50',
    ghost: 'text-green-600 hover:bg-green-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <MessageCircle size={size === 'lg' ? 24 : size === 'sm' ? 16 : 20} />
      {children || 'Commander sur WhatsApp'}
    </a>
  );
}
