function commander(produit, prix) {
    const numeroWhatsApp = "24170000000"; // Mets ton vrai numéro WhatsApp
    const message = `Bonjour, je souhaite commander : ${produit} (${prix} FCFA) via Darling-Boutique.`;
    const lien = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(lien, "_blank");
}
