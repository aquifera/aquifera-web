import Link from 'next/link';

import { ButtonProps } from './button.model';
import { StyledButton } from './button.styled';

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  secondary = false,
}) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton secondary={secondary}>{children}</StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton onClick={onClick} secondary={secondary}>
      {children}
    </StyledButton>
  );
};

export default Button;