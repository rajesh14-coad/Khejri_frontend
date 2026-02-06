/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    green: '#2D5A27',
                    tan: '#C2B280',
                    light: '#f4f7f2', // Light greenish-white for backgrounds
                    dark: '#1a3317'   // Darker green for text
                },
                brand: {
                    olive: '#4f542b',
                    neon: '#4cd57a',
                    saffron: '#E07A5F'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
                serif: ['Playfair Display', 'Noto Sans Devanagari', 'serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
