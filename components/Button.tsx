import { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonDefaultProps = {
  children: ReactNode
}

type ButtonConditionalProps<T = 'link' | 'button'> = T extends 'link' ? {
  as: T
  href: string
  isExternal?: boolean
} : {
  as: T
  type?: 'button' | 'submit'
}

type ButtonProps = ButtonConditionalProps & ButtonDefaultProps

const Button = (props: ButtonProps) => {
  const { as, children } = props

  return as === 'button' ? (
    <button
      type={props.type === 'button' ? 'button' : 'submit'}
      className={styles.button}
    >
      {children}
    </button>
  ) : (
    <a
      href={props.href}
      target={props.isExternal ? '_blank' : '_self'}
      rel={'noreferrer'}
      className={styles.button}
    >
      {children}
    </a>
  )
}

export default Button
