import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "254726878628"; // Kenya country code
    const message = "Hi, I'd like to inquire about your construction services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
