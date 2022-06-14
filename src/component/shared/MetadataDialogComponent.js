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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as React from 'react';

export default function MetadataDialogComponent({ metadata, toggleModal, description, image, eImage, initX, initY }) {
    const [open] = React.useState(true);

    const toggle = () => {
        toggleModal(false);
    }

    const fullscreenDefault = () => {
        document.getElementById(image).requestFullscreen();
    }

    const fullscreenEdited = () => {
        document.getElementById(eImage).requestFullscreen();
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
                            <Tab>Bearbeitet</Tab>
                            <Tab>Unbearbeitet</Tab>
                        </TabList>
                    Klick mich:

                        <TabPanel>
                            <img id={eImage} onClick={fullscreenEdited} className='image' alt='' src={eImage}></img>
                        </TabPanel>
                        <TabPanel>
                            <img id={image} onClick={fullscreenDefault} className='image' alt='' src={image}></img>
                        </TabPanel>
                    </Tabs>
                    <TableContainer sx={{ overflowX: 'revert' }}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Type</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Actual width (px)
                                    </TableCell>
                                    <TableCell>
                                        {initX}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                    Actual height (px)
                                    </TableCell>
                                    <TableCell>
                                        {initY}
                                    </TableCell>
                                </TableRow>
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