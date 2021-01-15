import {
  Checkbox,
  DialogContent,
  FormControlLabel,
  Grid,
  styled,
  Typography,
} from '@material-ui/core';
import { Field, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { ColumnForm } from './DrawerExample';

export interface ColumnDefinitions {
  [category: string]: Column[];
}

interface Column {
  field: string;
}

const COLUMN_DEFINITIONS: ColumnDefinitions = {
  category1: [
    { field: 'field0' },
    { field: 'field1' },
    { field: 'field2' },
    { field: 'field3' },
    { field: 'field4' },
    { field: 'field5' },
    { field: 'field6' },
    { field: 'field7' },
    { field: 'field8' },
    { field: 'field9' },
  ],
  category2: [
    { field: 'field10' },
    { field: 'field11' },
    { field: 'field12' },
    { field: 'field13' },
    { field: 'field14' },
    { field: 'field15' },
    { field: 'field16' },
    { field: 'field17' },
    { field: 'field18' },
    { field: 'field19' },
  ],
  category3: [
    { field: 'field20' },
    { field: 'field21' },
    { field: 'field22' },
    { field: 'field23' },
    { field: 'field24' },
    { field: 'field25' },
    { field: 'field26' },
    { field: 'field27' },
    { field: 'field28' },
    { field: 'field29' },
  ],
  category4: [
    { field: 'field30' },
    { field: 'field31' },
    { field: 'field32' },
    { field: 'field33' },
    { field: 'field34' },
    { field: 'field35' },
    { field: 'field36' },
    { field: 'field37' },
    { field: 'field38' },
    { field: 'field39' },
  ],
  category5: [
    { field: 'field40' },
    { field: 'field41' },
    { field: 'field42' },
    { field: 'field43' },
    { field: 'field44' },
    { field: 'field45' },
    { field: 'field46' },
    { field: 'field47' },
    { field: 'field48' },
    { field: 'field49' },
  ],
};

const DrawerContent: FC = () => {
  const { values } = useFormikContext<ColumnForm>();

  const numberSelected = Object.keys(values).filter((column) => values[column]).length;

  return (
    <DialogContent dividers>
      {Object.keys(COLUMN_DEFINITIONS).map((group) => (
        <Section key={group}>
          <Typography variant="h3">{group}</Typography>
          <Grid direction="column" container>
            {COLUMN_DEFINITIONS[group].map((column: Column) => (
              <Grid key={column.field} item>
                <Field name={column.field}>
                  {({ field }: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" {...field} checked={field.value === true} />
                      }
                      label={column.field}
                      disabled={numberSelected === 1 && field.value}
                    />
                  )}
                </Field>
              </Grid>
            ))}
          </Grid>
        </Section>
      ))}
    </DialogContent>
  );
};

// Styled components
const Section = styled('div')(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: theme.spacing(3),
  },
}));

export default DrawerContent;
