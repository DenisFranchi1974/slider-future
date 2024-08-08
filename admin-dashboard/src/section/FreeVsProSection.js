import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FreeVsProSection = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Confronto Free vs Pro
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Caratteristica</TableCell>
                            <TableCell>Free</TableCell>
                            <TableCell>Pro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Caratteristica 1</TableCell>
                            <TableCell>Inclusa</TableCell>
                            <TableCell>Inclusa</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Caratteristica 2</TableCell>
                            <TableCell>Limitata</TableCell>
                            <TableCell>Inclusa</TableCell>
                        </TableRow>
                        {/* Aggiungi altre righe qui */}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="secondary" href="https://example.com/pro">
                Passa alla versione Pro
            </Button>
        </Box>
    );
};

export default FreeVsProSection;
