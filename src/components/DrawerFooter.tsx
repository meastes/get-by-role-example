import {
  Button,
  DialogActions as MuiDialogActions,
  Grid,
  styled,
  Typography,
} from '@material-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import { ColumnForm } from './DrawerExample';

interface Props {
  selectedColumns: string[];
  onClose?: () => void;
}

const DrawerFooter: FC<Props> = ({ selectedColumns, onClose }) => {
  const { values, setValues } = useFormikContext<ColumnForm>();

  const numberSelected = Object.keys(values).filter((column) => values[column]).length;

  function resetToDefault() {
    const defaultColumnData = selectedColumns.reduce((values, column) => {
      return {
        ...values,
        [column]: true,
      };
    }, {});

    setValues(defaultColumnData);
  }

  return (
    <DialogActions>
      <SelectionInfo>
        <Grid alignItems="center" spacing={1} container>
          <Grid item>
            <Typography>
              {numberSelected} selected
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={resetToDefault}>
              reset
            </Button>
          </Grid>
        </Grid>
      </SelectionInfo>
      <div>
        <Grid spacing={1} container>
          <Grid item>
            <Button color="primary" onClick={onClose}>
              cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              save
            </Button>
          </Grid>
        </Grid>
      </div>
    </DialogActions>
  );
};

// Styled components
const DialogActions = styled(MuiDialogActions)({
  justifyContent: 'space-between',
});

const SelectionInfo = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(3),
}));

export default DrawerFooter;
