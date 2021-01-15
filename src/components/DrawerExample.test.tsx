import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import DrawerExample from './DrawerExample';

describe('DrawerExample', () => {
  afterEach(cleanup);

  describe.only('selecting', () => {
    it('defaults checkboxes to checked when selectedColumns is specified', () => {
      render(
        <DrawerExample
          selectedColumns={['field5', 'field15', 'field25']}
          setSelectedColumns={jest.fn()}
          open
        />,
      );

      expect(screen.getByLabelText('field5')).toBeChecked();
      expect(screen.getByLabelText('field15')).toBeChecked();
      expect(screen.getByLabelText('field25')).toBeChecked();
    });

    it('defaults checkboxes to checked when selectedColumns is specified (getByRole)', () => {
      render(
        <DrawerExample
          selectedColumns={['field5', 'field15', 'field25']}
          setSelectedColumns={jest.fn()}
          open
        />,
      );

      expect(screen.getByRole('checkbox', { name: 'field5' })).toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'field15' })).toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'field25' })).toBeChecked();
    });
  });
});
