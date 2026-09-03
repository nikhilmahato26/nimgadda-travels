// Guest reviews.
//
// Deliberately empty. The reference design has a testimonial section, but the
// client has not supplied any real guest quotes and inventing them for a real
// business would be dishonest. The section reads this array and does not
// render at all while it is empty, so the page has no hole in it.
//
// To switch the section on, add entries in this shape and it appears:
//   {
//     quote: "Two or three sentences, in the guest's own words.",
//     name: "Guest name",
//     role: "Where they travelled from, or their family name",
//     image: "/images/reviews/<file>.jpg",  // optional
//   }

export const testimonials = [];
