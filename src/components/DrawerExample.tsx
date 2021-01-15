import DrawerHeader from "./DrawerHeader";
import { Drawer, withStyles } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { FC, useEffect } from "react";
import DrawerContent from "./DrawerContent";
import DrawerFooter from "./DrawerFooter";

export interface Props {
  open?: boolean;
  onClose?: () => void;
  selectedColumns: string[];
  setSelectedColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export type ColumnForm = {
  [key: string]: boolean;
};

const ColumnDrawer: FC<Props> = ({
  open = false,
  onClose,
  selectedColumns,
  setSelectedColumns,
}) => {
  const initialValues = selectedColumns.reduce((values, column) => {
    return {
      ...values,
      [column]: true,
    };
  }, {});

  function handleSubmit(values: ColumnForm) {
    const newSelectedColumns = Object.keys(values).filter(
      (column) => values[column]
    );

    setSelectedColumns(newSelectedColumns);
    onClose?.();
  }

  return (
    <Formik<ColumnForm> initialValues={initialValues} onSubmit={handleSubmit}>
      {({ resetForm }) => {
        useEffect(() => {
          if (!open) {
            resetForm();
          }
        }, [open]);

        return (
          <FixedSizeDrawer
            PaperProps={{ component: Form }}
            anchor="right"
            open={open}
            // onClose is intentionally omitted since we don't want to close the drawer when the overlay is clicked
          >
            <DrawerHeader drawerTitle="Modify columns" onClose={onClose} />
            <DrawerContent />
            <DrawerFooter selectedColumns={selectedColumns} onClose={onClose} />
          </FixedSizeDrawer>
        );
      }}
    </Formik>
  );
};

// Styled components
const FixedSizeDrawer = withStyles({
  paper: {
    width: 600,
  },
})(Drawer);

export default ColumnDrawer;
