import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import useNews from "../hooks/useNews";
import New from "./New";



const NewsList = () => {
    const { news, page, totalNews, handleChangePage } = useNews()
    const totalPages = Math.ceil(totalNews / 20)
    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant='h3'
                component='h2'
            >
                Últimas noticias
            </Typography>
            <Grid container spacing={2}>
                {news.map(newItem => (
                    <New
                        key={newItem.url}
                        newItem={newItem}
                    />
                ))}
            </Grid>
            <Stack 
                spacing={2}
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{marginY: 5}}
            >
                <Pagination 
                    count={totalPages} 
                    color='primary'
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    );
};

export default NewsList;