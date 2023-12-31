import cls from './LangSwitcher.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      data-testid="lang-switcher" 
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  )
}

export default LangSwitcher
