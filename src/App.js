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

  /**------------------edit todo------------------- */
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [EditTodoId, setEditTodoId] = useState();
  const showshowEditPopupfunc = () => {
    setShowEditPopup(true);
  };

  const showshowEditPopupfunc1 = () => {
    setShowEditPopup(false);
  };

  const [edittTodo, setedittTodo] = useState({
    edittTodoTitle: "",
    edittTodoSubTitle: "",
  });

  /**------------------new Todo------------------- */
  const [newTodo, setNewTodo] = useState({
    newTodoTitle: "",
    newTodoSubTitle: "",
  });

  /**------------------all Todos------------------- */
  const [allTodos, setAllTodos] = useState([]);

  /**------------------Completed Todos------------------- */
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const CompletedTodosFunc = (id) => {
    const todos = allTodos.map((t) => {
      if (t.id === id) {
        setCompletedTodos([
          ...CompletedTodos,
          {
            id: CompletedTodos.length + 1,
            icon1: "icon-1",
            icon2: "icon-2",
            icon3: "icon-3",
            title: t.title,
            subTitle: t.subTitle,
          },
        ]);
      }
      return t;
    });

    const todos1 = allTodos.filter((t) => t.id !== id);
    setAllTodos(todos1);
  };

  /**------------------UnCompleted Todos------------------- */

  const [UnCompletedTodos, setUnCompletedTodos] = useState([]);
  const UnCompletedTodosFunc = (id) => {
    const todos = allTodos.map((t) => {
      if (t.id !== id) {
        setUnCompletedTodos([
          ...allTodos,
          {
            id: UnCompletedTodos.length + 1,
            icon1: "icon-1",
            icon2: "icon-2",
            icon3: "icon-3",
            title: t.title,
            subTitle: t.subTitle,
          },
        ]);
      }
      return t;
    });
  };

  /**------------------add Todo function------------------- */
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

  /**------------------delete Todo function------------------- */
  const deleteTodo = (id) => {
    const todos = allTodos.filter((t) => t.id !== id);
    setAllTodos(todos);
  };

  /**------------------edit Todo function------------------- */
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

  return (
    <div className="App">
      {showEditPopup && (
        <div className="edit-popup">
          <div className="textField-popup">
            <TextField
              style={{ width: "40rem" }}
              placeholder=" العنوان الفرعي الجديد "
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
              placeholder=" العنوان الجديد "
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
                editTodo(EditTodoId);
                showshowEditPopupfunc1();
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
              ? CompletedTodos
              : showTodos.unCompletedTodos
              ? allTodos.filter(
                  (todo) =>
                    !CompletedTodos.some(
                      (completed) => completed.id === todo.id
                    )
                )
              : []
            ).length > 0 ? (
              (showTodos.allTodos
                ? allTodos
                : showTodos.completedTodos
                ? CompletedTodos
                : showTodos.unCompletedTodos
                ? allTodos.filter(
                    (todo) =>
                      !CompletedTodos.some(
                        (completed) => completed.id === todo.id
                      )
                  )
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
                              showshowEditPopupfunc();
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
                              UnCompletedTodosFunc(todo.id)
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
