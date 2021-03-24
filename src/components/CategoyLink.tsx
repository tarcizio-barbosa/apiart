import Link from 'next/link';

export default function CategoyLink({ children, path }) {
  return <Link href={path}>{children}</Link>;
}
