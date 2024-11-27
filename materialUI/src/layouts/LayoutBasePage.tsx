import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useAppThemeContext, useDrawerContext } from "../contexts";

interface ILayoutBasePage {
    title: string,
    toolbar?: ReactNode,
    children: ReactNode
};

export const LayoutBasePage = ({ title, toolbar, children }: ILayoutBasePage) => {
    const theme = useTheme();
    const smDowm = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    const { toggleTheme, themeName } = useAppThemeContext();
    const { toggleDrawer } = useDrawerContext();

    const ThemeIcon = ({ icon }: { icon: string }) => {
        return <IconButton
            sx={{
                position: "absolute",
                right: theme.spacing(1)
            }}
            onClick={toggleTheme}>
            <Icon sx={{ fontSize: theme.spacing(4) }}>{icon}</Icon>
        </IconButton>
    };

    return (
        <Box display="flex" flexDirection="column" gap={1}>
            <Box
                display="flex"
                alignItems="center"
                gap={2}
                margin="8px"
            >
                {
                    smDowm &&
                    <IconButton onClick={toggleDrawer}>
                        <Icon sx={{ fontSize: theme.spacing(4) }}>menu</Icon>
                    </IconButton>
                }

                <Typography
                    variant={smDowm ? "h5" : mdDown ? "h4" : "h3"}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                >
                    {title}
                </Typography>

                {
                    themeName === "light"
                        ? <ThemeIcon icon="dark_mode" />
                        : <ThemeIcon icon="light_mode" />
                }

            </Box>

            {
                toolbar &&
                <Box overflow="auto" margin="0 8px">
                    {toolbar}
                </Box>
            }

            <Box margin="0 8px">
                {children}
            </Box>

        </Box >
    )
};
