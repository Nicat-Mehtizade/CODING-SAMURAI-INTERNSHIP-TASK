import { useState } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa6";
import { nanoid } from "nanoid";
import { FiCalendar } from "react-icons/fi";
import { MdEdit, MdDelete, MdCheck, MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addNewToDo = () => {
    if (newToDo.trim() !== "") {
      const toDo = {
        id: nanoid(8),
        text: newToDo.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([...toDos, toDo]);
      setNewToDo("");
    }
  };

  const deleteToDo = (id) => {
    setTodos(toDos.filter((q) => q.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText.trim() !== "") {
      setTodos(
        toDos.map((toDo) =>
          toDo.id === editingId ? { ...toDo, text: editText.trim() } : toDo
        )
      );
    }
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const completedCount = toDos.filter((toDo) => toDo.completed).length;
  const totalCount = toDos.length;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 h-screen">
      <div className="max-w-[900px] mx-auto">
        <div className="py-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-5xl text-center mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-wide"
          >
            Task List
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-semibold mb-5 text-gray-500 tracking-wider"
          >
            Manage your daily tasks
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FiCalendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Today</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {completedCount} / {totalCount} completed
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 rounded-full border-4 border-gray-200 relative">
                  <motion.div
                    className="absolute inset-0 rounded-full  border-gradient-to-r from-purple-500 to-blue-500"
                    style={{
                      background: `conic-gradient(from 0deg, #8b5cf6 0deg, #3b82f6 ${
                        (completedCount / totalCount) * 360
                      }deg, transparent ${
                        (completedCount / totalCount) * 360
                      }deg)`,
                    }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">
                      {totalCount > 0
                        ? Math.round((completedCount / totalCount) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              addNewToDo();
            }}
            className="flex items-center gap-3 p-5 bg-white rounded-lg w-full shadow-lg mb-10"
          >
            <input
              type="text"
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)}
              placeholder="Add new task..."
              className="w-full p-2 rounded-xl transition duration-300 focus:outline-none focus:[box-shadow:0_0_0_1px_black,0_0_0_3px_white,0_0_0_5px_rgb(107_114_128)]"
            />
            <button
              type="submit"
              className="bg-blue-500 py-3 px-6 rounded-lg text-white cursor-pointer transition duration-200 hover:bg-blue-700"
            >
              <FaPlus />
            </button>
          </motion.form>
          <div>
            {toDos.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center items-center gap-2 bg-white py-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                  <FiCalendar className="text-3xl text-purple-700" />
                </div>
                <h1 className="font-bold text-xl tracking-wide">No tasks</h1>
                <p className="text-gray-400 font-semibold">
                  Get started by adding your first task!
                </p>
              </motion.div>
            ) : (
              <div>
                <AnimatePresence>
                  {toDos.map((toDo) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        key={toDo.id}
                        className={`flex justify-between items-center bg-white rounded-xl p-4 shadow-lg transition duration-200 hover:shadow-xl ${
                          toDos.length > 1 ? "mb-4" : ""
                        }`}
                      >
                        <div className="flex items-center gap-5 flex-1">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              onClick={() => toggleComplete(toDo.id)}
                              type="checkbox"
                              checked={toDo.completed}
                              className="peer hidden"
                              readOnly
                            />
                            <div
                              className={`w-6 h-6 rounded-full border-2 transition duration-200 flex items-center justify-center ${
                                toDo.completed
                                  ? "bg-blue-500 border-blue-500"
                                  : "border-gray-400"
                              }`}
                            >
                              {toDo.completed && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </label>
                          <div className="flex-1">
                            {editingId === toDo.id ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") saveEdit();
                                    if (e.key === "Escape") cancelEdit();
                                  }}
                                  className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                                  autoFocus
                                />
                              </div>
                            ) : (
                              <div>
                                <p
                                  className={`text-lg font-semibold transition duration-200 ${
                                    toDo.completed
                                      ? "line-through text-gray-500"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {toDo.text}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {toDo.createdAt.toLocaleDateString("az-AZ")} -{" "}
                                  {toDo.createdAt.toLocaleTimeString("az-AZ", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {editingId === toDo.id ? (
                            <>
                              <button
                                onClick={saveEdit}
                                className="text-green-500 text-xl cursor-pointer transition duration-300 hover:text-green-700 p-1"
                              >
                                <MdCheck />
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="text-gray-500 text-xl cursor-pointer transition duration-300 hover:text-gray-700 p-1"
                              >
                                <MdClose />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => startEdit(toDo.id, toDo.text)}
                                className="text-blue-500 text-xl cursor-pointer transition duration-300 hover:text-blue-700 p-1"
                              >
                                <MdEdit />
                              </button>
                              <button
                                onClick={() => deleteToDo(toDo.id)}
                                className="text-red-500 text-xl cursor-pointer transition duration-300 hover:text-red-700 p-1"
                              >
                                <MdDelete />
                              </button>
                            </>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
