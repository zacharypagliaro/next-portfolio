import Link, { LinkProps } from 'next/link';

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkComponent