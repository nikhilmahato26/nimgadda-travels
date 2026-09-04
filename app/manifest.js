export default function manifest() {
  return {
    name: "Nimmagadda Vari Andhra Tours and Travels",
    short_name: "Nimmagadda Vari",
    description:
      "Deluxe AC rooms near Kashi Vishwanath temple, Andhra meals, and yatra packages in Varanasi.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#c07d3b",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
