https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)
function commander(produit, prix) {
    const numeroWhatsApp = "24166551007"; // Mets ton vrai numéro WhatsApp
    const message = `Bonjour, je souhaite commander : ${produit} (${prix} FCFA) via Darling-Boutique.`;
    const lien = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(lien, "_blank");
}
