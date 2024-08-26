import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
export default function Todo() {
  return (
    <Card
    className="todo-card"
      sx={{
        minWidth: 275,
        background: "#283593",
        color: "white",
        marginTop: "1rem",
      }}
    >
      <CardContent>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={8}>
            <Typography variant="h5">المهمة الأولى</Typography>
            <Typography variant="h6">التفاصيل</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton
              className="iconButton"
              sx={{
                color: "#8bc34a",
                background: "white",
                border: "solid #8bc34a 3px",
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              sx={{
                color: "#b23c17",
                background: "white",
                border: "solid #b23c17 3px",
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              sx={{
                color: "#1769aa",
                background: "white",
                border: "solid #1769aa 3px",
              }}
            >
              <ModeEditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
