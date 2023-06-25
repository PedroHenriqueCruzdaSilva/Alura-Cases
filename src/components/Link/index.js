import NextLink from 'next/link';
import React from 'react';

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
    </a>
  );
});

export default function Link({ children, href, ...props}) {
    return (
        <NextLink href={href} passHref>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    );
}