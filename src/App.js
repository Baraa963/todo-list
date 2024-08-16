import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

function App() {
  const [edittTodo, setedittTodo] = useState({
    edittTodoTitle: "",
    edittTodoSubTitle: "",
  });
  const [newTodo, setNewTodo] = useState({
    newTodoTitle: "",
    newTodoSubTitle: "",
  });

  const [allTodos, setAllTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.newTodoTitle !== "" && newTodo.newTodoSubTitle !== "") {
      setAllTodos([
        ...allTodos,
        {
          id: allTodos.length + 1,
          icon1: "icon-1",
          icon2: "icon-2",
          icon3: "icon-3",
          title: newTodo.newTodoTitle,
          subTitle: newTodo.newTodoSubTitle,
        },
      ]);
      setNewTodo({ newTodoTitle: "", newTodoSubTitle: "" });
    }
  };
  const deleteTodo = (id) => {
    const todos = allTodos.filter((t) => {
      return t.id !== id;
    });
    setAllTodos(todos);
  };
  const editTodo = (id) => {
    const updatedTodo = allTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: edittTodo.edittTodoTitle,
          subTitle: edittTodo.edittTodoSubTitle,
        };
      }
      return todo;
    });
    setAllTodos(updatedTodo);
    setedittTodo({ edittTodoTitle: "", edittTodoSubTitle: "" }); // Clear the input fields after editing
  };
  

  const todoList = allTodos.map((t) => {
    return (
      <div
        className="todo"
        key={t.id}
        style={{ background: "rgb(0 45 67)", padding: "10px" }}
      >
        <Stack spacing={3} direction="row">
          <Grid container spacing={2}>
            <Grid xs={6} display="flex">
              <Stack
                direction="row"
                spacing={2}
                justifyContent="start"
                alignItems="center"
              >
                <div
                  className={t.icon1}
                  onClick={() => {
                    deleteTodo(t.id);
                  }}
                >
                  <DeleteOutlineOutlinedIcon
                    style={{ color: "yellow", marginTop: "3px" }}
                  />
                </div>
                <div
                  className={t.icon2}
                  onClick={() => {
                    editTodo(t.id);
                  }}
                >
                  <ModeEditOutlinedIcon
                    style={{ color: "blue", marginTop: "3px" }}
                  />
                </div>
                <div className={t.icon3}>
                  <CheckIcon style={{ color: "green", marginTop: "3px" }} />
                </div>
              </Stack>
            </Grid>

            <Grid xs={6}>
              <Stack
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="end"
              >
                <h2 style={{ color: "white" }}>{t.title}</h2>
                <h4 style={{ color: "white" }}>{t.subTitle}</h4>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </div>
    );
  });

  return (
    <div className="App">
      <div>
        
        <TextField
          style={{ width: "40%" }}
          placeholder=" العنوان الفرعي الجديد "
          value={edittTodo.edittTodoSubTitle}
          onChange={(e) =>
            setedittTodo({ ...edittTodo, edittTodoSubTitle: e.target.value })
          }
        />
        <TextField
          style={{ width: "40%" }}
          placeholder=" العنوان الجديد "
          value={edittTodo.edittTodoTitle}
          onChange={(e) =>
            setedittTodo({ ...edittTodo, edittTodoTitle: e.target.value })
          }
        />

        <Button>تعديل</Button>
      </div>
      <Container
        maxWidth="sm"
        marginTop="5rem"
        style={{ backgroundColor: "white" }}
      >
        <h1>مهامي</h1>
        <hr style={{ marginTop: "-1rem" }} />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <ButtonGroup>
            <Button>الغير منجز</Button>
            <Button>المنجز</Button>
            <Button>الكل</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="column">
          {allTodos.length > 0 && todoList}
          {allTodos.length === 0 && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h3 style={{ color: "gray" }}>لا توجد مهام لعرضها</h3>
            </div>
          )}
          <Grid
            container
            spacing={0}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <Grid xs={2} style={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{
                  height: "8.5vh",
                  width: "90%",
                  background: "rgb(0 45 67)",
                }}
                onClick={addTodo}
              >
                إضافة
              </Button>
            </Grid>
            <Grid item xs={5}>
              <TextField
                style={{ width: "95%" }}
                placeholder="عنوان فرعي للمهمة"
                value={newTodo.newTodoSubTitle}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, newTodoSubTitle: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                style={{ width: "95%", marginLeft: "5px" }}
                placeholder="عنوان المهمة"
                value={newTodo.newTodoTitle}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, newTodoTitle: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
