import { render, fireEvent, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Компонент Button', () => {
  it('Рендерит кнопку с дефолтными свойствами', () => {
    const { getByRole } = render(<Button>Hello</Button>);
    const buttonElement = getByRole('button');
    const buttonText = screen.getByText('Hello');
    
    expect(buttonText).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('Применяет пользовательский класс', () => {
    const { getByRole } = render(<Button className="custom-class">Hello</Button>);
    const buttonElement = getByRole('button');

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('Применяет класс темы', () => {
    const { getByRole } = render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);
    const buttonElement = getByRole('button');

    expect(buttonElement).toHaveClass('clear');
  });

  it('Вызывает функцию onClick', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<Button onClick={onClickMock}>Hello</Button>);
    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Передает дополнительные HTML атрибуты', () => {
    const { getByRole } = render(<Button data-testid="custom-button">Hello</Button>);
    const buttonElement = getByRole('button');
  
    expect(buttonElement).toHaveAttribute('data-testid', 'custom-button');
  });
});
