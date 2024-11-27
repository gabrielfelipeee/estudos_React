import { Box, Button, Icon, InputAdornment, Paper, TextField } from "@mui/material";


interface IToolbarProps {
    searchText?: string,
    showInput?: boolean,
    whenChangingSearchText?: (newText: string) => void,
    buttonText?: string,
    showButton?: boolean,
    whenClickButton?: () => void
};

export const Toolbar = ({
    searchText = "",
    showInput = false,
    whenChangingSearchText,
    buttonText = "novo",
    showButton = true,
    whenClickButton
}: IToolbarProps) => {

    return (
        <Box
            component={Paper}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            padding={1}
        >

            {
                showInput &&
                <TextField
                    size="small"
                    placeholder="Pesquisar..."
                    value={searchText}
                    onChange={(event) => whenChangingSearchText?.(event.target.value)}
                    slotProps={{
                        input: {
                            endAdornment: ( // Serve para adicionar elemento decorativo, como ícone.
                                <InputAdornment position="end">
                                    <Icon>search</Icon>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            }

            {
                showButton &&
                <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>add</Icon>}
                    onClick={whenClickButton}
                >
                    {buttonText}
                </Button>
            }

        </Box>
    )
};
