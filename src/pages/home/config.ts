/**
 * Home page configuration
 *
 * To disable animations, set VITE_SKIP_ANIMATIONS=true in your environment
 * or create a .env file with: VITE_SKIP_ANIMATIONS=true
 */
export const homePageConfig = {
  animations: {
    enabled: import.meta.env.VITE_SKIP_ANIMATIONS !== 'true',
  },
} as const
