import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useDrawerContext } from "../../contexts";



interface ISidebarProps {
    children: ReactNode
}

const Sidebar = ({ children }: ISidebarProps) => {
    const theme = useTheme();
    const smDowm = useMediaQuery(theme.breakpoints.down("sm"));
    const { toggleDrawer, isDrawerOpen } = useDrawerContext();

    return (
        <>
            <MenuIcon
                sx={{
                    position: "absolute",
                    width: theme.spacing(4),
                    height: theme.spacing(4),
                    cursor: "pointer"
                }}
                onClick={toggleDrawer}
            />
            <Drawer
                open={isDrawerOpen}
                variant={smDowm ? "temporary" : "permanent"}
                onClose={toggleDrawer}
            >
                {
                    smDowm && <CloseIcon
                        sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            width: theme.spacing(4),
                            height: theme.spacing(4),
                            cursor: "pointer"
                        }}
                        onClick={toggleDrawer}
                    />
                }
                <Box
                    width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Avatar
                            alt="Avatar"
                            src="https://placehold.co/48"
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                        />
                    </Box>
                    <Divider />

                    <Box
                        flex="1" // Ocupa todo o espaço restante
                    >
                        <List component="nav">
                            <ListItemButton >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box
                height="100vh"
                marginLeft={smDowm ? theme.spacing(5) : theme.spacing(28)} // 112px | 1 = 4px, ou seja, 28 * 4 = 112
            >
                {children}
            </Box>
        </>
    )
};
export default Sidebar;
