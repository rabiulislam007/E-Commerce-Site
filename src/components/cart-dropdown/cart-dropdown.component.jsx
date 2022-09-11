import Button from '../button/button.components';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-tiems'>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
