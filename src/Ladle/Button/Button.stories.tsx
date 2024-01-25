
// import styles from '../../Components/Button/PrimaryButton/Button.module.css';
import type { Story } from "@ladle/react";
import { Button } from '../../Components/Button/Button/Button.tsx';
import { OutlineButton } from '../../Components/Button/OutlineButton/OutlineButton.tsx';
import { IconButton } from '../../Components/Button/IconButton/IconButton.tsx';
import { MenuButton } from '../../Components/Button/MenuButton/MenuButton.tsx';


type Props = { 
  label?: string;
  disabled?: boolean;
  variant?: string;
 };


export const Buttons: Story<Props> = ({}) => (
  <div style={{display: 'flex', gap: '8px'}}>
  <Button variant='primary' label='primary'></Button>
  <Button variant="warning" label='warning'></Button>
  <Button variant='primary' label='primary' disabled></Button>
  <Button variant="warning" label='warning' disabled></Button>
  </div>
);

export const OutlineButtons: Story<Props> = ({}) => (
  
  <div style={{display: 'flex', gap: '8px'}}>
    <span className="material-icons"></span>
  <OutlineButton variant='primary' label='primary'></OutlineButton>
  <OutlineButton variant="warning" label='warning'></OutlineButton>
  <OutlineButton variant='primary' label='primary' disabled></OutlineButton>
  <OutlineButton variant='warning' label='warning' disabled></OutlineButton>
  </div>
);

export const MenuButtons: Story<Props> = ({}) => (
  <div style={{display: 'flex', gap: '8px', width:'300px', flexDirection: 'column'}}>
  <MenuButton variant='inputs'></MenuButton>
  <MenuButton variant='database'></MenuButton>
  <MenuButton variant='reports'></MenuButton>
  <MenuButton variant='builder'></MenuButton>
  <MenuButton variant='teamdash'></MenuButton>
  <MenuButton variant='indivdash'></MenuButton>
  <MenuButton variant='teamphysio'></MenuButton>
  <MenuButton variant='indivphysio'></MenuButton>
  {/* <MenuButton variant='nothing'></MenuButton> */}
  </div>
);
export const IconButtons: Story<Props> = ({}) => (
  <div style={{display: 'flex', gap: '8px'}}>
  <IconButton variant='edit'></IconButton>
  <IconButton variant='settings'></IconButton>
  <IconButton variant='delete'></IconButton>
  </div>
);