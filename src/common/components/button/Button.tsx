import { Btn } from "./Button.styles"

interface IButton {
  isAdded?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ isAdded, children, ...props }: IButton) => {
  return (
    <Btn className={isAdded ? 'active' : ''} {...props}>
      <button>
        {children}
      </button>
    </Btn>
  );
};

export default Button