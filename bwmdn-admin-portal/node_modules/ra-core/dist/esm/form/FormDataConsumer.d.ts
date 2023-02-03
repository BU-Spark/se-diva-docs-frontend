import { ReactNode } from 'react';
/**
 * Get the current (edited) value of the record from the form and pass it
 * to a child function
 *
 * @example
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <BooleanInput source="hasEmail" />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) => formData.hasEmail &&
 *                      <TextInput source="email" {...rest} />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 *
 * const OrderEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <SelectInput source="country" choices={countries} />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) =>
 *                      <SelectInput
 *                          source="city"
 *                          choices={getCitiesFor(formData.country)}
 *                          {...rest}
 *                      />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 */
declare const FormDataConsumer: (props: ConnectedProps) => JSX.Element;
export declare const FormDataConsumerView: (props: Props) => any;
export default FormDataConsumer;
export interface FormDataConsumerRenderParams {
    formData: any;
    scopedFormData?: any;
    getSource?: (source: string) => string;
}
export declare type FormDataConsumerRender = (params: FormDataConsumerRenderParams) => ReactNode;
interface ConnectedProps {
    children: FormDataConsumerRender;
    form?: string;
    record?: any;
    source?: string;
    [key: string]: any;
}
interface Props extends ConnectedProps {
    formData: any;
    index?: number;
}
//# sourceMappingURL=FormDataConsumer.d.ts.map