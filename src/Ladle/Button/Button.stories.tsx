
// import styles from '../../Components/Button/PrimaryButton/Button.module.css';
import type { Story } from "@ladle/react";
import { Button } from '../../Components/Button/Button/Button.tsx';
import { OutlineButton } from '../../Components/Button/OutlineButton/OutlineButton.tsx';


type Props = { 
  label: string;
  disabled: boolean;
  color: string[];
  variant: string;
  icon: string
  size: string;
  state: string;
 };

 


export const Buttons: Story<Props> = ({}) => (
  <div>
  <Button></Button> &nbsp;
  <Button icon="left"></Button> &nbsp;
  <Button icon="right"></Button> &nbsp;
  <Button variant="warning"></Button> &nbsp;
  <Button disabled></Button> &nbsp;
  <Button variant="warning" disabled></Button> &nbsp;
  </div>
);

export const OutlineButtons: Story<Props> = ({}) => (
  
  <div>
    <span className="material-icons">face</span>
  <OutlineButton></OutlineButton> &nbsp;
  <OutlineButton icon="left"></OutlineButton> &nbsp;
  <OutlineButton icon="right"></OutlineButton> &nbsp;
  <OutlineButton variant="warning"></OutlineButton> &nbsp;
  <OutlineButton disabled></OutlineButton> &nbsp;
  </div>
);

// className={`${variant==="primary" ? styles.primary : styles.secondary}`}
// Buttons.args = {
//   label: 'Hello world',
//   // variant: ',
//   disabled: false,
//   size: '1'
// };
// Buttons.argTypes = {
//   variant: {
//     options: ['Primary', 'Outline', 'OutlineWarning', 'Warning'],
//     control: { type: 'radio' },
//     defaultValue: 'Primary',
//   },
//   size: {
//     options: ['small', 'medium', 'big', 'huuuuge'],
//     control: { type: 'select' },
//   },
// };