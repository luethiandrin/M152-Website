import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as React from 'react';

export default function MetadataDialogComponent({ metadata, toggleModal, description, image }) {
    const [open] = React.useState(true);

    const toggle = () => {
        toggleModal(false);
    }

    const fullscreen = () => {
        document.getElementById(image).requestFullscreen();
    }

    return (
        <Dialog
            open={open}
            onClose={toggle}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Metadata"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Tabs>
                        <TabList>
                            <Tab>Unbearbeitet</Tab>
                            <Tab>Bearbeitet</Tab>
                        </TabList>

                        <TabPanel>
                            <img loading='lazy' id={image} onClick={fullscreen} className='image innerImage' src={image}></img>
                        </TabPanel>
                        <TabPanel>
                            <img loading='lazy' id={image} onClick={fullscreen} className='image innerImage' src={image}></img>
                        </TabPanel>
                    </Tabs>
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Type</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    Object.keys(metadata).map((key) => (
                                        <TableRow
                                            key={key}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {key}
                                            </TableCell>
                                            <TableCell>{metadata[key]}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div>
                        <h2 className='dialog-title'>Description</h2>
                        <p>{description}</p>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggle}>close</Button>
            </DialogActions>
        </Dialog>
    )
}