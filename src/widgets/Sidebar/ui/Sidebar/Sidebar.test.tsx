import { render, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Компонент Sidebar', () => {
  it('Рендерит боковую панель с дефолтными свойствами', () => {
    const { getByTestId } = render(<Sidebar />);
    const sidebarElement = getByTestId('sidebar');

    expect(sidebarElement).toBeInTheDocument();
  });

  it('Имеет возможность сворачивания и разворачивания', () => {
    const { getByTestId } = render(<Sidebar />);
    const toggleButton = getByTestId('toggle-button');

    fireEvent.click(toggleButton);
    expect(getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleButton);
    expect(getByTestId('sidebar')).not.toHaveClass('collapsed');
  });

  it('Отображает кнопку для сворачивания и разворачивания', () => {
    const { getByTestId } = render(<Sidebar />);
    const toggleButton = getByTestId('toggle-button');

    expect(toggleButton).toBeInTheDocument();
  });

  it('Отображает виджеты переключения темы и языка', () => {
    const { getByTestId } = render(<Sidebar />);
    const themeSwitcher = getByTestId('theme-switcher');
    const langSwitcher = getByTestId('lang-switcher');

    expect(themeSwitcher).toBeInTheDocument();
    expect(langSwitcher).toBeInTheDocument();
  });

  it('Меняет состояние при нажатии на кнопку toggle', () => {
    const { getByTestId } = render(<Sidebar />);
    const toggleButton = getByTestId('toggle-button');

    fireEvent.click(toggleButton);
    expect(getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
