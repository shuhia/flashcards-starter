import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  123: {
    id: "123",
    name: "example topic",
    icon: "icon url",
    quizIds: []
  }
};
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic(state, action) {
      const {
        id = "number",
        name = "name of topic",
        icon = "Icon url",
        quizIds = []
      } = action.payload;

      const topic = { id, name, icon, quizIds };
      state[id] = topic;
    },
    addQuizId(state, action) {
      const { id, topicId } = action.payload;
      state[topicId].quizIds.push(id);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics;
};

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
