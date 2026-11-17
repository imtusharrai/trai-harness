import type { IconProps } from './icons/props.ts'
import { TRAI_LOGO_DATA_URI } from './FishLogo.tsx'

/** Display options for the official brand wordmark. */
export interface BrandWordmarkProps extends IconProps {
  /** Whether to include the leading mark; defaults to true. */
  includeMark?: boolean | undefined
}

/**
 * Render the full brand wordmark for Trai Harness.
 * @param props.size - height in px (default 24; width follows the selected artwork).
 * @param props.className - extra class for layout placement.
 * @param props.includeMark - whether to include the leading brand mark.
 * @returns the wordmark svg.
 */
export function BrandWordmark({ size = 24, className, includeMark = true }: BrandWordmarkProps) {
  const width = includeMark ? 182 : 156
  return (
    <svg
      width={(size * width) / 24}
      height={size}
      className={className}
      viewBox={includeMark ? '0 0 182 24' : '26 0 156 24'}
      fill="none"
      aria-hidden="true"
    >
      {includeMark && (
        <image
          href={TRAI_LOGO_DATA_URI}
          x="2"
          y="2"
          width="20"
          height="20"
          style={{ borderRadius: 4 }}
        />
      )}
      <text
        x="32"
        y="17"
        fill="currentColor"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Trai
      </text>
      <rect
        x="72"
        y="4.5"
        width="56"
        height="15"
        rx="2.5"
        fill="currentColor"
      />
      <text
        x="100"
        y="15"
        fill="var(--dsw-alias-label-primary-inverted, #fff)"
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.06em"
        textAnchor="middle"
      >
        HARNESS
      </text>
    </svg>
  )
}
