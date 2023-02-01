import * as React from 'react';
import { FC } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material';
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be rendered as children of the AppBar
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {boolean} props.open State of the <Admin/> Sidebar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props}>
 *           <Typography
 *               variant="h6"
 *               color="inherit"
 *               className={classes.title}
 *               id="react-admin-title"
 *           />
 *       </AppBar>
 *   );
 *};
 *
 * @example Without a user menu
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props} userMenu={false} />
 *   );
 *};
 */
export declare const AppBar: FC<AppBarProps>;
export interface AppBarProps extends Omit<MuiAppBarProps, 'title'> {
    container?: React.ElementType<any>;
    open?: boolean;
    title?: string | JSX.Element;
    userMenu?: JSX.Element | boolean;
}
export declare const AppBarClasses: {
    appBar: string;
    toolbar: string;
    menuButton: string;
    menuButtonIconClosed: string;
    menuButtonIconOpen: string;
    title: string;
};
//# sourceMappingURL=AppBar.d.ts.map