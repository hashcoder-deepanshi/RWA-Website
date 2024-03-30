import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
                  Sr. No.
                </TableCell>
                <TableCell>
                  Event Name
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Contact Number
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Notice
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((event) => {
                const createdAt = format(event.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={event.id}
                  >
                    <TableCell>
                      {event.id}
                    </TableCell>
                    <TableCell>
                      {event.name}
                    </TableCell>
                    <TableCell>
                      {event.address.city}, {event.address.state}
                    </TableCell>
                    <TableCell>
                      {event.phone}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {event.email}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
