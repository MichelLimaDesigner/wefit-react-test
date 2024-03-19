import { Btn } from "./Button.styles"

interface IButton {
  isAdded?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ isAdded, children, className, ...props }: IButton) => {
  return (
    <Btn className={`${className} ${isAdded ? 'active' : ''}`} {...props}>
      <button>
        {children}
      </button>
    </Btn>
  );
};

export default Button