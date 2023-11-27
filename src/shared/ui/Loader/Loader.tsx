import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames('lds-default', {}, [className])}>
      {[...Array(12)].map((_, index) => (
        <div key={index} />
      ))}
    </div>

  )
}

export default Loader
