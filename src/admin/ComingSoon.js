import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { __ } from "@wordpress/i18n";
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ComingSoon = () => {
    const [expanded, setExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(false);

    const toggleExpand = () => {
        setExpanded(prev => !prev);
    };

    const tableRows = [
        { feature: __('More Templates', 'slider-future'), free: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('New Menu Item', 'slider-future'), free: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('Content Type Woocommerce', 'slider-future'), free: <CancelIcon sx={{ color: "var(--red-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('Row Reverse for Responsive Layout', 'slider-future'), free: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('More controls from the dashboard to customize the editor', 'slider-future'), free: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('Dashboard Improvement', 'slider-future'), free: <CancelIcon sx={{ color: "var(--red-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
        { feature: __('Implementation of Default Values for Skin Controls. The "Global Color Skin" panel will be improved and extended to include additional controls, such as fonts and font sizes for various elements.', 'slider-future'), free: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} />, pro: <HourglassBottomIcon sx={{ color: "var(--green-color)" }} /> },
    ];

    useEffect(() => {
        const totalRows = tableRows.length;
        const maxRowsVisible = expanded ? totalRows : 10;  
        setShowExpandButton(totalRows > maxRowsVisible); 
    }, [expanded]);

    return (
        <>
           <div className='content-dashboard'>
                  <h3>{__('What\'s Coming Next', 'slider-future')}</h3>
                    <div className='documentation'>
                        <p>{__('Check out the exciting new features coming soon to Slider Future! See what we\'re working on for the next version.','slider-future')}</p>
                    </div>
                </div>
            <TableContainer
                component={Paper}
                className='table-pro'
                sx={{
                    maxHeight: expanded ? 'none' : 700,
                    overflowY: 'auto',
                    transition: 'max-height 0.5s ease',
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>{__('FEATURE', 'slider-future')}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{__('FREE', 'slider-future')}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{__('PRO', 'slider-future')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.feature}</TableCell>
                                <TableCell align="center">{row.free}</TableCell>
                                <TableCell align="center">{row.pro}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {showExpandButton && (
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: "24px" }}
                        onClick={toggleExpand}
                    >
                        {expanded ? __('Collapse', 'slider-future') : __('Expand', 'slider-future')}
                    </Button>
                </div>
            )}
        </>
    );
};

export default ComingSoon;
