export type HeaderNavLinks = {
  href: string;
  title: string;
  logoSrc: string;
};

const headerNavLinks: {
  href: string;
  title: string;
  logoSrc: string;
}[] = [
  { href: '/', title: 'Home', logoSrc: '/logo.png' },
  { href: '/spec', title: 'Spec', logoSrc: '/logo.png' },
];

export default headerNavLinks;
