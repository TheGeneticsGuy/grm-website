tailwind.config = {
    theme: {
        extend: {
            colors: {
                wow: {
                    // Dark colors for the specific dark sections (Module/Footer)
                    dark: '#0f1115',
                    panel: '#151921',

                    // Brand Colors
                    gold: '#FFD100',      // Bright Gold (Icons/Dark Bg)
                    darkGold: '#b45309',  // Darker Gold (For text on White Bg)
                    accent: '#F8B700',

                    // Light Theme Colors
                    lightBg: '#f9fafb',   // Very light gray background
                    cardBg: '#ffffff',    // White cards
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cinzel', 'serif'],
            }
        }
    }
}