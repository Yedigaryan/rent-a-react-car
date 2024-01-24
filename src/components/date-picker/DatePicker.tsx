import TextField from '@mui/material/TextField';
import {LocalizationProvider, MobileDateTimePicker} from '@mui/x-date-pickers';
import {useState} from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFnsV3";
import styles from "./DatePicker.module.scss"


export const DatePicker = () => {
    const [date, setDate] = useState(new Date('2018-01-01T00:00:00.000Z'));

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDateTimePicker
                    className={styles.customDatepicker}
                    value={date}
                    onChange={(newValue: any) => {
                        setDate(newValue);
                    }}
                    // @ts-ignore
                    renderInput={(params: any) => <TextField {...params} helperText="Hardcoded helper text"  />}
                />
            </LocalizationProvider>
        </>
    );
};