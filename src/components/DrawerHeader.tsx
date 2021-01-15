import { Box, DialogTitle, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

import { DialogTitleProps, IconButtonProps } from '@material-ui/core';

interface Props extends DialogTitleProps {
  drawerTitle: React.ReactNode;
  subtitle?: React.ReactNode;
  onClose?: IconButtonProps['onClick'];
  CloseButtonProps?: IconButtonProps;
  onBack?: IconButtonProps['onClick'];
  BackButtonProps?: IconButtonProps;
}

const useStyles = makeStyles((theme: Theme) => ({
  backButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  typography: {
    overflowWrap: 'break-word',
  },
}));

const DrawerHeader: React.FC<Props> = ({
  drawerTitle,
  subtitle,
  onClose,
  CloseButtonProps = {},
  onBack,
  BackButtonProps = {},
  ...muiProps
}) => {
  const { backButton, typography } = useStyles({});
  return (
    <DialogTitle disableTypography {...muiProps}>
      <Box alignItems="center" display="flex" justifyContent="space-between" width="100%">
        <Box alignItems="center" display="flex" flexGrow={1} minWidth={0}>
          {Boolean(onBack) && (
            <IconButton
              onClick={onBack}
              edge="start"
              className={backButton}
              aria-label="back"
              {...BackButtonProps}
            >
              <BackIcon fontSize="large" />
            </IconButton>
          )}
          <Box flexGrow={1} minWidth={0}>
            <Typography className={typography} variant="h2">
                {drawerTitle}
            </Typography>
            {Boolean(subtitle) && (
              <Typography className={typography} variant="subtitle1" color="textSecondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
        {Boolean(onClose) && (
          <IconButton onClick={onClose} edge="end" aria-label="close" {...CloseButtonProps}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    </DialogTitle>
  );
};

export default DrawerHeader;
