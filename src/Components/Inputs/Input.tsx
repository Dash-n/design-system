import type { Story } from "@ladle/react";
import styles from './Input.module.css';

type Props = { 
  label: string;
  disabled: boolean;
  color: string[];
  variant: string;
  size: string;
  state: string;
 };

 function getVariant(variant: Variant): string {
  let className: string;

  switch (variant) {
    case "outline":
      className = ":hover";
      break;
    case "variant":
      className = "active";
      break;
    default:
      className = "";
  }

  return className;
}
// const Input: Story<Props> = ({label, variant, size, state})  => (
//   <input
//   placeholder="Text"
//     className={styles.Input}></input>
//   // <button className={styles[`Input${variant ? variant : ""}`]}>
//   //   {label ?? `Input${variant ? variant : ""}`}
//   //   {variant ?? 'Primary'}
//   // </button>
// );


const OutlineInput: Story<Props> = ({label, variant, size, state}) => (
  <button
    className={styles.buttonOutline}
    
  >
    {label ?? `${styles[`button${variant}`]}`}
  </button>
);

export const InputGroup: Story<Props> = ({label, variant, size}) => (
  <div>

  <br></br>
  <br></br>
  <button
    className={styles[`Input${variant ? variant : ""}`]}
  >
    {label ?? "Input"}

    {/* <p>Variant: {variant}</p>
    <p>Size: {size}</p>  */}

    {/* <p>Disabled: {disabled ? 'yes' : 'no'}</p> */}
    {/* <p>Label: {label}</p>
    <p>Variant: {variant}</p>
    <p>Size: {size}</p> */}
  </button>
  </div>
);

// export const OutlineInput: Story<Props> = ({label, variant, size}) => (
//   <div>

//   <Input></Input>
//   <button
//     className={styles.outlinebutton}
//   >
//     {label ?? "Input"}

//     <p>Variant: {variant}</p>
//     <p>Size: {size}</p> 

//     { <p>Count: {count}</p>
//     <p>Disabled: {disabled ? 'yes' : 'no'}</p>
//     <p>Label: {label}</p>
//     <p>Colors: {colors.join(',')}</p>
//     <p>Variant: {variant}</p>
//     <p>Size: {size}</p> 
//   </button>
//   </div>
// );


// className={`${variant==="primary" ? styles.primary : styles.secondary}`}
InputGroup.args = {
  label: 'Hello world',
  // variant: ',
  disabled: false,
  size: '1'
  // count: 2,
  // colors: ['Red', 'Blue'],
};
InputGroup.argTypes = {
  variant: {
    options: ['Primary', 'Outline', 'OutlineWarning', 'Warning'],
    control: { type: 'radio' },
    defaultValue: 'Primary',
  },
  size: {
    options: ['small', 'medium', 'big', 'huuuuge'],
    control: { type: 'select' },
  },
};