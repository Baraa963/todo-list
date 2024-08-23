import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import CheckIcon from "@mui/icons-material/Check";
import "./App.css";

function App() {
  const [showTodos, setShowTodos] = useState({
    allTodos: false,
    completedTodos: false,
    unCompletedTodos: false,
  });

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  const [edittTodo, setedittTodo] = useState({
    edittTodoTitle: "",
    edittTodoSubTitle: "",
  });

  const [newTodo, setNewTodo] = useState({
    newTodoTitle: "",
    newTodoSubTitle: "",
  });

  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [unCompletedTodos, setUnCompletedTodos] = useState([]);

  const showUnCompletedTodosFunc = () => {
    setShowTodos({
      allTodos: false,
      completedTodos: false,
      unCompletedTodos: true,
    });
  };

  const showCompletedTodosFunc = () => {
    setShowTodos({
      allTodos: false,
      completedTodos: true,
      unCompletedTodos: false,
    });
  };

  const showAllTodosFunc = () => {
    setShowTodos({
      allTodos: true,
      completedTodos: false,
      unCompletedTodos: false,
    });
  };

  const CompletedTodosFunc = (id) => {
    const todoToComplete = allTodos.find((t) => t.id === id);
    if (todoToComplete) {
      setCompletedTodos([...completedTodos, todoToComplete]);
      setUnCompletedTodos(allTodos.filter((t) => t.id !== id));
      setAllTodos(allTodos.filter((t) => t.id !== id));
    }
  };

  // const UnCompletedTodosFunc = (id) => {
  //   const todoToUncomplete = completedTodos.find((t) => t.id === id);
  //   if (todoToUncomplete) {
  //     setUnCompletedTodos([...unCompletedTodos, todoToUncomplete]);
  //     setCompletedTodos(completedTodos.filter((t) => t.id !== id));
  //   }
  // };

  const addTodo = () => {
    if (newTodo.newTodoTitle !== "" && newTodo.newTodoSubTitle !== "") {
      const newTask = {
        id: allTodos.length + 1,
        icon1: "icon-1",
        icon2: "icon-2",
        icon3: "icon-3",
        title: newTodo.newTodoTitle,
        subTitle: newTodo.newTodoSubTitle,
      };
      setAllTodos([...allTodos, newTask]);
      setUnCompletedTodos([...unCompletedTodos, newTask]);
      setNewTodo({ newTodoTitle: "", newTodoSubTitle: "" });
    }
  };

  const deleteTodo = (id) => {
    setAllTodos(allTodos.filter((t) => t.id !== id));
    setCompletedTodos(completedTodos.filter((t) => t.id !== id));
    setUnCompletedTodos(unCompletedTodos.filter((t) => t.id !== id));
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
    setedittTodo({ edittTodoTitle: "", edittTodoSubTitle: "" });
    setShowEditPopup(false);
  };

  return (
    <div className="App">
      {showEditPopup && (
        <div className="edit-popup">
          <div className="textField-popup">
            <TextField
              style={{ width: "40rem" }}
              placeholder="العنوان الفرعي الجديد"
              value={edittTodo.edittTodoSubTitle}
              onChange={(e) =>
                setedittTodo({
                  ...edittTodo,
                  edittTodoSubTitle: e.target.value,
                })
              }
            />
          </div>
          <div className="textField-popup">
            <TextField
              style={{ width: "40rem" }}
              placeholder="العنوان الجديد"
              value={edittTodo.edittTodoTitle}
              onChange={(e) =>
                setedittTodo({ ...edittTodo, edittTodoTitle: e.target.value })
              }
            />
          </div>
          <div className="btn-popup">
            <Button
              variant="contained"
              style={{
                height: "8.5vh",
                width: "90%",
                background: "rgb(0 45 67)",
                marginTop: "0.5rem",
              }}
              onClick={() => {
                editTodo(editTodoId);
              }}
            >
              تعديل
            </Button>
          </div>
        </div>
      )}

      <Container
        maxWidth="sm"
        marginTop="5rem"
        style={{
          backgroundColor: "beige",
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
        }}
      >
        <h1>مهامي</h1>
        <hr style={{ marginTop: "-1rem" }} />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <ButtonGroup>
            <Button onClick={showUnCompletedTodosFunc}>الغير منجز</Button>
            <Button onClick={showCompletedTodosFunc}>المنجز</Button>
            <Button onClick={showAllTodosFunc}>الكل</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="column">
          {(showTodos.allTodos ||
            showTodos.completedTodos ||
            showTodos.unCompletedTodos) &&
            ((showTodos.allTodos
              ? allTodos
              : showTodos.completedTodos
              ? completedTodos
              : showTodos.unCompletedTodos
              ? unCompletedTodos
              : []
            ).length > 0 ? (
              (showTodos.allTodos
                ? allTodos
                : showTodos.completedTodos
                ? completedTodos
                : showTodos.unCompletedTodos
                ? unCompletedTodos
                : []
              ).map((todo) => (
                <div
                  className="todo"
                  key={todo.id}
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
                            className={todo.icon1}
                            onClick={() => {
                              deleteTodo(todo.id);
                            }}
                          >
                            <DeleteOutlineOutlinedIcon
                              style={{ color: "yellow", marginTop: "3px" }}
                            />
                          </div>
                          <div
                            className={todo.icon2}
                            onClick={() => {
                              setEditTodoId(todo.id);
                              setedittTodo({
                                edittTodoTitle: todo.title,
                                edittTodoSubTitle: todo.subTitle,
                              });
                              setShowEditPopup(true);
                            }}
                          >
                            <ModeEditOutlinedIcon
                              style={{ color: "blue", marginTop: "3px" }}
                            />
                          </div>
                          <div
                            className={todo.icon3}
                            onClick={() => {
                              CompletedTodosFunc(todo.id);
                              // UnCompletedTodosFunc(todo.id);
                            }}
                          >
                            <CheckIcon
                              style={{ color: "green", marginTop: "3px" }}
                            />
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
                          <h2 style={{ color: "white" }}>{todo.title}</h2>
                          <h4 style={{ color: "white" }}>{todo.subTitle}</h4>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h3 style={{ color: "gray" }}>لا توجد مهام لعرضها</h3>
              </div>
            ))}
        </Stack>
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
      </Container>
    </div>
  );
}

export default App;
