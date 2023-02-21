/// <reference types="react" />
import { RaThemeOptions } from '..';
/**
 * Button toggling the theme (light or dark).
 *
 * @example
 *
 * const MyAppBar = props => (
 *     <AppBar {...props}>
 *         <Box flex="1">
 *             <Typography variant="h6" id="react-admin-title"></Typography>
 *         </Box>
 *         <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
 *     </AppBar>
 * );
 *
 * const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;
 */
export declare const ToggleThemeButton: (props: ToggleThemeButtonProps) => JSX.Element;
export interface ToggleThemeButtonProps {
    darkTheme: RaThemeOptions;
    lightTheme?: RaThemeOptions;
}
//# sourceMappingURL=ToggleThemeButton.d.ts.map