import { memo, useId } from "react";
import { FormFieldWrapper } from "./shared/FormFieldWrapper";
import { useFormField } from "./shared/useFormField";
import type { Stringifyable } from "core/tools/Stringifyable";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { tss } from "tss";

type Props = {
    className?: string;
    title: string;
    description: string | undefined;
    isReadonly: boolean;
    options: Stringifyable[];
    selectedOptionIndex: number;
    onSelectedOptionIndexChange: (selectedOptionIndex: number) => void;
};

export const SelectFormField = memo((props: Props) => {
    const {
        className,
        title,
        description,
        isReadonly,
        options,
        selectedOptionIndex,
        onSelectedOptionIndexChange
    } = props;

    const { serializedValue, setSerializedValue, resetToDefault } = useFormField<
        number,
        number,
        never
    >({
        "serializedValue": selectedOptionIndex,
        "onChange": onSelectedOptionIndexChange,
        "parse": serializedValue => ({
            "isValid": true,
            "value": serializedValue
        })
    });

    const inputId = useId();

    const { classes } = useStyles();

    return (
        <FormFieldWrapper
            className={className}
            title={title}
            description={description}
            error={undefined}
            onResetToDefault={resetToDefault}
            inputId={inputId}
        >
            <Select
                className={classes.select}
                labelId="demo-simple-select-label"
                id={inputId}
                value={`${serializedValue}`}
                onChange={event => setSerializedValue(parseInt(event.target.value))}
                disabled={isReadonly}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={`${index}`}>
                        {(() => {
                            if (typeof option === "string") {
                                return option;
                            }

                            return <pre>{JSON.stringify(option, null, 2)}</pre>;
                        })()}
                    </MenuItem>
                ))}
            </Select>
        </FormFieldWrapper>
    );
});

const useStyles = tss.withName({ SelectFormField }).create({
    "select": {
        "minWidth": "min(200px, 100%)"
    }
});
