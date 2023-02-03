/// <reference types="react" />
import PropTypes from 'prop-types';
import { LinkProps as RRLinkProps } from 'react-router-dom';
export declare const Link: {
    (props: LinkProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        to: PropTypes.Requireable<NonNullable<string | object>>;
    };
};
export declare const LinkClasses: {
    link: string;
};
export interface LinkProps extends RRLinkProps {
    className?: string;
}
//# sourceMappingURL=Link.d.ts.map