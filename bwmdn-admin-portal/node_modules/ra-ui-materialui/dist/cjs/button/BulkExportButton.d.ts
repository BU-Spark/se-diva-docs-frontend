/// <reference types="react" />
import PropTypes from 'prop-types';
import { Identifier, Exporter } from 'ra-core';
import { ButtonProps } from './Button';
/**
 * Export the selected rows
 *
 * To be used inside the <List bulkActionButtons> prop.
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkDeleteButton, BulkExportButton } from 'react-admin';
 *
 * const PostBulkActionButtons = () => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkDeleteButton />
 *     </Fragment>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
export declare const BulkExportButton: {
    (props: BulkExportButtonProps): JSX.Element;
    propTypes: {
        exporter: PropTypes.Requireable<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    exporter?: Exporter;
    filterValues?: any;
    icon?: JSX.Element;
    label?: string;
    onClick?: (e: Event) => void;
    selectedIds?: Identifier[];
    resource?: string;
}
export declare type BulkExportButtonProps = Props & ButtonProps;
export {};
//# sourceMappingURL=BulkExportButton.d.ts.map