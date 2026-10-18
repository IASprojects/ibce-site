---
name: Raíces de Esperanza
colors:
  surface: '#fef9f0'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#56423d'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e7'
  outline: '#8a726c'
  outline-variant: '#ddc0ba'
  surface-tint: '#a03f29'
  primary: '#a03f28'
  on-primary: '#ffffff'
  primary-container: '#c0573e'
  on-primary-container: '#120100'
  inverse-primary: '#ffb4a3'
  secondary: '#466556'
  on-secondary: '#ffffff'
  secondary-container: '#c8ead8'
  on-secondary-container: '#4c6b5c'
  tertiary: '#7b5500'
  on-tertiary: '#ffffff'
  tertiary-container: '#9b6c00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0700'
  on-primary-fixed-variant: '#812914'
  secondary-fixed: '#c8ead8'
  secondary-fixed-dim: '#adcebc'
  on-secondary-fixed: '#022015'
  on-secondary-fixed-variant: '#2f4d3f'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#f9bc50'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-gap: 80px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

The design system is built upon the concept of "Radical Hospitality." It moves away from cold, institutional aesthetics in favor of a **Warm Modernism** that feels grounded in the earth and elevated by light. The target audience includes both local families and newcomers seeking a sense of belonging in Guayabo de Bagaces.

The visual language balances the stability of a spiritual foundation with the dynamism of a growing community. By utilizing organic tones and soft, human-centric geometry, the UI evokes an emotional response of peace, safety, and transparency. The style avoids harsh shadows and rigid grids, opting instead for breathable layouts and tactile surfaces that feel approachable rather than corporate.

## Colors

The palette is derived from the natural landscape of Guanacaste—earth, foliage, and sunlight.

- **Primary (Terracotta):** Used for main actions and brand identifiers. It represents the warmth of the community and the "Camino" (path).
- **Secondary (Deep Sage):** Associated with hope, spiritual growth, and the lush surroundings of Bagaces. Used for secondary actions and success states.
- **Background (Warm Sand):** Replaces clinical white to create a "paper-like" warmth that reduces eye strain and feels more inviting.
- **Highlight (Amber):** Used sparingly for notifications, seasonal accents, or to draw attention to "New Here" pathways.
- **Text (Deep Charcoal):** Ensures high legibility and contrast against the sand background without the harshness of pure black.

## Typography

The typography strategy pairs the structural confidence of **Montserrat** with the friendly, contemporary rhythm of **Be Vietnam Pro**.

Headlines should be set with tight letter-spacing to feel impactful and modern. Body text utilizes a generous line height to ensure scriptures and long-form announcements are easy to digest. Use the `label-caps` style for small metadata like dates, categories, or ministry names to provide clear information hierarchy without overwhelming the page.

## Layout & Spacing

This design system utilizes a **Fluid-Responsive Grid** with an emphasis on vertical rhythm.

- **Desktop:** 12-column grid with a 1200px max-width to maintain focus.
- **Mobile:** Single column with 20px side margins to ensure content doesn't feel cramped on smaller devices.
- **Rhythm:** Use the `section-gap` for major content transitions (e.g., between "Service Times" and "Latest Sermon"). Internal component spacing should follow an 8px incremental scale to maintain visual harmony.
- **Negative Space:** Don't be afraid of whitespace; it represents the "room to breathe" and "transparency" core to the brand.

## Elevation & Depth

Depth is created through **Tonal Layering** rather than heavy drop shadows.

1. **Surface 0 (Base):** The Warm Sand background.
2. **Surface 1 (Cards):** Pure white or a slightly lighter cream than the base, with a very soft, diffused amber-tinted shadow (4% opacity).
3. **Interactive States:** Elements should feel tactile. When hovered or pressed, buttons and cards can slightly lift (increase shadow spread) or shift color to a deeper tone of the same hue.

Avoid using pure black for shadows; always tint them with the Secondary or Primary color to keep the UI "warm" and cohesive.

## Shapes

The shape language is defined by **Soft Roundedness (Radius: 8px - 24px)**.

- **Standard Buttons/Inputs:** 8px radius.
- **Content Cards:** 16px radius.
- **Feature/Hero Elements:** 24px radius or fully rounded "pill" shapes for badges.

These curves remove the "sharp edges" of traditional religious institutions, signaling safety and radical acceptance. Avoid hard 90-degree corners entirely.

## Components

- **Buttons:** Primary buttons use the Terracotta background with White text. Secondary buttons use a Sage outline. All buttons have a minimum height of 48px to ensure accessibility and a "friendly" hit area.
- **Cards:** Use for "Upcoming Events" or "Ministries." Cards should feature a subtle border (1px, 10% opacity Charcoal) to define them against the sand background.
- **Input Fields:** Soft cream background with a slightly darker border. Focus states should use a 2px Terracotta glow.
- **Chips/Badges:** Use for tagging "Youth," "Missions," or "Service." These should be pill-shaped with the Sage or Amber background at low opacity (15%) and high-contrast text.
- **Sermon List:** Use a "List Item" component with a small thumbnail (rounded) and the `headline-md` for the title. Ensure there is a clear "Play" or "Listen" icon in the Highlight (Amber) color.
- **Donation/Giving Widget:** This should be the most "secure" looking element—clean, high-contrast, with a "Primary" color button to encourage participation.
