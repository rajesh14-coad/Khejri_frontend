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
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
