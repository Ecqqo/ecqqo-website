const shoulders = "M5 40c1.6-7.4 7-11.4 15-11.4S33.4 32.6 35 40Z";

const avatars = {
  omar: (
    <>
      <rect width="40" height="40" fill="#f3d9cc" />
      <path d={shoulders} fill="#26324a" />
      <path d="M16.6 29l3.4 5.4 3.4-5.4Z" fill="#fff" />
      <rect x="17" y="21" width="6" height="8.5" rx="2.5" fill="#a86f4c" />
      <circle cx="13.6" cy="18" r="1.5" fill="#b47853" />
      <circle cx="26.4" cy="18" r="1.5" fill="#b47853" />
      <ellipse cx="20" cy="17" rx="6.4" ry="7.4" fill="#b47853" />
      <path d="M13.5 16.4c-.5-5 2.5-8.4 6.5-8.4s7 3.4 6.5 8.4c-.9-2.6-2.9-4.1-6.5-4.1s-5.6 1.5-6.5 4.1Z" fill="#231915" />
      <path d="M14 19.2c.7 4.5 3 6.6 6 6.6s5.3-2.1 6-6.6c-.6 1.8-1.6 2.6-2.6 2.6-1 0-1.8-.6-3.4-.6s-2.4.6-3.4.6c-1 0-2-.8-2.6-2.6Z" fill="#3a2a20" />
    </>
  ),
  legal: (
    <>
      <rect width="40" height="40" fill="#dfe6f3" />
      <path d="M-1 40c1.2-6.4 5.4-9.8 11.6-9.8s10.4 3.4 11.6 9.8Z" fill="#4a6593" />
      <rect x="8.2" y="24" width="4.8" height="7" rx="2" fill="#e0b08e" />
      <ellipse cx="10.6" cy="20.6" rx="5" ry="5.8" fill="#e8bc9a" />
      <path d="M5.4 21.6c-.6-5.6 1.6-9.2 5.2-9.2s5.8 3.6 5.2 9.2l-1-.2c.2-2.8-.4-4.6-1.4-5.4-1.4 1-3.6 1.4-6.2 1.4-.6 1.2-.8 2.6-.8 4.4Z" fill="#5a3a24" />
      <path d="M17.8 40c1.3-6.8 5.8-10.4 12.2-10.4S40.9 33.2 42.2 40Z" fill="#232c3d" />
      <rect x="27.5" y="23.5" width="5" height="7.5" rx="2" fill="#7a4b30" />
      <ellipse cx="30" cy="19.6" rx="5.4" ry="6.2" fill="#8a5636" />
      <path d="M24.6 18.8c-.3-4.6 2.2-7.4 5.4-7.4s5.7 2.8 5.4 7.4c-.8-2-2.6-3.2-5.4-3.2s-4.6 1.2-5.4 3.2Z" fill="#17110d" />
    </>
  ),
  sarah: (
    <>
      <rect width="40" height="40" fill="#e3eee0" />
      <path d={shoulders} fill="#7c5aa6" />
      <path d="M11.6 18.6c0-6.6 3.7-10.8 8.4-10.8s8.4 4.2 8.4 10.8c0 4.2-1.3 7.6-3.2 9.8l4.6 4.4H10.2l4.6-4.4c-1.9-2.2-3.2-5.6-3.2-9.8Z" fill="#3f6f8a" />
      <ellipse cx="20" cy="18.4" rx="5.2" ry="6.2" fill="#efcfb2" />
      <path d="M14.5 16.6c.7-3.9 2.8-5.9 5.5-5.9s4.8 2 5.5 5.9c-1.5-1.4-3.4-2.1-5.5-2.1s-4 .7-5.5 2.1Z" fill="#3f6f8a" />
      <path d="M15 26.2c1.4 1.4 3.1 2.1 5 2.1s3.6-.7 5-2.1" fill="none" stroke="#335c73" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  karim: (
    <>
      <rect width="40" height="40" fill="#f4e7cb" />
      <path d={shoulders} fill="#d0683e" />
      <rect x="17" y="21" width="6" height="8.5" rx="2.5" fill="#cf9a74" />
      <circle cx="13.6" cy="18" r="1.5" fill="#dca883" />
      <circle cx="26.4" cy="18" r="1.5" fill="#dca883" />
      <ellipse cx="20" cy="17.4" rx="6.4" ry="7.2" fill="#dca883" />
      <g fill="#3b2416">
        <circle cx="14.6" cy="13.4" r="2.8" />
        <circle cx="17.2" cy="10.8" r="3" />
        <circle cx="20.4" cy="10" r="3.1" />
        <circle cx="23.4" cy="11" r="3" />
        <circle cx="25.6" cy="13.6" r="2.7" />
      </g>
    </>
  ),
  supplies: (
    <>
      <rect width="40" height="40" fill="#ece6dd" />
      <rect x="11" y="18" width="18" height="13" rx="1.5" fill="#fff" />
      <path d="M9.5 13h21l1.5 6.5H8Z" fill="#c9bfb2" />
      <path d="M12.6 13l-1 6.5M17.8 13l-.4 6.5M22.2 13l.4 6.5M27.4 13l1 6.5" stroke="#fff" strokeWidth="1.6" />
      <rect x="17.5" y="23.5" width="5" height="7.5" fill="#c9bfb2" />
    </>
  ),
};

export function ContactAvatar(props: { name: keyof typeof avatars }) {
  return (
    <svg className="contact-avatar" viewBox="0 0 40 40" aria-hidden="true">
      {avatars[props.name]}
    </svg>
  );
}
