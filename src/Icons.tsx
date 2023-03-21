// icon:bx-help-circle | Boxicons https://boxicons.com/ | Atisa
import * as React from 'react'

const style1 = {
  marginBottom: -2,
  marginRight: 6
}
const style2 = {
  marginBottom: -2
}

export function IconBxHelpCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: style1, ...props }}
    >
      <path d="M12 6a3.939 3.939 0 00-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 00-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0012 6zm-1 10h2v2h-2z" />
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  )
}

export function IconChartmogul(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: style1, ...props }}
    >
      <path d="M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14z" />
    </svg>
  )
}

export function IconHardwareChipOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: style1, ...props }}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M128 80 H384 A48 48 0 0 1 432 128 V384 A48 48 0 0 1 384 432 H128 A48 48 0 0 1 80 384 V128 A48 48 0 0 1 128 80 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 144 H352 A16 16 0 0 1 368 160 V352 A16 16 0 0 1 352 368 H160 A16 16 0 0 1 144 352 V160 A16 16 0 0 1 160 144 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32"
      />
    </svg>
  )
}

export function IconSettings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...{ style: style1, ...props }}
    >
      <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}

export function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: style2, ...props }}
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  )
}

export function IconCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: style2, ...props }}
    >
      <path d="M21 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11H10a3 3 0 00-3 3v1H6a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-1h1a3 3 0 003-3V9v-.06zm-6-3.53L17.59 8H16a1 1 0 01-1-1zM15 19a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h1v7a3 3 0 003 3h5zm4-4a1 1 0 01-1 1h-8a1 1 0 01-1-1V5a1 1 0 011-1h3v3a3 3 0 003 3h3z" />
    </svg>
  )
}

export function IconInfoCircled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 920 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      {...{ style: { color: 'lightgrey', fontSize: 12 }, ...props }}
    >
      <path d="M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104" />
    </svg>
  )
}
export function IconCaretDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      height="1em"
      width="1em"
      {...props}
      style={{ fontSize: 20, marginBottom: -6, marginRight: -24 }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.182 6.182a.45.45 0 01.636 0L7.5 8.864l2.682-2.682a.45.45 0 01.636.636l-3 3a.45.45 0 01-.636 0l-3-3a.45.45 0 010-.636z"
        clipRule="evenodd"
      />
    </svg>
  )
}
