import Link from 'next/link';

export default function CategoryLink({ children, path }) {
  return <Link href={path}>{children}</Link>;
}
