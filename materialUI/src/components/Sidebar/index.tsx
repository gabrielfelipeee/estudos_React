import { Avatar, Box, Divider, Drawer, Icon, IconButton, List, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useDrawerContext } from "../../contexts";
import ListItemLink from "./ListItemLink";



interface ISidebarProps {
    children: ReactNode
}

export const Sidebar = ({ children }: ISidebarProps) => {
    const theme = useTheme();
    const smDowm = useMediaQuery(theme.breakpoints.down("sm"));
    const { toggleDrawer, isDrawerOpen, drawerOptions } = useDrawerContext();

    return (
        <>
            <Drawer
                open={isDrawerOpen}
                variant={smDowm ? "temporary" : "permanent"}
                onClose={toggleDrawer}
            >
                {
                    smDowm &&
                    <IconButton sx={{
                        position: "absolute",
                        right: "0",
                        top: "0"
                    }}
                        onClick={toggleDrawer}
                    >
                        <Icon sx={{ fontSize: theme.spacing(4) }}>close</Icon>
                    </IconButton>
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
                            {
                                drawerOptions.map((drawerOption, index) =>
                                    <ListItemLink
                                        key={index}
                                        icon={drawerOption.icon}
                                        label={drawerOption.label}
                                        to={drawerOption.path}
                                        onClick={smDowm ? toggleDrawer : undefined}
                                    />
                                )
                            }
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box
                height="100vh"
                marginLeft={smDowm ? 0 : theme.spacing(28)}
            >
                {children}
            </Box>
        </>
    )
};
