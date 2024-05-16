'use client' 
import classes from './Button.module.css';
export interface ButtonProps { 
  text: string; 
  clickHandler?: any;
  clickHandlerCallbackParameter?: any;
  type: 'button' | 'submit' | 'reset';
}
export default function Button({ text, clickHandler, clickHandlerCallbackParameter, type }: ButtonProps) {
  if(clickHandler && clickHandlerCallbackParameter) { 
    return (
      <button type={type} className={classes.button} onClick={() => clickHandler(clickHandlerCallbackParameter)}>{text}</button>
    )
  }
  return (
    <button type={type} className={classes.button}>{text}</button>
  )
}